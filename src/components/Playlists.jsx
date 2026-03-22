import { useState, useEffect } from 'react'
import PlaylistService from '../services/playlistService'
import PlayPlayer from './PlayPlayer'
import './Playlists.css'

function Playlists() {
  const [playlists, setPlaylists] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  // 🔴 强制使用 Mock 数据（生产环境无后端支持）
  const [useMock, setUseMock] = useState(true)
  const [currentPlaylist, setCurrentPlaylist] = useState(null)

  useEffect(() => {
    // 立即加载 Mock 数据
    loadPlaylists()
  }, []) // 移除 useMock 依赖，避免循环调用

  const loadPlaylists = async () => {
    try {
      setLoading(true)
      setError(null)
      
      console.log('🦞 加载播放列表 (Mock 模式)...')
      const data = await PlaylistService.getAll(true) // 强制使用 Mock
      setPlaylists(data)
      console.log('✅ 播放列表加载成功:', data.length, '个')
    } catch (err) {
      console.error('❌ 加载播放列表失败:', err)
      setError(err.message || '加载失败')
    } finally {
      setLoading(false)
    }
  }

  const playPlaylist = (playlist) => {
    console.log(`🎵 开始播放：${playlist.name}`)
    setCurrentPlaylist(playlist)
  }

  return (
    <section id="playlists" className="playlists">
      <h2>🎵 白噪音播放列表</h2>
      <p className="section-description">精选高品质白噪音，助您放松身心</p>
      
      {/* 🔴 隐藏 API 切换开关，强制使用 Mock */}
      <div className="toggle-container" style={{ opacity: 0.6 }}>
        <label className="toggle-switch">
          <input 
            type="checkbox" 
            checked={useMock} 
            onChange={(e) => setUseMock(e.target.checked)}
            disabled
          />
          <span className="toggle-slider"></span>
        </label>
        <span className="toggle-label">
          ✅ 使用 Mock 数据 (Demo 模式)
        </span>
      </div>

      {loading && (
        <div className="loading">
          <div className="spinner">🦞</div>
          <p>正在加载播放列表...</p>
        </div>
      )}

      {error && (
        <div className="error-message">
          ⚠️ {error}
          <button onClick={loadPlaylists}>重试</button>
        </div>
      )}

      {!loading && !error && playlists.length === 0 && (
        <div className="empty-state">
          <p>暂无播放列表</p>
        </div>
      )}

      {/* 当前播放的播放器 */}
      {currentPlaylist && (
        <PlayPlayer playlist={currentPlaylist} />
      )}

      <div className="playlist-grid">
        {playlists.map((playlist) => (
          <div key={playlist.id} className="playlist-card">
            <div className="playlist-icon">{playlist.icon}</div>
            <h3>{playlist.name}</h3>
            <p>{playlist.description}</p>
            <div className="playlist-meta">
              <span>🎵 {playlist.tracks} 首曲目</span>
              <span>⏱️ {playlist.duration}</span>
            </div>
            <button 
              className="btn-play" 
              onClick={() => playPlaylist(playlist)}
              disabled={currentPlaylist?.id === playlist.id}
            >
              {currentPlaylist?.id === playlist.id ? '▶️ 正在播放' : '▶️ 开始播放'}
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Playlists
