<template>
  <div class="app-container">
    <header class="app-header">
      <h1 class="app-title">自然之声</h1>
      <p class="app-subtitle">聆听大自然的旋律 · 随时随地享受音乐</p>
    </header>
    
    <main class="main-content">
      <div v-if="error" class="error-container">
        <ErrorMessage :message="error" @retry="loadAllPlaylists" />
      </div>
      
      <div v-else-if="isLoading" class="skeleton-container">
        <SkeletonCard 
          v-for="n in 3" 
          :key="n" 
          :delay="n * 100" 
        />
      </div>
      
      <div v-else class="playlists-grid">
        <PlaylistCard 
          v-for="playlist in playlists" 
          :key="playlist.id"
          :playlist="playlist"
          @play-song="handlePlaySong"
        />
      </div>
    </main>
    
    <PlayerFloat 
      v-if="currentSong"
      :song="currentSong"
      :is-playing="isPlaying"
      :progress="progress"
      @toggle-play="togglePlay"
      @prev="playPrevious"
      @next="playNext"
      @seek="handleSeek"
      @close="closePlayer"
    />
    
    <audio
      ref="audioRef"
      :src="currentSong?.url"
      @timeupdate="updateProgress"
      @ended="handleSongEnd"
      @error="handleAudioError"
    ></audio>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { usePlayerStore } from '@/stores/usePlayerStore'
import { usePlaylist } from '@/composables/usePlaylist'
import { useAudio } from '@/composables/useAudio'
import PlaylistCard from '@/components/PlaylistCard.vue'
import PlayerFloat from '@/components/PlayerFloat.vue'
import SkeletonCard from '@/components/SkeletonCard.vue'
import ErrorMessage from '@/components/ErrorMessage.vue'

// 状态管理
const playerStore = usePlayerStore()
const { playlists, isLoading, error, loadAllPlaylists } = usePlaylist()
const { 
  currentSong, 
  isPlaying, 
  progress, 
  audioRef,
  playSong,
  togglePlay,
  playPrevious,
  playNext,
  updateProgress,
  handleSeek,
  closePlayer
} = useAudio()

// 播放歌曲处理
const handlePlaySong = (song) => {
  playSong(song)
  // 滚动到播放器位置（移动端优化）
  if (window.innerWidth < 768) {
    setTimeout(() => {
      document.querySelector('.player-float')?.scrollIntoView({ behavior: 'smooth', block: 'end' })
    }, 300)
  }
}

// 歌曲播放结束处理
const handleSongEnd = () => {
  playNext()
}

// 音频错误处理
const handleAudioError = () => {
  playerStore.setError('音频加载失败，请检查网络或尝试其他歌曲')
  isPlaying.value = false
}

// 进度计算（已从useAudio获取，这里不需要重复定义）

// 初始化加载
onMounted(() => {
  loadAllPlaylists()
  
  // 恢复播放状态（如果之前有播放记录）
  if (playerStore.lastPlayedSong) {
    currentSong.value = playerStore.lastPlayedSong
    isPlaying.value = playerStore.wasPlaying
  }
})

// 监听播放状态变化，保存到store
watch([currentSong, isPlaying], () => {
  playerStore.updatePlaybackState({
    currentSong: currentSong.value,
    isPlaying: isPlaying.value
  })
})
</script>

<style scoped>
.app-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #1a2a6c 0%, #2c3e50 100%);
  color: #ecf0f1;
  padding: 20px;
  position: relative;
  overflow-x: hidden;
}

.app-container::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 10% 20%, rgba(142, 68, 173, 0.1) 0%, transparent 20%),
    radial-gradient(circle at 90% 80%, rgba(52, 152, 219, 0.1) 0%, transparent 20%),
    radial-gradient(circle at 50% 50%, rgba(46, 204, 113, 0.07) 0%, transparent 30%);
  z-index: -1;
}

.app-header {
  text-align: center;
  padding: 30px 20px 40px;
  max-width: 900px;
  margin: 0 auto;
}

.app-title {
  font-size: 3.8rem;
  margin-bottom: 12px;
  background: linear-gradient(to right, #9b59b6, #3498db, #2ecc71);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 3px 15px rgba(0, 0, 0, 0.2);
  letter-spacing: 1.5px;
  font-weight: 800;
  position: relative;
  display: inline-block;
}

.app-title::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(to right, #9b59b6, #3498db, #2ecc71);
  border-radius: 2px;
}

.app-subtitle {
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.85);
  margin-top: 10px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.5;
}

.main-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 15px;
}

.playlists-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 35px;
  justify-content: center;
  padding: 20px 0 100px;
}

.skeleton-container,
.error-container {
  max-width: 1200px;
  margin: 40px auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 35px;
  justify-content: center;
  padding: 20px;
}

@media (max-width: 768px) {
  .app-title {
    font-size: 2.8rem;
  }
  
  .app-subtitle {
    font-size: 1.1rem;
  }
  
  .playlists-grid,
  .skeleton-container,
  .error-container {
    grid-template-columns: 1fr;
    padding: 10px;
  }
  
  .app-header {
    padding: 20px 15px 30px;
  }
}
</style>
