import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2026 openClawDemo. All rights reserved.</p>
        <p>Powered by 弗诺伦蒂诺 🦞</p>
        <div className="footer-links">
          <a href="https://github.com/zhoujie2001/openClawDemo" target="_blank" rel="noopener noreferrer">GitHub</a>
          <span>•</span>
          <a href="#about">关于</a>
          <span>•</span>
          <a href="#contact">联系</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
