import { ref, onMounted } from 'vue'
import axios from 'axios'

export function usePlaylist() {
  const playlists = ref([])
  const isLoading = ref(true)
  const error = ref(null)
  
  // 模拟歌单配置
  const playlistConfigs = [
    { id: 'rain', name: '雨和屋檐' },
    { id: 'light', name: '光和枯树' },
    { id: 'wind', name: '风和草地' }
  ]
  
  const loadAllPlaylists = async () => {
    isLoading.value = true
    error.value = null
    
    try {
      // 并行请求三个歌单
      const requests = playlistConfigs.map(config => 
        axios.get(`/api/playlist/${config.id}`, {
          params: { useMock: 'true' } // 开发环境使用模拟数据
        })
      )
      
      const responses = await Promise.all(requests)
      
      playlists.value = responses.map((res, index) => ({
        id: playlistConfigs[index].id,
        name: playlistConfigs[index].name,
        songs: res.data.songs || []
      }))
    } catch (err) {
      console.error('Failed to load playlists:', err)
      error.value = err.response?.data?.error || '加载歌单失败，请检查网络连接'
    } finally {
      isLoading.value = false
    }
  }
  
  return {
    playlists,
    isLoading,
    error,
    loadAllPlaylists
  }
}
