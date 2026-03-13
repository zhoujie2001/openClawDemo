import { defineStore } from 'pinia'

export const usePlayerStore = defineStore('player', {
  state: () => ({
    currentSong: null,
    isPlaying: false,
    lastPlayedSong: null,
    wasPlaying: false,
    error: null,
    volume: 0.7
  }),
  
  actions: {
    updatePlaybackState({ currentSong, isPlaying }) {
      this.currentSong = currentSong
      this.isPlaying = isPlaying
      
      // 保存播放状态（用于页面刷新后恢复）
      if (currentSong) {
        this.lastPlayedSong = { ...currentSong }
        this.wasPlaying = isPlaying
      }
    },
    
    setError(message) {
      this.error = message
      setTimeout(() => {
        this.error = null
      }, 5000)
    },
    
    clearError() {
      this.error = null
    },
    
    setVolume(level) {
      this.volume = level
      // 实际项目中应同步到audio元素
    }
  }
})
