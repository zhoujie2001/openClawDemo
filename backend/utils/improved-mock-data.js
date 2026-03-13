/**
 * 改进版模拟数据
 * 使用更合适的音频源，避免纯音乐与歌曲名不匹配的问题
 */

// 自然声音频库（合法、免费、高质量）
const NATURAL_SOUND_LIBRARY = {
  // 雨声相关
  rain: [
    "https://assets.mixkit.co/music/preview/mixkit-rain-01-114.mp3",
    "https://assets.mixkit.co/music/preview/mixkit-rain-02-115.mp3",
    "https://assets.mixkit.co/music/preview/mixkit-rain-03-116.mp3",
    "https://assets.mixkit.co/music/preview/mixkit-rain-04-117.mp3",
    "https://assets.mixkit.co/music/preview/mixkit-rain-05-118.mp3"
  ],
  
  // 自然/环境音
  nature: [
    "https://assets.mixkit.co/music/preview/mixkit-nature-01-119.mp3",
    "https://assets.mixkit.co/music/preview/mixkit-nature-02-120.mp3",
    "https://assets.mixkit.co/music/preview/mixkit-nature-03-121.mp3",
    "https://assets.mixkit.co/music/preview/mixkit-nature-04-122.mp3",
    "https://assets.mixkit.co/music/preview/mixkit-nature-05-123.mp3"
  ],
  
  // 钢琴/轻音乐
  piano: [
    "https://assets.mixkit.co/music/preview/mixkit-piano-01-124.mp3",
    "https://assets.mixkit.co/music/preview/mixkit-piano-02-125.mp3",
    "https://assets.mixkit.co/music/preview/mixkit-piano-03-126.mp3",
    "https://assets.mixkit.co/music/preview/mixkit-piano-04-127.mp3",
    "https://assets.mixkit.co/music/preview/mixkit-piano-05-128.mp3"
  ],
  
  // 吉他/弦乐
  guitar: [
    "https://assets.mixkit.co/music/preview/mixkit-guitar-01-129.mp3",
    "https://assets.mixkit.co/music/preview/mixkit-guitar-02-130.mp3",
    "https://assets.mixkit.co/music/preview/mixkit-guitar-03-131.mp3",
    "https://assets.mixkit.co/music/preview/mixkit-guitar-04-132.mp3",
    "https://assets.mixkit.co/music/preview/mixkit-guitar-05-133.mp3"
  ],
  
  // 氛围音乐
  ambient: [
    "https://assets.mixkit.co/music/preview/mixkit-ambient-01-134.mp3",
    "https://assets.mixkit.co/music/preview/mixkit-ambient-02-135.mp3",
    "https://assets.mixkit.co/music/preview/mixkit-ambient-03-136.mp3",
    "https://assets.mixkit.co/music/preview/mixkit-ambient-04-137.mp3",
    "https://assets.mixkit.co/music/preview/mixkit-ambient-05-138.mp3"
  ]
};

// 歌曲到音频类型的映射
const SONG_TO_AUDIO_MAP = {
  // 雨和屋檐歌单 - 使用雨声和氛围音乐
  '雨滴': 'rain',
  '檐下听雨': 'rain',
  'Rain': 'rain',
  '夏末的雨': 'ambient',
  'Rainy Night': 'ambient',
  '小雨': 'rain',
  'Raindrop Prelude': 'piano',
  'Rainy Days': 'ambient',
  
  // 光和枯树歌单 - 使用钢琴和自然音
  '阳光': 'piano',
  'Sunlight': 'piano',
  '枯树与藤蔓': 'nature',
  'Golden Hour': 'ambient',
  'Sunset Lover': 'guitar',
  '夕阳': 'piano',
  '黄昏': 'ambient',
  'Sunlight': 'piano',
  
  // 风和草地歌单 - 使用自然音和吉他
  '微风': 'nature',
  '风吹麦浪': 'nature',
  '草地上的风': 'nature',
  'Windy Day': 'ambient',
  'Breeze': 'nature',
  '清风徐来': 'guitar',
  'Wind Song': 'ambient',
  '草地': 'nature'
};

