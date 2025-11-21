/**
 * Theme Switcher for YOLO11 Multi-Layer Detection System
 * 웹사이트 전체 테마 색상 변경 기능
 * Created: 2025-11-21
 */

// 사용 가능한 테마 정의
const themes = {
    'forest': {
        name: 'Forest Green',
        icon: '🌲',
        primary: {
            50: '#ecfdf5',
            100: '#d1fae5',
            200: '#a7f3d0',
            300: '#6ee7b7',
            400: '#34d399',
            500: '#10b981',
            600: '#059669',
            700: '#047857',
            800: '#065f46',
            900: '#064e3b'
        },
        gradient1: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
        gradient2: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
        gradient3: 'linear-gradient(135deg, #047857 0%, #059669 100%)'
    },
    'ocean': {
        name: 'Ocean Blue',
        icon: '🌊',
        primary: {
            50: '#eff6ff',
            100: '#dbeafe',
            200: '#bfdbfe',
            300: '#93c5fd',
            400: '#60a5fa',
            500: '#3b82f6',
            600: '#2563eb',
            700: '#1d4ed8',
            800: '#1e40af',
            900: '#1e3a8a'
        },
        gradient1: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)',
        gradient2: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
        gradient3: 'linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%)'
    },
    'sunset': {
        name: 'Sunset Orange',
        icon: '🌅',
        primary: {
            50: '#fff7ed',
            100: '#ffedd5',
            200: '#fed7aa',
            300: '#fdba74',
            400: '#fb923c',
            500: '#f97316',
            600: '#ea580c',
            700: '#c2410c',
            800: '#9a3412',
            900: '#7c2d12'
        },
        gradient1: 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)',
        gradient2: 'linear-gradient(135deg, #ea580c 0%, #f97316 100%)',
        gradient3: 'linear-gradient(135deg, #c2410c 0%, #ea580c 100%)'
    },
    'purple': {
        name: 'Royal Purple',
        icon: '👑',
        primary: {
            50: '#faf5ff',
            100: '#f3e8ff',
            200: '#e9d5ff',
            300: '#d8b4fe',
            400: '#c084fc',
            500: '#a855f7',
            600: '#9333ea',
            700: '#7e22ce',
            800: '#6b21a8',
            900: '#581c87'
        },
        gradient1: 'linear-gradient(135deg, #a855f7 0%, #c084fc 100%)',
        gradient2: 'linear-gradient(135deg, #9333ea 0%, #a855f7 100%)',
        gradient3: 'linear-gradient(135deg, #7e22ce 0%, #9333ea 100%)'
    },
    'rose': {
        name: 'Rose Pink',
        icon: '🌹',
        primary: {
            50: '#fff1f2',
            100: '#ffe4e6',
            200: '#fecdd3',
            300: '#fda4af',
            400: '#fb7185',
            500: '#f43f5e',
            600: '#e11d48',
            700: '#be123c',
            800: '#9f1239',
            900: '#881337'
        },
        gradient1: 'linear-gradient(135deg, #f43f5e 0%, #fb7185 100%)',
        gradient2: 'linear-gradient(135deg, #e11d48 0%, #f43f5e 100%)',
        gradient3: 'linear-gradient(135deg, #be123c 0%, #e11d48 100%)'
    },
    'teal': {
        name: 'Teal Cyan',
        icon: '💎',
        primary: {
            50: '#f0fdfa',
            100: '#ccfbf1',
            200: '#99f6e4',
            300: '#5eead4',
            400: '#2dd4bf',
            500: '#14b8a6',
            600: '#0d9488',
            700: '#0f766e',
            800: '#115e59',
            900: '#134e4a'
        },
        gradient1: 'linear-gradient(135deg, #14b8a6 0%, #2dd4bf 100%)',
        gradient2: 'linear-gradient(135deg, #0d9488 0%, #14b8a6 100%)',
        gradient3: 'linear-gradient(135deg, #0f766e 0%, #0d9488 100%)'
    },
    'amber': {
        name: 'Amber Gold',
        icon: '🌟',
        primary: {
            50: '#fffbeb',
            100: '#fef3c7',
            200: '#fde68a',
            300: '#fcd34d',
            400: '#fbbf24',
            500: '#f59e0b',
            600: '#d97706',
            700: '#b45309',
            800: '#92400e',
            900: '#78350f'
        },
        gradient1: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
        gradient2: 'linear-gradient(135deg, #d97706 0%, #f59e0b 100%)',
        gradient3: 'linear-gradient(135deg, #b45309 0%, #d97706 100%)'
    },
    'slate': {
        name: 'Slate Gray',
        icon: '🌫️',
        primary: {
            50: '#f8fafc',
            100: '#f1f5f9',
            200: '#e2e8f0',
            300: '#cbd5e1',
            400: '#94a3b8',
            500: '#64748b',
            600: '#475569',
            700: '#334155',
            800: '#1e293b',
            900: '#0f172a'
        },
        gradient1: 'linear-gradient(135deg, #64748b 0%, #94a3b8 100%)',
        gradient2: 'linear-gradient(135deg, #475569 0%, #64748b 100%)',
        gradient3: 'linear-gradient(135deg, #334155 0%, #475569 100%)'
    }
};

