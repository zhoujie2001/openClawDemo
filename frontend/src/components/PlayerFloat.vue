<template>
  <div class="player-container" :class="{ 'player-mobile': isMobile }">
    <div class="player-card">
      <div class="player-content">
        <div class="cover-container">
          <img 
            :src="song.cover" 
            :alt="`${song.name} 封面`" 
            class="player-cover"
            :class="{ playing: isPlaying }"
          >
          <div class="cover-overlay" v-if="isMobile">
            <button class="control-btn" @click="$emit('prev')" aria-label="上一首">
              <i class="fas fa-step-backward"></i>
            </button>
            <button class="control-btn toggle" @click="$emit('toggle-play')" :aria-label="isPlaying ? '暂停' : '播放'">
              <i :class="isPlaying ? 'fas fa-pause' : 'fas fa-play'"></i>
            </button>
            <button class="control-btn" @click="$emit('next')" aria-label="下一首">
              <i class="fas fa-step-forward"></i>
            </button>
          </div>
        </div>
        
        <div class="player-info">
          <div class="song-title" :title="song.name">{{ song.name }}</div>
          <div class="song-artist">{{ song.artist }}</div>
          
          <div v-if="!isMobile" class="progress-container" @click="handleProgressClick">
            <div class="progress-bar">
              <div class="progress-fill" :style="{ width: `${progress}%` }"></div>
              <div class="progress-handle" 
                   :style="{ left: `${progress}%` }"
                   @mousedown="startDragging"
                   @touchstart="startDragging"
              ></div>
            </div>
            <div class="time-info">
              <span class="current-time">{{ formatTime(currentTime) }}</span>
              <span class="duration">{{ formatTime(duration) }}</span>
            </div>
          </div>
          
          <div v-if="!isMobile" class="player-controls">
            <button class="control-btn" @click="$emit('prev')" aria-label="上一首">
              <i class="fas fa-step-backward"></i>
            </button>
            <button class="control-btn toggle large" @click="$emit('toggle-play')" :aria-label="isPlaying ? '暂停' : '播放'">
              <i :class="isPlaying ? 'fas fa-pause' : 'fas fa-play'"></i>
            </button>
            <button class="control-btn" @click="$emit('next')" aria-label="下一首">
              <i class="fas fa-step-forward"></i>
            </button>
          </div>
        </div>
        
        <button class="close-btn" @click="$emit('close')" aria-label="关闭播放器">
          <i class="fas fa-times"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useResponsive } from '@/composables/useResponsive'

const props = defineProps({
  song: Object,
  isPlaying: Boolean,
  progress: Number
})

const emit = defineEmits(['toggle-play', 'prev', 'next', 'seek', 'close'])

const { isMobile } = useResponsive()
const isDragging = ref(false)
const startX = ref(0)
const startProgress = ref(0)

// 时间计算
const currentTime = computed(() => {
  const progress = props.progress || 0
  const duration = getDurationFromSong(props.song)
  return (progress / 100) * duration
})

const duration = computed(() => getDurationFromSong(props.song))

// 从歌曲数据获取时长（秒）
function getDurationFromSong(song) {
  if (!song || !song.duration) return 240 // 默认4分钟
  
  // 解析 "3:45" 格式的时长
  if (typeof song.duration === 'string') {
    const parts = song.duration.split(':')
    if (parts.length === 2) {
      const minutes = parseInt(parts[0]) || 0
      const seconds = parseInt(parts[1]) || 0
      return minutes * 60 + seconds
    }
  }
  
  // 如果是数字，假设是秒
  const numDuration = Number(song.duration)
  return isNaN(numDuration) ? 240 : numDuration
}

