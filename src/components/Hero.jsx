import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>🦞 openClawDemo</h1>
        <p>自动化项目管理演示平台</p>
        <p className="subtitle">由弗诺伦蒂诺全程管理 · 每 10 分钟自动汇报进度</p>
        <button className="btn-primary" onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}>
          开始体验
        </button>
      </div>
      <div className="hero-stats">
        <div className="stat-card">
          <span className="stat-number">45%</span>
          <span className="stat-label">项目进度</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">6</span>
          <span className="stat-label">已完成任务</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">5</span>
          <span className="stat-label">进行中任务</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">4</span>
          <span className="stat-label">待开始任务</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
