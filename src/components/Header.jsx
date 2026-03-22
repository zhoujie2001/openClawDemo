import { useState } from 'react'
import './Header.css'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="navbar">
        <div className="logo">🦞 openClawDemo</div>
        <ul className="nav-menu">
          <li><a href="#home" onClick={(e) => scrollToSection(e, 'home')}>首页</a></li>
          <li><a href="#features" onClick={(e) => scrollToSection(e, 'features')}>功能</a></li>
          <li><a href="#playlists" onClick={(e) => scrollToSection(e, 'playlists')}>播放列表</a></li>
          <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>关于</a></li>
          <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>联系</a></li>
        </ul>
      </nav>
    </header>
  )
}

function scrollToSection(e, sectionId) {
  e.preventDefault()
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

export default Header
