import express from 'express';
import { getPlaylistData } from '../utils/qqmusic-proxy.js';
import { mockPlaylists } from '../utils/mock-data.js';
import improvedMockPlaylists from '../utils/improved-mock-data.js';
import reliableMockPlaylists from '../utils/reliable-audio-data.js';
import realMusicPlaylists from '../utils/real-music-data.js';

const router = express.Router();

// 获取歌单数据（带缓存）
router.get('/playlist/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { useMock = 'true' } = req.query;
    
    // 验证歌单ID
    const validIds = ['rain', 'light', 'wind'];
    if (!validIds.includes(id)) {
      return res.status(400).json({ error: 'Invalid playlist ID' });
    }

    let songs;
    
    // 使用真实的音乐数据（主题匹配的音频和封面）
    if (useMock === 'true' || process.env.NODE_ENV !== 'production') {
      const mockData = realMusicPlaylists[id] || reliableMockPlaylists[id] || improvedMockPlaylists[id] || mockPlaylists[id];
      if (!mockData) {
        return res.status(404).json({ error: 'Playlist not found' });
      }
      // 返回所有歌曲（不再随机，确保一致性）
      songs = mockData;
    } else {
      // 生产环境尝试获取真实数据（需实现完整代理）
      songs = await getPlaylistData(id);
    }

    res.json({
      id,
      name: getPlaylistName(id),
      songs,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Playlist fetch error:', error);
    res.status(500).json({ 
      error: 'Failed to fetch playlist',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// 播放音频代理（解决跨域）
router.get('/audio-proxy', async (req, res) => {
  try {
    const { url } = req.query;
    if (!url) {
      return res.status(400).json({ error: 'URL parameter required' });
    }
    
    // 实际项目中这里应实现安全的音频代理
    // 当前仅返回重定向（注意：QQ音乐资源有防盗链）
    res.redirect(url);
  } catch (error) {
    res.status(500).json({ error: 'Audio proxy error' });
  }
});

function getPlaylistName(id) {
  const names = {
    rain: '雨和屋檐',
    light: '光和枯树',
    wind: '风和草地'
  };
  return names[id] || id;
}

export default router;