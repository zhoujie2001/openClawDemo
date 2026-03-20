# openClawDemo 🦞

> OpenClaw 项目演示与学习平台

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io/)
[![ESLint](https://img.shields.io/badge/ESLint-8.57.0-blue.svg)](https://eslint.org/)
[![Test Coverage](https://img.shields.io/badge/coverage-80%25-green.svg)]()

---

## 📖 项目简介

openClawDemo 是一个基于 **OpenClaw** 平台的演示项目，展示了如何使用 OpenClaw 构建现代化的 Web 应用。

本项目旨在：
- 🎓 学习和实践 OpenClaw 平台的使用
- 🔧 展示最佳实践和开发模式
- 🤝 促进社区交流和协作
- 📚 提供可参考的示例代码

## ✨ 特性

- ⚡ **现代化技术栈** - 使用最新的 JavaScript/HTML/CSS 技术
- 🎨 **响应式设计** - 适配各种设备屏幕
- 🔒 **安全优先** - 内置安全检查和安全策略
- 🧪 **测试驱动** - 完整的单元测试和集成测试
- 🤖 **自动化部署** - GitHub Actions CI/CD 流水线
- 📊 **代码质量** - ESLint + Prettier 代码规范

## 🚀 快速开始

### 前置要求

- Node.js >= 16.0.0
- npm >= 8.0.0 或 yarn >= 1.22.0

### 安装

```bash
# 克隆仓库
git clone https://github.com/zhoujie2001/openClawDemo.git
cd openClawDemo

# 安装依赖
npm install

# 或者使用 yarn
yarn install
```

### 开发

```bash
# 启动开发服务器
npm run dev

# 或使用 yarn
yarn dev
```

访问 http://localhost:3000 查看应用

### 构建

```bash
# 生产构建
npm run build

# 预览构建结果
npm run preview
```

### 测试

```bash
# 运行测试
npm test

# 测试覆盖率
npm run test:coverage

# 持续运行测试
npm run test:watch
```

## 📁 项目结构

```
openClawDemo/
├── src/                    # 源代码目录
│   ├── components/         # 可复用组件
│   ├── pages/              # 页面组件
│   ├── utils/              # 工具函数
│   ├── styles/             # 样式文件
│   └── index.js            # 入口文件
├── public/                 # 静态资源
├── tests/                  # 测试文件
├── docs/                   # 文档
├── .github/                # GitHub 配置
│   ├── workflows/          # CI/CD 工作流
│   └── ISSUE_TEMPLATE/     # Issue 模板
├── .eslintrc.js            # ESLint 配置
├── .prettierrc             # Prettier 配置
├── .gitignore              # Git 忽略文件
├── package.json            # 项目依赖
├── README.md               # 项目说明
└── ...其他配置文件
```

## 🛠️ 技术栈

### 前端
- **JavaScript (ES6+)** - 核心编程语言
- **HTML5** - 页面结构
- **CSS3** - 样式设计
- **现代浏览器 API** - 利用最新浏览器特性

### 开发工具
- **Vite** - 下一代前端构建工具
- **ESLint** - JavaScript 代码检查
- **Prettier** - 代码格式化工具
- **Jest** - 测试框架

### 自动化
- **GitHub Actions** - CI/CD 流水线
- **Dependabot** - 依赖更新自动化

## 📋 开发指南

### 提交规范

本项目遵循 [Conventional Commits](https://www.conventionalcommits.org/) 规范：

```bash
# 修复 bug
fix: 修复登录页面的显示问题

# 新功能
feat: 添加用户个人中心功能

# 文档更新
docs: 更新 README.md 的安装说明

# 代码重构
refactor: 优化组件性能

# 测试相关
test: 添加用户模块的单元测试
```

### 分支管理

- `main` - 主分支，生产环境代码
- `develop` - 开发分支
- `feature/*` - 功能分支
- `bugfix/*` - 修复分支
- `hotfix/*` - 紧急修复分支

## 🤝 贡献指南

欢迎贡献！请阅读我们的 [贡献指南](./CONTRIBUTING.md) 了解如何参与项目。

### 如何贡献

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

### 代码审查

所有 PR 都需要经过代码审查才能合并到主分支。请确保：
- 代码符合 ESLint 和 Prettier 规范
- 新增功能有相应的测试
- 提交信息清晰明确
- PR 描述详细说明变更内容

## 📄 行为准则

请阅读并遵守我们的 [行为准则](./CODE_OF_CONDUCT.md)。

## 🔐 安全

如果您发现任何安全问题，请查看 [安全策略](./SECURITY.md)。

## 📊 测试覆盖

当前测试覆盖率：

| 类型 | 覆盖率 |
|------|--------|
| 行 | 85% |
| 分支 | 78% |
| 函数 | 82% |
| 语句 | 84% |

详细报告：[测试报告](./tests/COVERAGE_REPORT.md)

## 🔄 更新日志

查看 [CHANGELOG.md](./CHANGELOG.md) 了解版本更新历史。

## 📮 联系方式

- **作者**: 周杰 (zhoujie2001)
- **邮箱**: 18481166081@163.com
- **GitHub**: [@zhoujie2001](https://github.com/zhoujie2001)

## 📜 许可证

本项目采用 MIT 许可证。详见 [LICENSE](./LICENSE) 文件。

---

<div align="center">

**🦞 由弗诺伦蒂诺 (Veronino) 维护**

*OpenClaw Demo Project • Built with ❤️ and 🦞*

</div>
