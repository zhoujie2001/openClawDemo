/**
 * openClawDemo - 主应用脚本
 * @author 弗诺伦蒂诺 🦞
 */

// 应用状态
const App = {
    version: '1.0.0',
    startTime: new Date(),
    
    /**
     * 初始化应用
     */
    init() {
        console.log('🦞 openClawDemo v' + this.version + ' 已启动');
        this.bindEvents();
        this.loadProgress();
        this.showWelcome();
    },
    
    /**
     * 绑定事件监听器
     */
    bindEvents() {
        // 导航菜单平滑滚动
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
        
        // 窗口大小变化响应
        window.addEventListener('resize', () => {
            console.log('📱 窗口大小变化:', window.innerWidth, 'x', window.innerHeight);
        });
    },
    
    /**
     * 加载项目进度
     */
    async loadProgress() {
        try {
            // 模拟加载进度数据
            const progressData = {
                totalProgress: 39,
                completedTasks: 5,
                inProgressTasks: 4,
                pendingTasks: 4
            };
            
            console.log('📊 当前项目进度:', progressData);
            this.updateProgressDisplay(progressData);
        } catch (error) {
            console.error('❌ 加载进度失败:', error);
        }
    },
    
    /**
     * 更新进度显示
     */
    updateProgressDisplay(data) {
        console.log(`✅ 已完成：${data.completedTasks} | 🔄 进行中：${data.inProgressTasks} | ⏳ 待开始：${data.pendingTasks}`);
        console.log(`📈 总进度：${data.totalProgress}%`);
    },
    
    /**
     * 显示欢迎信息
     */
    showWelcome() {
        const welcomeMessage = `
╔════════════════════════════════════════════╗
║   🦞 openClawDemo v${this.version.padEnd(6)}  ║
║                                            ║
║   由弗诺伦蒂诺管理的项目演示              ║
║   启动时间：${this.startTime.toLocaleString('zh-CN')}           ║
╚════════════════════════════════════════════╝
        `;
        console.log(welcomeMessage);
    }
};

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});

// 全局函数（供 HTML 按钮调用）
function showInfo() {
    alert('🎉 欢迎使用 openClawDemo!\n\n这是一个展示自动化项目管理流程的演示项目。\n\n核心功能:\n✅ 每 10 分钟自动汇报进度\n✅ 每日自动生成日报和反思\n✅ AI 智能任务分配和管理\n\n由弗诺伦蒂诺 🦞 全程管理');
}

// 导出到全局作用域
window.App = App;
