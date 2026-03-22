import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>联系方式</h2>
      <p className="section-description">有问题或建议？欢迎通过以下方式联系我们</p>
      
      <div className="contact-methods">
        <a 
          href="https://github.com/zhoujie2001/openClawDemo" 
          target="_blank" 
          rel="noopener noreferrer"
          className="contact-card github"
        >
          <div className="contact-icon">🐙</div>
          <h3>GitHub Issues</h3>
          <p>提交 Bug 报告和功能建议</p>
        </a>

        <a 
          href="mailto:18481166081@163.com" 
          className="contact-card email"
        >
          <div className="contact-icon">📧</div>
          <h3>Email</h3>
          <p>18481166081@163.com</p>
        </a>

        <div className="contact-card docs">
          <div className="contact-icon">📚</div>
          <h3>项目文档</h3>
          <p>查看完整文档体系</p>
        </div>
      </div>
    </section>
  )
}

export default Contact
