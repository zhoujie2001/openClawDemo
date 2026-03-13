import { ref, computed, watch } from 'vue'
import { usePlayerStore } from '@/stores/usePlayerStore'

export function useAudio() {
  const playerStore = usePlayerStore()
  const audioRef = ref(null)
  const currentSong = ref(null)
  const isPlaying = ref(false)
  const isDragging = ref(false)
  
  // 从store恢复状态
  if (playerStore.lastPlayedSong) {
    currentSong.value = playerStore.lastPlayedSong
    isPlaying.value = playerStore.wasPlaying
  }
  
  // 播放歌曲 - 修复竞态条件
  const playSong = (song) => {
    // 如果正在播放同一首歌，只切换播放状态
    if (currentSong.value && currentSong.value.id === song.id) {
      togglePlay()
      return
    }
    
    // 停止当前播放
    if (audioRef.value) {
      audioRef.value.pause()
      audioRef.value.currentTime = 0
    }
    
    currentSong.value = song
    isPlaying.value = true
    playerStore.updatePlaybackState({ currentSong: song, isPlaying: true })
    
    // 等待DOM更新后再播放
    setTimeout(() => {
      if (audioRef.value && isPlaying.value) {
        // 重置音频源
        audioRef.value.load()
        
        // 等待音频加载
        audioRef.value.oncanplaythrough = () => {
          audioRef.value.play().catch(e => {
            // 忽略AbortError（用户快速点击导致的）
            if (e.name !== 'AbortError') {
              console.error('Playback failed:', e)
              playerStore.setError('音频播放失败，请检查浏览器权限')
              isPlaying.value = false
            }
          })
        }
        
        // 设置超时
        setTimeout(() => {
          if (audioRef.value.readyState >= 2 && isPlaying.value) {
            audioRef.value.play().catch(e => {
              if (e.name !== 'AbortError') {
                console.error('Playback failed:', e)
                playerStore.setError('音频播放失败')
                isPlaying.value = false
              }
            })
          }
        }, 500)
      }
    }, 50)
  }
  
  // 切换播放/暂停 - 修复竞态条件
  const togglePlay = () => {
    if (!currentSong.value || !audioRef.value) return
    
    if (isPlaying.value) {
      // 暂停播放
      audioRef.value.pause()
      isPlaying.value = false
    } else {
      // 确保音频已加载
      if (audioRef.value.readyState < 2) {
        audioRef.value.load()
      }
      
      // 播放音频
      audioRef.value.play().catch(e => {
        // 忽略AbortError
        if (e.name !== 'AbortError') {
          console.error('Playback failed:', e)
          playerStore.setError('音频播放失败')
          isPlaying.value = false
        }
      })
      isPlaying.value = true
    }
    
    playerStore.updatePlaybackState({ currentSong: currentSong.value, isPlaying: isPlaying.value })
  }
  
  // 播放下一首（简化版）
  const playNext = () => {
    // 实际项目中应实现歌单循环逻辑
    console.log('Next song')
  }
  
  // 播放上一首
  const playPrevious = () => {
    // 实际项目中应实现歌单循环逻辑
    console.log('Previous song')
  }
  
  // 更新进度
  const updateProgress = () => {
    if (!audioRef.value || isDragging.value) return
    // 进度由模板中的computed属性计算
  }
  
  // 处理进度拖拽
  const handleSeek = (percent) => {
    if (!audioRef.value) return
    const duration = audioRef.value.duration || 240 // 默认240秒
    audioRef.value.currentTime = (percent / 100) * duration
  }
  
  // 关闭播放器
  const closePlayer = () => {
    if (audioRef.value) {
      audioRef.value.pause()
    }
    isPlaying.value = false
    currentSong.value = null
    playerStore.updatePlaybackState({ currentSong: null, isPlaying: false })
  }
  
  // 监听audio事件
  watch(audioRef, (newRef) => {
    if (newRef) {
      newRef.volume = playerStore.volume
      
      newRef.addEventListener('play', () => {
        isPlaying.value = true
      })
      
      newRef.addEventListener('pause', () => {
        isPlaying.value = false
      })
      
      newRef.addEventListener('error', () => {
        playerStore.setError('音频加载失败')
        isPlaying.value = false
      })
    }
  })
  
  return {
    audioRef,
    currentSong,
    isPlaying,
    playSong,
    togglePlay,
    playNext,
    playPrevious,
    updateProgress,
    handleSeek,
    closePlayer
  }
}
