<template>
  <div class="skeleton-card" :style="{ animationDelay: `${delay}ms` }">
    <div class="skeleton-header"></div>
    <div class="skeleton-songs">
      <div v-for="n in 5" :key="n" class="skeleton-song">
        <div class="skeleton-cover"></div>
        <div class="skeleton-info">
          <div class="skeleton-line title"></div>
          <div class="skeleton-line artist"></div>
        </div>
        <div class="skeleton-duration"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  delay: {
    type: Number,
    default: 0
  }
})
</script>

<style scoped>
.skeleton-card {
  background: rgba(255, 255, 255, 0.85);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  animation: pulse 1.8s infinite ease-in-out;
}

.skeleton-header {
  height: 100px;
  background: linear-gradient(to right, #9b59b6, #3498db, #2ecc71);
  animation: gradientShift 3s ease infinite;
}

.skeleton-songs {
  padding: 15px 0;
}

.skeleton-song {
  display: flex;
  align-items: center;
  padding: 14px 22px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.skeleton-cover {
  width: 50px;
  height: 50px;
  border-radius: 8px;
  background: linear-gradient(45deg, #f0f0f0, #e0e0e0, #f0f0f0);
  animation: pulse 1.8s infinite ease-in-out;
  margin-right: 15px;
  flex-shrink: 0;
}

.skeleton-info {
  flex: 1;
}

.skeleton-line {
  height: 12px;
  background: linear-gradient(45deg, #f5f5f5, #eaeaea, #f5f5f5);
  border-radius: 6px;
  animation: pulse 1.8s infinite ease-in-out;
  margin-bottom: 8px;
}

.skeleton-line.title {
  width: 70%;
  height: 14px;
}

.skeleton-line.artist {
  width: 50%;
}

.skeleton-duration {
  width: 40px;
  height: 12px;
  background: linear-gradient(45deg, #f5f5f5, #eaeaea, #f5f5f5);
  border-radius: 6px;
  animation: pulse 1.8s infinite ease-in-out;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
</style>
