import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Playlists from './components/Playlists'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // 模拟应用加载
    const timer = setTimeout(() => {
      setLoading(false)
      console.log('🦞 openClawDemo v1.0.0 已启动')
    }, 800)
    
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner">🦞</div>
        <p>正在启动弗诺伦蒂诺系统...</p>
      </div>
    )
  }

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Features />
        <Playlists />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
