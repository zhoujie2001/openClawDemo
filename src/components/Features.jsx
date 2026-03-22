import './Features.css'

function Features() {
  const features = [
    {
      icon: '📊',
      title: '进度汇报',
      description: '每 10 分钟自动更新项目进度，实时掌握开发状态'
    },
    {
      icon: '🧠',
      title: '自省系统',
      description: '每日自动生成日报和反思，持续优化工作流程'
    },
    {
      icon: '🤖',
      title: 'AI 助手',
      description: '智能任务分配和管理，提升团队协作效率'
    },
    {
      icon: '📝',
      title: '文档管理',
      description: '完整的文档体系支持，确保知识传承'
    }
  ]

  return (
    <section id="features" className="features">
      <h2>核心功能</h2>
      <p className="section-description">弗诺伦蒂诺 🦞 提供的强大自动化管理能力</p>
      
      <div className="feature-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
