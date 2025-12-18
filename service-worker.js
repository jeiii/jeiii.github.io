// service-worker.js
const CACHE_NAME = 'md-viewer-v1.0.1';
const urlsToCache = [
    './',
    'https://cdn.jsdelivr.net/npm/marked/marked.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
    'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;700;900&display=swap'
];

// 安装Service Worker
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
            .then(() => self.skipWaiting())
    );
});

// 激活Service Worker
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// 拦截请求
self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);
    
    // 只缓存同源的Markdown文件和静态资源
    if (url.origin === self.location.origin) {
        // 对Markdown文件使用缓存优先策略
        if (url.pathname.endsWith('.md')) {
            event.respondWith(
                caches.match(event.request)
                    .then(cachedResponse => {
                        // 如果有缓存，返回缓存并更新
                        if (cachedResponse) {
                            // 在后台更新缓存
                            fetchAndCache(event.request);
                            return cachedResponse;
                        }
                        
                        // 没有缓存，直接请求
                        return fetchAndCache(event.request);
                    })
                    .catch(() => {
                        // 网络失败时返回离线页面
                        return new Response('网络连接失败，请检查网络后重试', {
                            status: 503,
                            statusText: 'Service Unavailable',
                            headers: new Headers({
                                'Content-Type': 'text/plain'
                            })
                        });
                    })
            );
        } else if (url.pathname.includes('/template_') || 
                   url.pathname.endsWith('.html')) {
            // 对HTML文件使用网络优先策略
            event.respondWith(
                fetch(event.request)
                    .then(response => {
                        // 克隆响应以缓存
                        const responseToCache = response.clone();
                        caches.open(CACHE_NAME)
                            .then(cache => {
                                cache.put(event.request, responseToCache);
                            });
                        return response;
                    })
                    .catch(() => {
                        // 网络失败时返回缓存
                        return caches.match(event.request);
                    })
            );
        }
    }
    
    // 对CDN资源使用缓存优先策略
    if (url.href.includes('cdn.jsdelivr.net') || 
        url.href.includes('cdnjs.cloudflare.com') ||
        url.href.includes('fonts.googleapis.com')) {
        event.respondWith(
            caches.match(event.request)
                .then(cachedResponse => {
                    if (cachedResponse) {
                        return cachedResponse;
                    }
                    return fetch(event.request).then(response => {
                        // 不缓存太大的文件
                        if (response.status === 200 && response.type === 'basic') {
                            const responseToCache = response.clone();
                            caches.open(CACHE_NAME)
                                .then(cache => {
                                    cache.put(event.request, responseToCache);
                                });
                        }
                        return response;
                    });
                })
        );
    }
});

// 辅助函数：获取并缓存
function fetchAndCache(request) {
    return fetch(request)
        .then(response => {
            // 检查响应是否有效
            if (!response || response.status !== 200 || response.type !== 'basic') {
                return response;
            }
            
            // 克隆响应以缓存
            const responseToCache = response.clone();
            
            caches.open(CACHE_NAME)
                .then(cache => {
                    cache.put(request, responseToCache);
                });
            
            return response;
        });
}

// 监听消息
self.addEventListener('message', event => {
    if (event.data.action === 'skipWaiting') {
        self.skipWaiting();
    }
});