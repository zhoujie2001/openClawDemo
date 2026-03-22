import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2>关于本项目</h2>
        <p className="about-text">
          openClawDemo 是一个展示自动化项目管理流程的演示项目。
          通过弗诺伦蒂诺 🦞 的智能管理，实现了从需求分析到代码部署的全流程自动化。
        </p>
        
        <div className="tech-stack">
          <h3>技术栈</h3>
          <div className="stack-grid">
            <div className="stack-item">⚛️ React + Vite</div>
            <div className="stack-item">🎨 CSS3 + 动画</div>
            <div className="stack-item">🤖 AI 自动化</div>
            <div className="stack-item">📊 实时进度追踪</div>
          </div>
        </div>

        <div className="team-info">
          <h3>团队信息</h3>
          <p><strong>PM:</strong> 弗诺伦蒂诺 🦞</p>
          <p><strong>位置:</strong> 成都 · 飞书妙搭云电脑</p>
          <p><strong>状态:</strong> 开发中 (45%)</p>
        </div>
      </div>
    </section>
  )
}

export default About
