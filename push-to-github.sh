#!/bin/bash

# openClawDemo GitHub 推送脚本
# 由弗诺伦蒂诺 🦞 生成

echo "🚀 开始推送到 GitHub..."

# 检查是否已配置远程仓库
if ! git remote -v | grep -q "origin"; then
    echo "❌ 未找到远程仓库，正在添加..."
    git remote add origin https://github.com/zhoujie2001/openClawDemo.git
fi

# 检查分支
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "main" ]; then
    echo "⚠️  当前分支不是 main，正在切换..."
    git checkout main
fi

# 拉取最新更改（如果有）
echo "📥 拉取最新更改..."
git pull --rebase origin main

# 推送代码
echo "📤 推送到 GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo "✅ 推送成功！"
    echo ""
    echo "🎉 项目已成功更新到：https://github.com/zhoujie2001/openClawDemo"
    echo ""
    echo "📋 下一步操作："
    echo "1. 访问仓库页面检查提交"
    echo "2. 启用 Issues 和 Pull Requests"
    echo "3. 配置保护分支规则"
    echo "4. 安装 Dependabot"
    echo "5. 添加项目徽章到 README"
else
    echo "❌ 推送失败，请检查网络连接和认证信息"
    exit 1
fi