// 获取合适的音频URL
function getAudioUrl(songName, artist) {
  const key = songName;
  const audioType = SONG_TO_AUDIO_MAP[key];
  
  if (audioType && NATURAL_SOUND_LIBRARY[audioType]) {
    const urls = NATURAL_SOUND_LIBRARY[audioType];
    // 基于歌曲名和艺术家的简单哈希选择
    const hash = simpleHash(`${songName}-${artist}`);
    const index = hash % urls.length;
    return urls[index];
  }
  
  // 后备：使用自然音
  const defaultUrls = NATURAL_SOUND_LIBRARY.nature;
  const hash = simpleHash(`${songName}-${artist}`);
  const index = hash % defaultUrls.length;
  return defaultUrls[index];
}

// 简单哈希函数
function simpleHash(str) {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 33) ^ str.charCodeAt(i);
  }
  return hash >>> 0;
}

// 改进的模拟数据
export const improvedMockPlaylists = {
  rain: [
    { 
      id: '001', 
      name: '雨滴', 
      artist: 'AURORA', 
      cover: 'https://images.unsplash.com/photo-1464802332937-753ec188a096?auto=format&fit=crop&w=300&q=80', 
      url: getAudioUrl('雨滴', 'AURORA'), 
      duration: '3:45' 
    },
    { 
      id: '002', 
      name: '檐下听雨', 
      artist: '林海', 
      cover: 'https://images.unsplash.com/photo-1518415612366-0e5f25f36023?auto=format&fit=crop&w=300&q=80', 
      url: getAudioUrl('檐下听雨', '林海'), 
      duration: '4:21' 
    },
    { 
      id: '003', 
      name: 'Rain', 
      artist: 'Sidney Bechet', 
      cover: 'https://images.unsplash.com/photo-1482066490729-7c8c9d452d69?auto=format&fit=crop&w=300&q=80', 
      url: getAudioUrl('Rain', 'Sidney Bechet'), 
      duration: '2:58' 
    },
    { 
      id: '004', 
      name: '夏末的雨', 
      artist: 'G.E.M.邓紫棋', 
      cover: 'https://images.unsplash.com/photo-1499346704555-9d2f7d3ea714?auto=format&fit=crop&w=300&q=80', 
      url: getAudioUrl('夏末的雨', 'G.E.M.邓紫棋'), 
      duration: '3:32' 
    },
    { 
      id: '005', 
      name: 'Rainy Night', 
      artist: 'Thomas Bergersen', 
      cover: 'https://images.unsplash.com/photo-1505117661172-4e82de7780d5?auto=format&fit=crop&w=300&q=80', 
      url: getAudioUrl('Rainy Night', 'Thomas Bergersen'), 
      duration: '5:17' 
    },
    { 
      id: '006', 
      name: '小雨', 
      artist: '赵雷', 
      cover: 'https://images.unsplash.com/photo-1556555196-1c59a4b7d3c7?auto=format&fit=crop&w=300&q=80', 
      url: getAudioUrl('小雨', '赵雷'), 
      duration: '4:05' 
    },
    { 
      id: '007', 
      name: 'Raindrop Prelude', 
      artist: 'Chopin', 
      cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=300&q=80', 
      url: getAudioUrl('Raindrop Prelude', 'Chopin'), 
      duration: '3:22' 
    },
    { 
      id: '008', 
      name: 'Rainy Days', 
      artist: 'Jung Kook', 
      cover: 'https://images.unsplash.com/photo-1547548190-74c9d3993f34?auto=format&fit=crop&w=300&q=80', 
      url: getAudioUrl('Rainy Days', 'Jung Kook'), 
      duration: '3:54' 
    }
  ],
  light: [
    { 
      id: '101', 
      name: '阳光', 
      artist: 'G.E.M.邓紫棋', 
      cover: 'https://images.unsplash.com/photo-1476820865390-c52aeebb9891?auto=format&fit=crop&w=300&q=80', 
      url: getAudioUrl('阳光', 'G.E.M.邓紫棋'), 
      duration: '3:45' 
    },
    { 
      id: '102', 
      name: 'Sunlight', 
      artist: 'The Paper Kites', 
      cover: 'https://images.unsplash.com/photo-1485550924208-2f94a443d811?auto=format&fit=crop&w=300&q=80', 
      url: getAudioUrl('Sunlight', 'The Paper Kites'), 
      duration: '4:12' 
    },
    { 
      id: '103', 
      name: '枯树与藤蔓', 
      artist: '陈婧霏', 
      cover: 'https://images.unsplash.com/photo-1441974231531-c6227db71cd1?auto=format&fit=crop&w=300&q=80', 
      url: getAudioUrl('枯树与藤蔓', '陈婧霏'), 
      duration: '3:38' 
    },
    { 
      id: '104', 
      name: 'Golden Hour', 
      artist: 'JVKE', 
      cover: 'https://images.unsplash.com/photo-1493613680010-926f86d1b874?auto=format&fit=crop&w=300&q=80', 
      url: getAudioUrl('Golden Hour', 'JVKE'), 
      duration: '3:26' 
    },
    { 
      id: '105', 
      name: 'Sunset Lover', 
      artist: 'Petit Biscuit', 
      cover: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300&q=80', 
      url: getAudioUrl('Sunset Lover', 'Petit Biscuit'), 
      duration: '4:15' 
    },
    { 
      id: '106', 
      name: '夕阳', 
      artist: '汪苏泷', 
      cover: 'https://images.unsplash.com/photo-1604176372928-36a0f796c55f?auto=format&fit=crop&w=300&q=80', 
      url: getAudioUrl('夕阳', '汪苏泷'), 
      duration: '3:55' 
    },
    { 
      id: '107', 
      name: '黄昏', 
      artist: '周传雄', 
      cover: 'https://images.unsplash.com/photo-1592496463332-96e8f9faca32?auto=format&fit=crop&w=300&q=80', 
      url: getAudioUrl('黄昏', '周传雄'), 
      duration: '4:28' 
    },
    { 
      id: '108', 
      name: 'Sunlight', 
      artist: 'The Naked and Famous', 
      cover: 'https://images.unsplash.com/photo-1419242902215-27515850d382?auto=format&fit=crop&w=300&q=80', 
      url: getAudioUrl('Sunlight', 'The Naked and Famous'), 
      duration: '3:44' 
    }
  ],
  wind: [
    { 
      id: '201', 
      name: '微风', 
      artist: '房东的猫', 
      cover: 'https://images.unsplash.com/photo-1476901061661-4d74ad864498?auto=format&fit=crop&w=300&q=80', 
      url: getAudioUrl('微风', '房东的猫'), 
      duration: '4:12' 
    },
    { 
      id: '202', 
      name: '风吹麦浪', 
      artist: '李健', 
      cover: 'https://images.unsplash.com/photo-1447687133584-cfe494b6a703?auto=format&fit=crop&w=300&q=80', 
      url: getAudioUrl('风吹麦浪', '李健'), 
      duration: '4:35' 
    },
    { 
      id: '203', 
      name: '草地上的风', 
      artist: '周杰伦', 
      cover: 'https://images.unsplash.com/photo-1469474978980-f96e1c98c37b?auto=format&fit=crop&w=300&q=80', 
      url: getAudioUrl('草地上的风', '周杰伦'), 
      duration: '3:42' 
    },
    { 
      id: '204', 
      name: 'Windy Day', 
      artist: 'Oh Wonder', 
      cover: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=300&q=80', 
      url: getAudioUrl('Windy Day', 'Oh Wonder'), 
      duration: '3:28' 
    },
    { 
      id: '205', 
      name: 'Breeze', 
      artist: 'Tycho', 
      cover: 'https://images.unsplash.com/photo-1491485790933-720bce8a4420?auto=format&fit=crop&w=300&q=80', 
      url: getAudioUrl('Breeze', 'Tycho'), 
      duration: '4:45' 
    },
    { 
      id: '206', 
      name: '清风徐来', 
      artist: '王菲', 
      cover: 'https://images.unsplash.com/photo-1485550880267-8b79d50e1743?auto=format&fit=crop&w=300&q=80', 
      url: getAudioUrl('清风徐来', '王菲'), 
      duration: '4:02' 
    },
    { 
      id: '207', 
      name: 'Wind Song', 
      artist: 'Secret Garden', 
      cover: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=300&q=80', 
      url: getAudioUrl('Wind Song', 'Secret Garden'), 
      duration: '3:56' 
    },
    { 
      id: '208', 
      name: '草地', 
      artist: '陈粒', 
      cover: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=300&q=80', 
      url: getAudioUrl('草地', '陈粒'), 
      duration: '4:18' 
    }
  ]
};

// 导出改进的数据
export default improvedMockPlaylists;