// 현재 테마 (로컬 스토리지에서 가져오기)
let currentTheme = localStorage.getItem('selectedTheme') || 'forest';

// 테마 적용 함수
function applyTheme(themeName) {
    const theme = themes[themeName];
    if (!theme) return;
    
    const root = document.documentElement;
    
    // Primary colors 적용
    Object.keys(theme.primary).forEach(key => {
        root.style.setProperty(`--primary-${key}`, theme.primary[key]);
    });
    
    // Gradients 적용
    root.style.setProperty('--gradient-1', theme.gradient1);
    root.style.setProperty('--gradient-2', theme.gradient2);
    root.style.setProperty('--gradient-3', theme.gradient3);
    
    // Success color도 primary-500으로 업데이트
    root.style.setProperty('--success', theme.primary[500]);
    
    // 로컬 스토리지에 저장
    localStorage.setItem('selectedTheme', themeName);
    currentTheme = themeName;
    
    // 테마 선택기 업데이트
    updateThemeSelector();
}

// 테마 선택기 UI 생성
function createThemeSelector() {
    const selector = document.createElement('div');
    selector.className = 'theme-selector';
    selector.innerHTML = `
        <button class="theme-toggle nav-link" id="themeToggle" title="테마 변경">
            <i class="fas fa-palette"></i>
            <span class="theme-label">테마</span>
        </button>
        <div class="theme-dropdown" id="themeDropdown">
            <div class="theme-dropdown-header">
                <h4>테마 선택</h4>
                <button class="theme-close" id="themeClose">×</button>
            </div>
            <div class="theme-options">
                ${Object.entries(themes).map(([key, theme]) => `
                    <button class="theme-option ${key === currentTheme ? 'active' : ''}" 
                            data-theme="${key}"
                            title="${theme.name}">
                        <span class="theme-icon">${theme.icon}</span>
                        <span class="theme-name">${theme.name}</span>
                        <span class="theme-preview">
                            <span class="preview-dot" style="background: ${theme.primary[500]}"></span>
                            <span class="preview-dot" style="background: ${theme.primary[400]}"></span>
                            <span class="preview-dot" style="background: ${theme.primary[600]}"></span>
                        </span>
                    </button>
                `).join('')}
            </div>
        </div>
    `;
    
    // CSS 스타일 추가
    if (!document.getElementById('theme-styles')) {
        const style = document.createElement('style');
        style.id = 'theme-styles';
        style.textContent = `
            .theme-selector {
                position: relative;
                display: inline-block;
            }
            
            .theme-toggle {
                background: transparent;
                color: var(--gray-700);
                border: none;
                cursor: pointer;
                font-size: 0.9rem;
                font-weight: 500;
                transition: all 0.3s ease;
                display: flex;
                align-items: center;
                gap: 0.5rem;
                padding: 0.5rem 1rem;
                border-radius: 0.5rem;
            }
            
            .theme-toggle:hover {
                color: var(--primary-600);
                background: var(--primary-50);
            }
            
            .theme-toggle.active {
                color: var(--primary-600);
                background: var(--primary-50);
            }
            
            .theme-label {
                display: inline-block;
            }
            
            @media (max-width: 768px) {
                .theme-label {
                    display: none;
                }
            }
            
            .theme-dropdown {
                position: absolute;
                top: 100%;
                right: 0;
                margin-top: 0.5rem;
                background: white;
                border-radius: 1rem;
                box-shadow: var(--shadow-xl);
                width: 320px;
                opacity: 0;
                visibility: hidden;
                transform: translateY(-10px);
                transition: all 0.3s ease;
                z-index: 1000;
            }
            
            .theme-dropdown.show {
                opacity: 1;
                visibility: visible;
                transform: translateY(0);
            }
            
            .theme-dropdown-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 1.25rem;
                border-bottom: 1px solid var(--gray-200);
            }
            
            .theme-dropdown-header h4 {
                margin: 0;
                color: var(--gray-800);
                font-size: 1.125rem;
            }
            
            .theme-close {
                background: none;
                border: none;
                font-size: 1.5rem;
                color: var(--gray-500);
                cursor: pointer;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                transition: all 0.2s;
            }
            
            .theme-close:hover {
                background: var(--gray-100);
                color: var(--gray-700);
            }
            
            .theme-options {
                padding: 0.75rem;
                max-height: 400px;
                overflow-y: auto;
            }
            
            .theme-option {
                display: flex;
                align-items: center;
                gap: 0.75rem;
                width: 100%;
                padding: 0.75rem;
                background: white;
                border: 2px solid var(--gray-200);
                border-radius: 0.75rem;
                margin-bottom: 0.5rem;
                cursor: pointer;
                transition: all 0.2s;
                text-align: left;
            }
            
            .theme-option:hover {
                background: var(--gray-50);
                border-color: var(--primary-300);
                transform: translateX(4px);
            }
            
            .theme-option.active {
                background: var(--primary-50);
                border-color: var(--primary-500);
                box-shadow: var(--shadow-md);
            }
            
            .theme-icon {
                font-size: 1.5rem;
            }
            
            .theme-name {
                flex: 1;
                font-weight: 600;
                color: var(--gray-800);
            }
            
            .theme-preview {
                display: flex;
                gap: 0.25rem;
            }
            
            .preview-dot {
                width: 16px;
                height: 16px;
                border-radius: 50%;
                border: 2px solid white;
                box-shadow: 0 0 0 1px rgba(0,0,0,0.1);
            }
            
            /* 모바일 반응형 */
            @media (max-width: 768px) {
                .theme-dropdown {
                    position: fixed;
                    top: 60px;
                    left: 50%;
                    right: auto;
                    transform: translateX(-50%) translateY(-10px);
                    width: 90%;
                    max-width: 320px;
                }
                
                .theme-dropdown.show {
                    transform: translateX(-50%) translateY(0);
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    return selector;
}

// 테마 선택기 업데이트
function updateThemeSelector() {
    const options = document.querySelectorAll('.theme-option');
    options.forEach(option => {
        if (option.dataset.theme === currentTheme) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
}

// 초기화 함수
function initThemeSwitcher() {
    // 저장된 테마 적용
    applyTheme(currentTheme);
    
    // 네비게이션 메뉴 찾기
    const navMenu = document.querySelector('.nav-menu');
    if (!navMenu) {
        console.warn('Navigation menu not found');
        return;
    }
    
    // 테마 선택기 추가 (GitHub 링크 앞에 삽입)
    const selector = createThemeSelector();
    const githubLink = navMenu.querySelector('a[href*="github"]');
    if (githubLink) {
        navMenu.insertBefore(selector, githubLink);
    } else {
        navMenu.appendChild(selector);
    }
    
    // 이벤트 리스너
    const toggle = document.getElementById('themeToggle');
    const dropdown = document.getElementById('themeDropdown');
    const close = document.getElementById('themeClose');
    
    // 토글 버튼 클릭
    toggle.addEventListener('click', () => {
        const isShowing = dropdown.classList.contains('show');
        dropdown.classList.toggle('show');
        toggle.classList.toggle('active', !isShowing);
    });
    
    // 닫기 버튼
    close.addEventListener('click', () => {
        dropdown.classList.remove('show');
        toggle.classList.remove('active');
    });
    
    // 테마 선택
    document.querySelectorAll('.theme-option').forEach(option => {
        option.addEventListener('click', () => {
            const themeName = option.dataset.theme;
            applyTheme(themeName);
            dropdown.classList.remove('show');
            toggle.classList.remove('active');
        });
    });
    
    // 외부 클릭 시 닫기
    document.addEventListener('click', (e) => {
        if (!selector.contains(e.target)) {
            dropdown.classList.remove('show');
            toggle.classList.remove('active');
        }
    });
}

// DOM 로드 시 초기화
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initThemeSwitcher);
} else {
    initThemeSwitcher();
}