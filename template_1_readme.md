# 优化版 Markdown 文档查看器

## 🚀 特性

1. **性能优化**
   - 添加加载进度条
   - 骨架屏加载效果
   - 图片懒加载
   - Service Worker 缓存支持
   - 优化JavaScript执行逻辑

2. **用户体验**
   - 平滑的动画过渡
   - 响应式设计
   - 深色/浅色主题切换
   - 移动端适配

3. **错误处理**
   - 网络错误自动重试
   - 友好的错误提示
   - Markdown解析错误处理

## 📁 文件说明

- `template_1_optimized.html` - 主HTML文件，包含所有优化
- `service-worker.js` - Service Worker缓存脚本（可选）
- `README.md` - 本说明文件

## 🔧 安装使用

### 基础使用
1. 将 `template_1_optimized.html` 上传到你的网站目录
2. 通过URL参数指定Markdown文件：