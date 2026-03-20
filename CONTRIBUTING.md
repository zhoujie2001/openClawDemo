# 贡献指南 🤝

感谢你对 openClawDemo 项目的兴趣！本指南将帮助你了解如何为项目做出贡献。

## 📋 目录

- [行为准则](#行为准则)
- [我该如何贡献？](#我该如何贡献)
- [开发环境设置](#开发环境设置)
- [提交规范](#提交规范)
- [代码审查流程](#代码审查流程)
- [问题报告](#问题报告)
- [获取帮助](#获取帮助)

---

## 行为准则

我们承诺为所有贡献者提供一个友好、包容的环境。请阅读并遵守我们的 [行为准则](./CODE_OF_CONDUCT.md)。

## 我该如何贡献？

### 报告 Bug

如果你发现了 Bug，请创建一个 Issue。在提交之前，请先搜索现有的 Issue，确保没有重复。

**好的 Bug 报告应该包含：**

- 清晰的标题和描述
- 重现步骤
- 使用的浏览器/操作系统信息
- 期望的行为 vs 实际行为
- 截图（如适用）
- 控制台错误信息

### 提出新功能

有新功能想法？欢迎提出！请说明：

- 功能的目的和背景
- 为什么需要这个功能
- 可能的实现方案
- 是否有替代方案

### 提交代码

1. **Fork** 本仓库
2. **Clone** 到你的本地：
   ```bash
   git clone https://github.com/your-username/openClawDemo.git
   cd openClawDemo
   ```
3. **创建分支**：
   ```bash
   git checkout -b feature/amazing-feature
   ```
4. **安装依赖**：
   ```bash
   npm install
   ```
5. **进行修改**并**测试**
6. **提交更改**（遵循[提交规范](#提交规范)）
7. **推送到 GitHub**：
   ```bash
   git push origin feature/amazing-feature
   ```
8. **开启 Pull Request**

### 代码风格

- 使用 **ESLint** 和 **Prettier** 保持代码风格一致
- 运行 `npm run lint` 和 `npm run format:check` 确保符合规范
- 编写**单元测试**覆盖你的代码
- 保持代码**简洁清晰**，添加必要的注释

## 开发环境设置

### 前置要求

- Node.js >= 16.0.0
- npm >= 8.0.0

### 安装步骤

```bash
# 克隆仓库
git clone https://github.com/zhoujie2001/openClawDemo.git
cd openClawDemo

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

访问 http://localhost:3000 查看应用。

## 提交规范

本项目遵循 [Conventional Commits](https://www.conventionalcommits.org/) 规范。

### 提交类型

- `feat`: 新功能
- `fix`: Bug 修复
- `docs`: 文档更新
- `style`: 代码格式调整（不影响功能）
- `refactor`: 代码重构
- `test`: 测试相关
- `chore`: 构建工具、依赖等日常维护

### 示例

```bash
# 新功能
git commit -m "feat: 添加用户个人中心功能"

# Bug 修复
git commit -m "fix: 修复登录页面的显示问题"

# 文档更新
git commit -m "docs: 更新 README.md 的安装说明"

# 代码重构
git commit -m "refactor: 优化组件性能"

# 测试
git commit -m "test: 添加用户模块的单元测试"
```

## 代码审查流程

1. 所有 PR 都需要至少 **1 个** 审查者的批准
2. CI 流水线必须全部通过
3. 代码覆盖率不应降低
4. 代码风格必须符合规范

### 审查标准

- ✅ 代码是否清晰易懂？
- ✅ 是否有适当的测试？
- ✅ 是否遵循项目规范？
- ✅ 是否有安全漏洞？
- ✅ 是否有性能问题？

## 问题报告

请使用 [GitHub Issues](https://github.com/zhoujie2001/openClawDemo/issues) 报告问题。

### Issue 模板

我们提供了以下 Issue 模板：

- 🐛 **Bug Report** - 报告 Bug
- 💡 **Feature Request** - 新功能建议
- ❓ **Question** - 提问
- 📝 **Documentation** - 文档问题

## 获取帮助

如果你在贡献过程中遇到问题，可以：

- 查看现有的 [Issues](https://github.com/zhoujie2001/openClawDemo/issues)
- 询问项目维护者
- 加入社区讨论

---

**再次感谢你的贡献！** 🎉

*如果没有特别说明，贡献的代码将采用 MIT 许可证开源。*
