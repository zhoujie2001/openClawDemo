import { useState, useRef, useEffect } from 'react'
import './PlayPlayer.css'

function PlayPlayer({ playlist }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(false)
  
  const audioRef = useRef(null)
  const animationFrameRef = useRef(null)

  useEffect(() => {
    if (playlist && audioRef.current) {
      // 加载新的播放列表
      console.log('🎵 加载播放列表:', playlist.name)
      resetPlayer()
    }
  }, [playlist])

  useEffect(() => {
    if (isPlaying) {
      playAudio()
    } else {
      pauseAudio()
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [isPlaying])

  const playAudio = () => {
    if (audioRef.current) {
      const playPromise = audioRef.current.play()
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log('▶️ 开始播放')
            updateProgress()
          })
          .catch(error => {
            console.error('播放失败:', error)
            setIsPlaying(false)
          })
      }
    }
  }

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }

  const resetPlayer = () => {
    setIsPlaying(false)
    setCurrentTime(0)
    if (audioRef.current) {
      audioRef.current.currentTime = 0
    }
  }

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime)
    }
  }

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration)
    }
  }

  const handleSeek = (e) => {
    const newTime = parseFloat(e.target.value)
    if (audioRef.current) {
      audioRef.current.currentTime = newTime
      setCurrentTime(newTime)
    }
  }

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume
      setIsMuted(newVolume === 0)
    }
  }

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const updateProgress = () => {
    if (isPlaying && audioRef.current) {
      setCurrentTime(audioRef.current.currentTime)
      animationFrameRef.current = requestAnimationFrame(updateProgress)
    }
  }

  if (!playlist) {
    return null
  }

  return (
    <div className="play-player">
      {/* 注意：真实音频功能需要后端 API 支持 (/api/audio/:id) */}
      {/* 当前处于 Demo 模式，仅展示 UI 界面 */}
      
      <div className="player-placeholder">
        <div className="placeholder-icon">🎵</div>
        <h3>Demo 模式</h3>
        <p>音频播放功能需要后端 API 支持</p>
        <p className="hint">这是演示界面的预览，真实音频将在后端部署后启用</p>
      </div>

      <div className="player-header">
        <div className="playlist-info">
          <span className="playlist-icon">{playlist.icon}</span>
          <span className="playlist-name">{playlist.name}</span>
        </div>
        <span className="demo-badge">🔴 Demo</span>
      </div>

      <div className="player-controls">
        <button 
          className="btn-play-large" 
          onClick={togglePlay}
          aria-label={isPlaying ? '暂停' : '播放'}
          disabled
          title="Demo 模式：音频功能暂未启用"
        >
          ⏸️
        </button>
      </div>

      <div className="player-progress">
        <span className="time-current">0:00</span>
        <input
          type="range"
          min="0"
          max="100"
          value="0"
          disabled
          className="progress-bar"
        />
        <span className="time-total">0:00</span>
      </div>

      <div className="player-volume">
        <button className="btn-mute" disabled>
          🔇
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value="0"
          disabled
          className="volume-bar"
        />
      </div>
    </div>
  )
}

export default PlayPlayer
