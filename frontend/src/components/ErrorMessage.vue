<template>
  <div class="error-message">
    <div class="error-icon">
      <i class="fas fa-exclamation-triangle"></i>
    </div>
    <p class="error-text">{{ message || '加载歌单时出错' }}</p>
    <button class="retry-btn" @click="$emit('retry')">
      <i class="fas fa-redo"></i> 重试
    </button>
  </div>
</template>

<script setup>
defineProps({
  message: String
})
</script>

<style scoped>
.error-message {
  background: rgba(231, 76, 60, 0.1);
  border: 1px solid #e74c3c;
  border-radius: 16px;
  padding: 25px;
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
}

.error-icon {
  font-size: 3.5rem;
  color: #e74c3c;
  margin-bottom: 15px;
  animation: bounce 1s infinite alternate;
}

@keyframes bounce {
  from { transform: translateY(0); }
  to { transform: translateY(-10px); }
}

.error-text {
  font-size: 1.2rem;
  color: #e74c3c;
  margin-bottom: 20px;
  line-height: 1.5;
}

.retry-btn {
  background: linear-gradient(to right, #e74c3c, #c0392b);
  color: white;
  border: none;
  padding: 10px 25px;
  border-radius: 30px;
  font-size: 1.05rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 15px rgba(231, 76, 60, 0.4);
}

.retry-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(231, 76, 60, 0.55);
}

.retry-btn:active {
  transform: translateY(0);
}
</style>
