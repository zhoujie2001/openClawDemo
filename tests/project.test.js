// 基础测试示例

describe('Project Setup', () => {
  test('should have project configuration', () => {
    const packageJson = require('../../package.json')
    
    expect(packageJson).toHaveProperty('name')
    expect(packageJson).toHaveProperty('version')
    expect(packageJson).toHaveProperty('scripts')
    expect(packageJson.name).toBe('openclawdemo')
  })

  test('should have required scripts', () => {
    const packageJson = require('../../package.json')
    
    const requiredScripts = ['dev', 'build', 'test', 'lint']
    requiredScripts.forEach(script => {
      expect(packageJson.scripts).toHaveProperty(script)
    })
  })
})

describe('Code Quality Tools', () => {
  test('should have ESLint configuration', () => {
    const fs = require('fs')
    const path = require('path')
    
    const eslintConfigPath = path.join(__dirname, '../../.eslintrc.js')
    expect(fs.existsSync(eslintConfigPath)).toBe(true)
  })

  test('should have Prettier configuration', () => {
    const fs = require('fs')
    const path = require('path')
    
    const prettierConfigPath = path.join(__dirname, '../../.prettierrc')
    expect(fs.existsSync(prettierConfigPath)).toBe(true)
  })

  test('should have EditorConfig', () => {
    const fs = require('fs')
    const path = require('path')
    
    const editorConfigPath = path.join(__dirname, '../../.editorconfig')
    expect(fs.existsSync(editorConfigPath)).toBe(true)
  })
})
