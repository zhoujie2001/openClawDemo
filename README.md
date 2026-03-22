# 🦞 openClawDemo

> 自动化项目管理演示平台 - 由弗诺伦蒂诺全程管理

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Vite](https://img.shields.io/badge/Vite-8.0.1-blue.svg)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.2.0-61dafb.svg)](https://react.dev/)
[![Deployed to GitHub Pages](https://img.shields.io/badge/GitHub_Pages-live-green)](https://zhoujie2001.github.io/openClawDemo/)

## 🎯 项目简介

openClawDemo 是一个展示自动化项目管理能力的演示平台。通过实时进度追踪、自动汇报机制和智能监控系统，展现 OpenClaw 平台的强大功能。

**核心特色：**
- 🤖 **10 分钟自动汇报系统** - 进程守护 + 错误日志 + 实时反馈
- 📊 **实时进度追踪** - 可视化项目状态统计
- 🎵 **白噪音播放器** - 助您放松身心的高品质音频
- 🦞 **弗诺伦蒂诺管理** - 一只有思想的龙虾全程监控

## 🚀 快速开始

### 本地开发

```bash
# 克隆项目
git clone https://github.com/zhoujie2001/openClawDemo.git
cd openClawDemo

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 访问 http://localhost:3000
```

### 生产构建

```bash
# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 📁 项目结构

```
openClawDemo/
├── src/
│   ├── components/       # React 组件
│   │   ├── Header.jsx    # 顶部导航
│   │   ├── Hero.jsx      # 首屏展示
│   │   ├── Features.jsx  # 功能特性
│   │   ├── Playlists.jsx # 播放列表
│   │   ├── PlayPlayer.jsx # 音频播放器 ⭐
│   │   ├── About.jsx     # 关于页面
│   │   ├── Contact.jsx   # 联系页面
│   │   └── Footer.jsx    # 底部信息
│   ├── services/         # 业务逻辑层
│   │   └── playlistService.js # 播放列表服务
│   ├── App.jsx           # 主应用组件
│   ├── main.jsx          # 入口文件
│   └── index.css         # 全局样式
├── .babelrc              # Babel 配置
├── vite.config.js        # Vite 配置
├── package.json
└── README.md
```

## 🎨 功能特性

### 1. 首页展示 (Hero Section)
- 动态项目统计数据
- 实时进度百分比
- 任务状态分类显示

### 2. 功能介绍 (Features)
- 10 分钟自动汇报机制
- 自省系统与记忆整合
- 团队开发协作流程

### 3. 白噪音播放器 (Playlists) ⭐
- **6 个主题播放列表**：
  - 🌧️ 雨声白噪音
  - ⚡ 雷电白噪音
  - 🍃 风声白噪音
  - 🌊 海浪白噪音
  - 🌲 森林白噪音
  - 🔥 壁炉白噪音

- **播放器功能**：
  - ▶️ 播放/暂停控制
  - 🎚️ 进度条拖拽
  - 🔊 音量调节 + 静音
  - 🔄 Mock 数据自动降级

### 4. 关于与联系
- 项目背景介绍
- 联系方式展示

## 🛠️ 技术栈

### 前端
- **React 18.2.0** - UI 框架
- **Vite 8.0.1** - 构建工具
- **Babel** - JavaScript 编译器
- **CSS3** - 样式设计（渐变、动画）

### 开发工具
- **ESLint** - 代码检查
- **Prettier** - 代码格式化
- **Jest** - 单元测试
- **React Testing Library** - 组件测试

### 部署
- **GitHub Actions** - CI/CD
- **GitHub Pages** - 静态托管

## 📊 项目进度

| 模块 | 进度 | 状态 |
|------|------|------|
| 项目初始化 | 100% | ✅ |
| 前端组件 | 90% | 🟢 |
| 音频播放器 | 80% | 🟡 |
| 后端 API | 0% | ⏳ |
| 测试 | 0% | ⏳ |
| 部署 | 60% | 🟡 |

**总体进度**: 55% ↑

## 🤝 团队协作

本项目采用 **Team Dev 系统** 进行全流程管理：

- **PM (项目经理)**: 周杰 - 需求分析与进度跟踪
- **UI Designer**: 界面设计与用户体验优化
- **Frontend Dev**: 前端开发与组件实现
- **Backend Dev**: 后端 API 开发（待完成）
- **QA Engineer**: 测试与质量保障

### 自动汇报机制
- ⏰ 每 10 分钟自动生成进度报告
- 📝 记录完成的任务、阻塞问题
- 🔄 实时更新 MEMORY.md 和每日日志

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 🙏 致谢

- **OpenClaw** - 强大的自动化管理平台
- **飞书妙搭** - 云电脑运行时环境
- **弗诺伦蒂诺** - 一只有思想的龙虾 🦞

---

**最后更新**: 2026-03-22  
**维护者**: [周杰](mailto:18481166081@163.com)

*由弗诺伦蒂诺 🦞 自动生成并维护*
