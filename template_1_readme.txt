
### 启用Service Worker（可选）
1. 将 `service-worker.js` 上传到网站根目录
2. 确保HTTPS环境（本地开发可以使用localhost）
3. Service Worker将自动注册并开始缓存

### 服务器配置建议
在服务器配置文件（如`.htaccess`或Nginx配置）中添加：

```apache
# 启用缓存
<IfModule mod_expires.c>
 ExpiresActive On
 # Markdown文件缓存1小时
 <FilesMatch "\.(md)$">
     ExpiresDefault "access plus 1 hour"
     Header set Cache-Control "public, max-age=3600"
 </FilesMatch>
</IfModule>

# 启用Gzip压缩
<IfModule mod_deflate.c>
 AddOutputFilterByType DEFLATE text/markdown
 AddOutputFilterByType DEFLATE text/html
 AddOutputFilterByType DEFLATE text/css
 AddOutputFilterByType DEFLATE application/javascript
</IfModule>