/**
 * Playlist Service - 播放列表服务
 * 提供 Mock 数据和真实 API 调用
 */

const MOCK_PLAYLISTS = [
  {
    id: 'rain',
    name: '🌧️ 雨声白噪音',
    description: '舒缓的雨天白噪音，帮助您放松和专注',
    icon: '🌧️',
    tracks: 12,
    duration: '2 小时',
    category: 'nature'
  },
  {
    id: 'lightning',
    name: '⚡ 雷电白噪音',
    description: '遥远的雷声和白噪音组合，营造宁静氛围',
    icon: '⚡',
    tracks: 8,
    duration: '1.5 小时',
    category: 'nature'
  },
  {
    id: 'wind',
    name: '🍃 风声白噪音',
    description: '轻柔的风声，带来自然的宁静感',
    icon: '🍃',
    tracks: 10,
    duration: '2 小时',
    category: 'nature'
  },
  {
    id: 'ocean',
    name: '🌊 海浪白噪音',
    description: '平静的海浪声，让您感受海洋的宁静',
    icon: '🌊',
    tracks: 15,
    duration: '3 小时',
    category: 'nature'
  },
  {
    id: 'forest',
    name: '🌲 森林白噪音',
    description: '鸟鸣和树叶沙沙声，体验大自然的生机',
    icon: '🌲',
    tracks: 20,
    duration: '2.5 小时',
    category: 'nature'
  },
  {
    id: 'fireplace',
    name: '🔥 壁炉白噪音',
    description: '温暖的壁炉燃烧声，营造舒适氛围',
    icon: '🔥',
    tracks: 6,
    duration: '1 小时',
    category: 'cozy'
  }
]

class PlaylistService {
  /**
   * 获取所有播放列表
   * @param {boolean} useMock - 是否使用 Mock 数据
   * @returns {Promise<Array>} 播放列表数组
   */
  async getAll(useMock = true) {
    if (useMock) {
      return this.getMockPlaylists()
    }
    
    try {
      const response = await fetch('/api/playlist?useMock=false')
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      return await response.json()
    } catch (error) {
      console.warn('API 调用失败，切换到 Mock 数据:', error)
      return this.getMockPlaylists()
    }
  }

  /**
   * 根据 ID 获取单个播放列表
   * @param {string} id - 播放列表 ID
   * @param {boolean} useMock - 是否使用 Mock 数据
   * @returns {Promise<Object>} 播放列表对象
   */
  async getById(id, useMock = true) {
    if (useMock) {
      const playlist = MOCK_PLAYLISTS.find(p => p.id === id)
      if (!playlist) {
        throw new Error(`播放列表 ${id} 不存在`)
      }
      return playlist
    }
    
    try {
      const response = await fetch(`/api/playlist/${id}?useMock=false`)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      return await response.json()
    } catch (error) {
      console.warn('API 调用失败，切换到 Mock 数据:', error)
      const playlist = MOCK_PLAYLISTS.find(p => p.id === id)
      if (!playlist) {
        throw new Error(`播放列表 ${id} 不存在`)
      }
      return playlist
    }
  }

  /**
   * 获取 Mock 播放列表
   * @returns {Array} Mock 数据
   */
  getMockPlaylists() {
    console.log('🦞 使用 Mock 数据加载播放列表')
    // 模拟网络延迟
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(MOCK_PLAYLISTS)
      }, 300)
    })
  }

  /**
   * 搜索播放列表
   * @param {string} query - 搜索关键词
   * @returns {Promise<Array>} 匹配的播放列表
   */
  async search(query) {
    const allPlaylists = await this.getAll(true)
    return allPlaylists.filter(playlist => 
      playlist.name.toLowerCase().includes(query.toLowerCase()) ||
      playlist.description.toLowerCase().includes(query.toLowerCase())
    )
  }
}

export default new PlaylistService()
