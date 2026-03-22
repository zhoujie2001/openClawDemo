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
      <audio
        ref={audioRef}
        src={`/api/audio/${playlist.id}`}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
      />

      <div className="player-header">
        <div className="playlist-info">
          <span className="playlist-icon">{playlist.icon}</span>
          <span className="playlist-name">{playlist.name}</span>
        </div>
        {isPlaying && <span className="playing-indicator">●</span>}
      </div>

      <div className="player-controls">
        <button 
          className="btn-play-large" 
          onClick={togglePlay}
          aria-label={isPlaying ? '暂停' : '播放'}
        >
          {isPlaying ? '⏸️' : '▶️'}
        </button>
      </div>

      <div className="player-progress">
        <span className="time-current">{formatTime(currentTime)}</span>
        <input
          type="range"
          min="0"
          max={duration || 0}
          value={currentTime}
          onChange={handleSeek}
          className="progress-bar"
        />
        <span className="time-total">{formatTime(duration)}</span>
      </div>

      <div className="player-volume">
        <button className="btn-mute" onClick={toggleMute} aria-label={isMuted ? '静音' : '取消静音'}>
          {isMuted ? '🔇' : volume < 0.5 ? '🔉' : '🔊'}
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={isMuted ? 0 : volume}
          onChange={handleVolumeChange}
          className="volume-bar"
        />
      </div>
    </div>
  )
}

export default PlayPlayer
