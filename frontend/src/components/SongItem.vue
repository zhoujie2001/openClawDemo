<template>
  <div 
    class="song-item"
    :class="{ active: isActive }"
    role="button"
    tabindex="0"
    :aria-current="isActive ? 'true' : 'false'"
    @click="$emit('click')"
    @keydown.enter="$emit('click')"
  >
    <div class="song-cover-container">
      <img 
        :src="song.cover" 
        :alt="`${song.name} 封面`" 
        class="song-cover"
        loading="lazy"
        @error="handleImageError"
      >
      <div v-if="isActive" class="play-indicator">
        <i class="fas fa-play"></i>
      </div>
    </div>
    
    <div class="song-info">
      <div class="song-name" :title="song.name">{{ song.name }}</div>
      <div class="song-artist" :title="song.artist">{{ song.artist }}</div>
    </div>
    
    <div class="song-duration">{{ song.duration }}</div>
  </div>
</template>

<script setup>
defineProps({
  song: {
    type: Object,
    required: true
  },
  isActive: {
    type: Boolean,
    default: false
  }
})

const handleImageError = (e) => {
  // 使用可靠的SVG占位符
  const svgPlaceholder = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"><rect width="50" height="50" fill="%23f0f0f0"/><text x="25" y="25" font-family="Arial" font-size="12" fill="%23999" text-anchor="middle" dy=".3em">${song.name.charAt(0)}</text></svg>`;
  e.target.src = svgPlaceholder;
}
</script>

<style scoped>
.song-item {
  display: flex;
  align-items: center;
  padding: 14px 22px;
  cursor: pointer;
  transition: all 0.25s ease;
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

.song-item:hover {
  background-color: rgba(142, 68, 173, 0.09);
}

.song-item.active {
  background-color: rgba(142, 68, 173, 0.15);
  border-left: 4px solid #9b59b6;
}

.song-cover-container {
  position: relative;
  width: 54px;
  height: 54px;
  flex-shrink: 0;
  margin-right: 18px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  transition: transform 0.3s ease;
}

.song-item:hover .song-cover-container {
  transform: scale(1.05);
}

.song-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.play-indicator {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.song-item.active .play-indicator {
  opacity: 1;
}

.song-info {
  flex: 1;
  min-width: 0;
}

.song-name {
  font-weight: 600;
  font-size: 1.12rem;
  color: #2c3e50;
  margin-bottom: 3px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.song-artist {
  font-size: 0.95rem;
  color: #7f8c8d;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.song-duration {
  color: #95a5a6;
  font-size: 0.95rem;
  min-width: 45px;
  text-align: right;
  font-weight: 500;
}

@media (max-width: 768px) {
  .song-item {
    padding: 12px 18px;
  }
  
  .song-cover-container {
    width: 48px;
    height: 48px;
    margin-right: 15px;
  }
  
  .song-name {
    font-size: 1.05rem;
  }
  
  .song-duration {
    display: none;
  }
}
</style>
