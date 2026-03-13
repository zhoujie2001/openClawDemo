<template>
  <div 
    class="playlist-card"
    :class="`playlist-${playlist.id}`"
    :style="{ animationDelay: `${delay}s` }"
  >
    <div class="card-header">
      <h2 class="card-title">{{ playlist.name }}</h2>
      <p class="card-subtitle">{{ getSubtitle(playlist.id) }}</p>
    </div>
    
    <div class="songs-list">
      <SongItem 
        v-for="song in playlist.songs" 
        :key="song.id"
        :song="song"
        :is-active="currentSong?.id === song.id"
        @click="emit('play-song', song)"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import SongItem from './SongItem.vue'

const props = defineProps({
  playlist: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['play-song'])

// 从store获取当前播放歌曲
const currentSong = computed(() => {
  // 实际项目中从playerStore获取
  return null
})

// 计算浮动延迟（实现错开效果）
const delay = computed(() => {
  const delays = { rain: 0, light: -2, wind: -4 }
  return delays[props.playlist.id] || 0
})

// 获取副标题
const getSubtitle = (id) => {
  const subtitles = {
    rain: '雨滴落在屋檐的治愈旋律',
    light: '阳光穿透枯枝的温暖时光',
    wind: '微风拂过草地的惬意时光'
  }
  return subtitles[id] || ''
}
</script>

<style scoped>
.playlist-card {
  background: var(--primary-white);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  overflow: hidden;
  transition: var(--transition);
  position: relative;
  border: 1px solid var(--primary-gray-light);
  animation: float 6s ease-in-out infinite;
}

.playlist-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--box-shadow-hover);
  border-color: var(--primary-gray);
}

.card-header {
  padding: 24px;
  text-align: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, var(--primary-light), var(--primary-gray-light));
  border-bottom: 1px solid var(--primary-gray-light);
}

.card-header::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transform: rotate(45deg);
  animation: shine 3s infinite;
}

@keyframes shine {
  0% { transform: rotate(45deg) translateX(-100%); }
  100% { transform: rotate(45deg) translateX(100%); }
}

.playlist-rain .card-header {
  background: linear-gradient(135deg, #f0f8ff, #e6f2ff);
}

.playlist-light .card-header {
  background: linear-gradient(135deg, #fffaf0, #fff5e6);
}

.playlist-wind .card-header {
  background: linear-gradient(135deg, #f0fff4, #e6ffe6);
}

.card-title {
  font-size: 1.9rem;
  font-weight: 700;
  color: var(--primary-dark);
  margin-bottom: 8px;
  letter-spacing: 0.5px;
  position: relative;
  z-index: 2;
}

.card-subtitle {
  font-size: 1rem;
  color: var(--primary-gray-dark);
  margin-top: 5px;
  position: relative;
  z-index: 2;
  font-weight: 400;
}

.songs-list {
  max-height: 420px;
  overflow-y: auto;
  padding: 10px 0;
}

.songs-list::-webkit-scrollbar {
  width: 6px;
}

.songs-list::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.03);
}

.songs-list::-webkit-scrollbar-thumb {
  background: var(--primary-gray);
  border-radius: 3px;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}

@media (max-width: 768px) {
  .playlist-card {
    animation: none !important;
    margin-bottom: 25px;
  }
  
  .card-title {
    font-size: 1.6rem;
  }
}
</style>