// 格式化时间
const formatTime = (seconds) => {
  if (isNaN(seconds) || seconds < 0) return '0:00'
  
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`
}

// 进度条点击处理
const handleProgressClick = (e) => {
  const rect = e.currentTarget.getBoundingClientRect()
  const clickX = e.clientX - rect.left
  const percent = (clickX / rect.width) * 100
  emit('seek', Math.max(0, Math.min(100, percent)))
}

// 拖拽处理
const startDragging = (e) => {
  if (isMobile.value) return
  
  isDragging.value = true
  startX.value = e.clientX || e.touches[0].clientX
  startProgress.value = props.progress
  
  const moveHandler = (e) => {
    if (!isDragging.value) return
    const deltaX = (e.clientX || e.touches[0].clientX) - startX.value
    const percentChange = (deltaX / 300) * 100 // 300px为参考宽度
    const newProgress = Math.max(0, Math.min(100, startProgress.value + percentChange))
    emit('seek', newProgress)
  }
  
  const endHandler = () => {
    isDragging.value = false
    document.removeEventListener('mousemove', moveHandler)
    document.removeEventListener('mouseup', endHandler)
    document.removeEventListener('touchmove', moveHandler)
    document.removeEventListener('touchend', endHandler)
  }
  
  document.addEventListener('mousemove', moveHandler)
  document.addEventListener('mouseup', endHandler)
  document.addEventListener('touchmove', moveHandler, { passive: false })
  document.addEventListener('touchend', endHandler)
}
</script>

<style scoped>
.player-container {
  position: fixed;
  bottom: 35px;
  right: 35px;
  z-index: 1000;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.player-container.player-mobile {
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  max-width: none;
}

.player-card {
  background: linear-gradient(145deg, #2c3e50, #1a2530);
  border-radius: 24px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.45);
  overflow: hidden;
  width: 340px;
  transition: transform 0.3s ease;
}

.player-container.player-mobile .player-card {
  border-radius: 20px 20px 0 0;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.player-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.55);
}

.player-content {
  display: flex;
  align-items: center;
  padding: 20px;
  position: relative;
}

.cover-container {
  position: relative;
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  margin-right: 18px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.35);
  transition: all 0.4s ease;
}

.player-container.player-mobile .cover-container {
  width: 70px;
  height: 70px;
  margin-right: 15px;
}

.player-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.6s ease;
}

.player-cover.playing {
  animation: rotate 15s linear infinite;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.cover-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.cover-container:hover .cover-overlay {
  opacity: 1;
}

.player-info {
  flex: 1;
  min-width: 0;
  color: white;
}

.song-title {
  font-size: 1.35rem;
  font-weight: 700;
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #f8f9fa;
}

.song-artist {
  font-size: 0.95rem;
  color: #bdc3c7;
  margin-bottom: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.progress-container {
  width: 100%;
  margin-bottom: 15px;
  cursor: pointer;
}

.progress-bar {
  height: 6px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 3px;
  position: relative;
  overflow: hidden;
  margin-bottom: 5px;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(to right, #9b59b6, #3498db);
  border-radius: 3px;
  position: relative;
  transition: width 0.1s linear;
}

.progress-handle {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 14px;
  height: 14px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  display: none;
}

.progress-bar:hover .progress-handle {
  display: block;
}

.time-info {
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  color: #bdc3c7;
}

.player-controls {
  display: flex;
  justify-content: center;
  gap: 22px;
  margin-top: 8px;
}

.control-btn {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  border: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.25s ease;
  font-size: 1.1rem;
}

.control-btn:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: scale(1.1);
}

.control-btn:active {
  transform: scale(0.95);
}

.control-btn.toggle {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #9b59b6, #3498db);
  font-size: 1.3rem;
  box-shadow: 0 4px 15px rgba(142, 68, 173, 0.4);
}

.control-btn.toggle.large {
  width: 60px;
  height: 60px;
  font-size: 1.6rem;
}

.close-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(231, 76, 60, 0.85);
  border: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.25s ease;
  font-size: 1rem;
  z-index: 10;
}

.close-btn:hover {
  background: #e74c3c;
  transform: rotate(90deg);
}

@media (max-width: 768px) {
  .player-container {
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    max-width: none;
  }
  
  .player-card {
    border-radius: 24px 24px 0 0;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
  }
  
  .player-content {
    padding: 18px;
  }
  
  .cover-container {
    width: 70px;
    height: 70px;
    margin-right: 15px;
  }
  
  .song-title {
    font-size: 1.25rem;
  }
  
  .progress-container {
    display: none;
  }
  
  .player-controls {
    gap: 25px;
    margin-top: 12px;
  }
  
  .control-btn {
    width: 48px;
    height: 48px;
    font-size: 1.3rem;
  }
  
  .control-btn.toggle {
    width: 58px;
    height: 58px;
    font-size: 1.5rem;
  }
}
</style>
