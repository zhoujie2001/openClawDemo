# GitHub Pages 设置指南

## 网页链接
设置完成后，您的页面将通过以下链接访问：
**https://zhoujie2001.github.io/natural-sounds-player/**

## 设置步骤

### 1. 创建GitHub仓库（如果尚未创建）
1. 访问 https://github.com/new
2. 仓库名称：`natural-sounds-player`
3. 描述：Natural Sounds Player - Vue.js + Node.js music streaming app
4. 选择公开（Public）
5. **不要**初始化README、.gitignore或license
6. 点击"Create repository"

### 2. 推送代码到GitHub
由于网络连接问题，请手动执行以下命令：

```bash
# 在项目目录中执行
cd D:\WORK\natural-sounds-player

# 如果远程仓库已存在，先移除
git remote remove origin

# 添加新的远程仓库
git remote add origin https://github.com/zhoujie2001/natural-sounds-player.git

# 推送代码
git push -u origin master
```

### 3. 设置GitHub Pages
1. 访问 https://github.com/zhoujie2001/natural-sounds-player/settings/pages
2. 在"Source"部分：
   - 选择：**Deploy from a branch**
   - 分支：选择 **gh-pages**（需要先创建）
   - 文件夹：**/(root)**
3. 点击"Save"

### 4. 创建gh-pages分支并推送构建文件
```bash
# 切换到构建目录
cd D:\WORK\natural-sounds-player\frontend\dist

# 初始化新的Git仓库
git init
git add .
git commit -m "Deploy to GitHub Pages"

# 创建并切换到gh-pages分支
git checkout -b gh-pages

# 添加远程仓库
git remote add origin https://github.com/zhoujie2001/natural-sounds-player.git

# 强制推送到gh-pages分支
git push -f origin gh-pages
```

### 5. 等待部署完成
1. GitHub Pages部署通常需要1-2分钟
2. 访问 https://zhoujie2001.github.io/natural-sounds-player/ 查看页面
3. 可以在仓库的"Actions"标签页查看部署状态

## 备用方案：使用现有构建文件

如果GitHub Pages设置遇到问题，您可以直接使用已构建的文件：

1. **本地预览**：打开 `D:\WORK\natural-sounds-player\frontend\dist\index.html` 在浏览器中
2. **部署到其他平台**：
   - Netlify：拖放dist文件夹到 https://app.netlify.com/drop
   - Vercel：导入GitHub仓库
   - Cloudflare Pages：上传dist文件夹

## 项目信息
- **项目名称**：Natural Sounds Player
- **技术栈**：Vue.js 3 + Node.js + Vite
- **功能**：三个自然主题歌单（雨和屋檐、光和枯树、风和草地）
- **构建状态**：✅ 已完成构建
- **构建目录**：`frontend/dist/`

## 故障排除
1. **404错误**：等待几分钟后重试，GitHub Pages需要时间部署
2. **空白页面**：检查浏览器控制台是否有JavaScript错误
3. **网络连接问题**：尝试使用VPN或稍后重试
4. **部署失败**：检查仓库的Actions标签页查看错误详情

## 联系支持
如有问题，请通过飞书联系。