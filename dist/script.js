// ========== THEME SYSTEM ==========
const THEMES = {
    macrozeus: {
        name: 'macroZEUS Theme',
        fixed: true,
        light: {
            '--clr-body': '#1a1a1a',
            '--clr-header': '#111111',
            '--clr-primary': '#ffa31a',
            '--clr-secondary': '#cccccc',
            '--clr-text-color': '#ffffff',
            '--clr-btn-bg': '#ffa31a',
            '--clr-btn-bg-hover': '#e08800',
            '--clr-btn-border': '#ffa31a',
            '--clr-card-bg': '#222222',
            '--clr-card-shadow': 'rgba(255,163,26,0.35)',
            '--clr-hero-text': '#ffffff',
            '--clr-hero-sub': '#ffa31a',
            '--clr-hero-desc': '#aaaaaa',
            '--clr-section-title': '#ffffff',
            '--clr-section-sub': '#aaaaaa',
            '--clr-social-bg': '#333333',
            '--clr-accent': '#ffa31a',
            '--clr-github-bg': '#ffa31a',
            '--clr-github-text': '#111111',
            '--clr-github-hover': '#e08800',
            '--clr-hero-glow': 'rgba(255,163,26,0.45)',
        }
    },
    monochrome: {
        name: 'Monochrome',
        fixed: false,
        light: {
            '--clr-body': '#f0f0f0',
            '--clr-header': '#ffffff',
            '--clr-primary': '#111111',
            '--clr-secondary': '#444444',
            '--clr-text-color': '#111111',
            '--clr-btn-bg': '#111111',
            '--clr-btn-bg-hover': '#333333',
            '--clr-btn-border': '#111111',
            '--clr-card-bg': '#ffffff',
            '--clr-card-shadow': 'rgba(0,0,0,0.12)',
            '--clr-hero-text': '#111111',
            '--clr-hero-sub': '#333333',
            '--clr-hero-desc': '#555555',
            '--clr-section-title': '#111111',
            '--clr-section-sub': '#555555',
            '--clr-social-bg': '#dddddd',
            '--clr-accent': '#111111',
            '--clr-github-bg': '#111111',
            '--clr-github-text': '#ffffff',
            '--clr-github-hover': '#333333',
            '--clr-hero-glow': 'rgba(0,0,0,0.2)',
        },
        dark: {
            '--clr-body': '#111111',
            '--clr-header': '#1a1a1a',
            '--clr-primary': '#ffffff',
            '--clr-secondary': '#bbbbbb',
            '--clr-text-color': '#ffffff',
            '--clr-btn-bg': '#ffffff',
            '--clr-btn-bg-hover': '#dddddd',
            '--clr-btn-border': '#ffffff',
            '--clr-card-bg': '#222222',
            '--clr-card-shadow': 'rgba(255,255,255,0.06)',
            '--clr-hero-text': '#ffffff',
            '--clr-hero-sub': '#cccccc',
            '--clr-hero-desc': '#999999',
            '--clr-section-title': '#ffffff',
            '--clr-section-sub': '#aaaaaa',
            '--clr-social-bg': '#2a2a2a',
            '--clr-accent': '#ffffff',
            '--clr-github-bg': '#ffffff',
            '--clr-github-text': '#111111',
            '--clr-github-hover': '#dddddd',
            '--clr-hero-glow': 'rgba(255,255,255,0.15)',
        }
    },
    ocean: {
        name: 'Ocean Blue',
        fixed: false,
        light: {
            '--clr-body': '#e8f0fe',
            '--clr-header': '#ffffff',
            '--clr-primary': '#1a3a7a',
            '--clr-secondary': '#4a6fa5',
            '--clr-text-color': '#1a3a7a',
            '--clr-btn-bg': '#2563eb',
            '--clr-btn-bg-hover': '#1d4ed8',
            '--clr-btn-border': '#2563eb',
            '--clr-card-bg': '#ffffff',
            '--clr-card-shadow': 'rgba(37,99,235,0.2)',
            '--clr-hero-text': '#0f172a',
            '--clr-hero-sub': '#2563eb',
            '--clr-hero-desc': '#475569',
            '--clr-section-title': '#0f172a',
            '--clr-section-sub': '#475569',
            '--clr-social-bg': '#bfdbfe',
            '--clr-accent': '#2563eb',
            '--clr-github-bg': '#2563eb',
            '--clr-github-text': '#ffffff',
            '--clr-github-hover': '#1d4ed8',
            '--clr-hero-glow': 'rgba(37,99,235,0.4)',
        },
        dark: {
            '--clr-body': '#0a1628',
            '--clr-header': '#0d1f3c',
            '--clr-primary': '#e0eaff',
            '--clr-secondary': '#93b4d8',
            '--clr-text-color': '#e0eaff',
            '--clr-btn-bg': '#3b82f6',
            '--clr-btn-bg-hover': '#60a5fa',
            '--clr-btn-border': '#3b82f6',
            '--clr-card-bg': '#111f3a',
            '--clr-card-shadow': 'rgba(59,130,246,0.2)',
            '--clr-hero-text': '#e0eaff',
            '--clr-hero-sub': '#60a5fa',
            '--clr-hero-desc': '#93b4d8',
            '--clr-section-title': '#e0eaff',
            '--clr-section-sub': '#93b4d8',
            '--clr-social-bg': '#1e3a5f',
            '--clr-accent': '#3b82f6',
            '--clr-github-bg': '#3b82f6',
            '--clr-github-text': '#ffffff',
            '--clr-github-hover': '#60a5fa',
            '--clr-hero-glow': 'rgba(59,130,246,0.4)',
        }
    },
    forest: {
        name: 'Forest Green',
        fixed: false,
        light: {
            '--clr-body': '#eaf5eb',
            '--clr-header': '#ffffff',
            '--clr-primary': '#14532d',
            '--clr-secondary': '#166534',
            '--clr-text-color': '#14532d',
            '--clr-btn-bg': '#16a34a',
            '--clr-btn-bg-hover': '#15803d',
            '--clr-btn-border': '#16a34a',
            '--clr-card-bg': '#ffffff',
            '--clr-card-shadow': 'rgba(22,163,74,0.2)',
            '--clr-hero-text': '#052e16',
            '--clr-hero-sub': '#16a34a',
            '--clr-hero-desc': '#4b7a5e',
            '--clr-section-title': '#052e16',
            '--clr-section-sub': '#4b7a5e',
            '--clr-social-bg': '#bbf7d0',
            '--clr-accent': '#16a34a',
            '--clr-github-bg': '#16a34a',
            '--clr-github-text': '#ffffff',
            '--clr-github-hover': '#15803d',
            '--clr-hero-glow': 'rgba(22,163,74,0.4)',
        },
        dark: {
            '--clr-body': '#041a0e',
            '--clr-header': '#071f10',
            '--clr-primary': '#dcfce7',
            '--clr-secondary': '#86efac',
            '--clr-text-color': '#dcfce7',
            '--clr-btn-bg': '#22c55e',
            '--clr-btn-bg-hover': '#4ade80',
            '--clr-btn-border': '#22c55e',
            '--clr-card-bg': '#0a3d1a',
            '--clr-card-shadow': 'rgba(34,197,94,0.2)',
            '--clr-hero-text': '#dcfce7',
            '--clr-hero-sub': '#4ade80',
            '--clr-hero-desc': '#86efac',
            '--clr-section-title': '#dcfce7',
            '--clr-section-sub': '#86efac',
            '--clr-social-bg': '#14532d',
            '--clr-accent': '#22c55e',
            '--clr-github-bg': '#22c55e',
            '--clr-github-text': '#052e16',
            '--clr-github-hover': '#4ade80',
            '--clr-hero-glow': 'rgba(34,197,94,0.4)',
        }
    },
    purple: {
        name: 'Royal Purple',
        fixed: false,
        light: {
            '--clr-body': '#f5f0ff',
            '--clr-header': '#ffffff',
            '--clr-primary': '#581c87',
            '--clr-secondary': '#7c3aed',
            '--clr-text-color': '#581c87',
            '--clr-btn-bg': '#9333ea',
            '--clr-btn-bg-hover': '#7c3aed',
            '--clr-btn-border': '#9333ea',
            '--clr-card-bg': '#ffffff',
            '--clr-card-shadow': 'rgba(147,51,234,0.2)',
            '--clr-hero-text': '#3b0764',
            '--clr-hero-sub': '#9333ea',
            '--clr-hero-desc': '#6b4f7e',
            '--clr-section-title': '#3b0764',
            '--clr-section-sub': '#6b4f7e',
            '--clr-social-bg': '#e9d5ff',
            '--clr-accent': '#9333ea',
            '--clr-github-bg': '#9333ea',
            '--clr-github-text': '#ffffff',
            '--clr-github-hover': '#7c3aed',
            '--clr-hero-glow': 'rgba(147,51,234,0.4)',
        },
        dark: {
            '--clr-body': '#120426',
            '--clr-header': '#1a063a',
            '--clr-primary': '#f3e8ff',
            '--clr-secondary': '#c084fc',
            '--clr-text-color': '#f3e8ff',
            '--clr-btn-bg': '#a855f7',
            '--clr-btn-bg-hover': '#c084fc',
            '--clr-btn-border': '#a855f7',
            '--clr-card-bg': '#200840',
            '--clr-card-shadow': 'rgba(168,85,247,0.2)',
            '--clr-hero-text': '#f3e8ff',
            '--clr-hero-sub': '#a855f7',
            '--clr-hero-desc': '#c084fc',
            '--clr-section-title': '#f3e8ff',
            '--clr-section-sub': '#c084fc',
            '--clr-social-bg': '#2d0c50',
            '--clr-accent': '#a855f7',
            '--clr-github-bg': '#a855f7',
            '--clr-github-text': '#ffffff',
            '--clr-github-hover': '#c084fc',
            '--clr-hero-glow': 'rgba(168,85,247,0.4)',
        }
    },
    ember: {
        name: 'Ember Red',
        fixed: false,
        light: {
            '--clr-body': '#fff0e8',
            '--clr-header': '#ffffff',
            '--clr-primary': '#7c2d12',
            '--clr-secondary': '#c2410c',
            '--clr-text-color': '#7c2d12',
            '--clr-btn-bg': '#ea580c',
            '--clr-btn-bg-hover': '#c2410c',
            '--clr-btn-border': '#ea580c',
            '--clr-card-bg': '#ffffff',
            '--clr-card-shadow': 'rgba(234,88,12,0.2)',
            '--clr-hero-text': '#431407',
            '--clr-hero-sub': '#ea580c',
            '--clr-hero-desc': '#78412d',
            '--clr-section-title': '#431407',
            '--clr-section-sub': '#78412d',
            '--clr-social-bg': '#fed7aa',
            '--clr-accent': '#ea580c',
            '--clr-github-bg': '#ea580c',
            '--clr-github-text': '#ffffff',
            '--clr-github-hover': '#c2410c',
            '--clr-hero-glow': 'rgba(234,88,12,0.4)',
        },
        dark: {
            '--clr-body': '#180800',
            '--clr-header': '#1f0d00',
            '--clr-primary': '#ffedd5',
            '--clr-secondary': '#fb923c',
            '--clr-text-color': '#ffedd5',
            '--clr-btn-bg': '#f97316',
            '--clr-btn-bg-hover': '#fb923c',
            '--clr-btn-border': '#f97316',
            '--clr-card-bg': '#2c1200',
            '--clr-card-shadow': 'rgba(249,115,22,0.2)',
            '--clr-hero-text': '#ffedd5',
            '--clr-hero-sub': '#f97316',
            '--clr-hero-desc': '#fb923c',
            '--clr-section-title': '#ffedd5',
            '--clr-section-sub': '#fb923c',
            '--clr-social-bg': '#3d1400',
            '--clr-accent': '#f97316',
            '--clr-github-bg': '#f97316',
            '--clr-github-text': '#ffffff',
            '--clr-github-hover': '#fb923c',
            '--clr-hero-glow': 'rgba(249,115,22,0.4)',
        }
    },
    rose: {
        name: 'Rose Pink',
        fixed: false,
        light: {
            '--clr-body': '#fff0f5',
            '--clr-header': '#ffffff',
            '--clr-primary': '#881337',
            '--clr-secondary': '#be123c',
            '--clr-text-color': '#881337',
            '--clr-btn-bg': '#e11d48',
            '--clr-btn-bg-hover': '#be123c',
            '--clr-btn-border': '#e11d48',
            '--clr-card-bg': '#ffffff',
            '--clr-card-shadow': 'rgba(225,29,72,0.2)',
            '--clr-hero-text': '#4c0519',
            '--clr-hero-sub': '#e11d48',
            '--clr-hero-desc': '#7a3049',
            '--clr-section-title': '#4c0519',
            '--clr-section-sub': '#7a3049',
            '--clr-social-bg': '#fecdd3',
            '--clr-accent': '#e11d48',
            '--clr-github-bg': '#e11d48',
            '--clr-github-text': '#ffffff',
            '--clr-github-hover': '#be123c',
            '--clr-hero-glow': 'rgba(225,29,72,0.4)',
        },
        dark: {
            '--clr-body': '#1a0310',
            '--clr-header': '#220418',
            '--clr-primary': '#ffe4ec',
            '--clr-secondary': '#fda4af',
            '--clr-text-color': '#ffe4ec',
            '--clr-btn-bg': '#f43f5e',
            '--clr-btn-bg-hover': '#fb7185',
            '--clr-btn-border': '#f43f5e',
            '--clr-card-bg': '#2d0820',
            '--clr-card-shadow': 'rgba(244,63,94,0.2)',
            '--clr-hero-text': '#ffe4ec',
            '--clr-hero-sub': '#f43f5e',
            '--clr-hero-desc': '#fda4af',
            '--clr-section-title': '#ffe4ec',
            '--clr-section-sub': '#fda4af',
            '--clr-social-bg': '#3d0a28',
            '--clr-accent': '#f43f5e',
            '--clr-github-bg': '#f43f5e',
            '--clr-github-text': '#ffffff',
            '--clr-github-hover': '#fb7185',
            '--clr-hero-glow': 'rgba(244,63,94,0.4)',
        }
    },
    slate: {
        name: 'Slate Gray',
        fixed: false,
        light: {
            '--clr-body': '#f1f5f9',
            '--clr-header': '#ffffff',
            '--clr-primary': '#1e293b',
            '--clr-secondary': '#475569',
            '--clr-text-color': '#1e293b',
            '--clr-btn-bg': '#475569',
            '--clr-btn-bg-hover': '#334155',
            '--clr-btn-border': '#475569',
            '--clr-card-bg': '#ffffff',
            '--clr-card-shadow': 'rgba(71,85,105,0.15)',
            '--clr-hero-text': '#0f172a',
            '--clr-hero-sub': '#475569',
            '--clr-hero-desc': '#64748b',
            '--clr-section-title': '#0f172a',
            '--clr-section-sub': '#64748b',
            '--clr-social-bg': '#cbd5e1',
            '--clr-accent': '#64748b',
            '--clr-github-bg': '#1e293b',
            '--clr-github-text': '#ffffff',
            '--clr-github-hover': '#334155',
            '--clr-hero-glow': 'rgba(71,85,105,0.3)',
        },
        dark: {
            '--clr-body': '#0f172a',
            '--clr-header': '#1e293b',
            '--clr-primary': '#e2e8f0',
            '--clr-secondary': '#94a3b8',
            '--clr-text-color': '#e2e8f0',
            '--clr-btn-bg': '#64748b',
            '--clr-btn-bg-hover': '#94a3b8',
            '--clr-btn-border': '#64748b',
            '--clr-card-bg': '#1e293b',
            '--clr-card-shadow': 'rgba(100,116,139,0.2)',
            '--clr-hero-text': '#e2e8f0',
            '--clr-hero-sub': '#94a3b8',
            '--clr-hero-desc': '#64748b',
            '--clr-section-title': '#e2e8f0',
            '--clr-section-sub': '#94a3b8',
            '--clr-social-bg': '#334155',
            '--clr-accent': '#94a3b8',
            '--clr-github-bg': '#64748b',
            '--clr-github-text': '#ffffff',
            '--clr-github-hover': '#94a3b8',
            '--clr-hero-glow': 'rgba(100,116,139,0.3)',
        }
    },
    teal: {
        name: 'Teal & Cyan',
        fixed: false,
        light: {
            '--clr-body': '#e6fafa',
            '--clr-header': '#ffffff',
            '--clr-primary': '#134e4a',
            '--clr-secondary': '#0f766e',
            '--clr-text-color': '#134e4a',
            '--clr-btn-bg': '#0d9488',
            '--clr-btn-bg-hover': '#0f766e',
            '--clr-btn-border': '#0d9488',
            '--clr-card-bg': '#ffffff',
            '--clr-card-shadow': 'rgba(13,148,136,0.2)',
            '--clr-hero-text': '#042f2e',
            '--clr-hero-sub': '#0d9488',
            '--clr-hero-desc': '#2d6a65',
            '--clr-section-title': '#042f2e',
            '--clr-section-sub': '#2d6a65',
            '--clr-social-bg': '#99f6e4',
            '--clr-accent': '#0d9488',
            '--clr-github-bg': '#0d9488',
            '--clr-github-text': '#ffffff',
            '--clr-github-hover': '#0f766e',
            '--clr-hero-glow': 'rgba(13,148,136,0.4)',
        },
        dark: {
            '--clr-body': '#021a18',
            '--clr-header': '#042f2e',
            '--clr-primary': '#ccfbf1',
            '--clr-secondary': '#5eead4',
            '--clr-text-color': '#ccfbf1',
            '--clr-btn-bg': '#14b8a6',
            '--clr-btn-bg-hover': '#2dd4bf',
            '--clr-btn-border': '#14b8a6',
            '--clr-card-bg': '#063d3a',
            '--clr-card-shadow': 'rgba(20,184,166,0.2)',
            '--clr-hero-text': '#ccfbf1',
            '--clr-hero-sub': '#2dd4bf',
            '--clr-hero-desc': '#5eead4',
            '--clr-section-title': '#ccfbf1',
            '--clr-section-sub': '#5eead4',
            '--clr-social-bg': '#0d4a45',
            '--clr-accent': '#14b8a6',
            '--clr-github-bg': '#14b8a6',
            '--clr-github-text': '#042f2e',
            '--clr-github-hover': '#2dd4bf',
            '--clr-hero-glow': 'rgba(20,184,166,0.4)',
        }
    },
};

const DEFAULT_THEME = 'macrozeus';
const DEFAULT_MODE = 'light';

function applyTheme(themeKey, mode) {
    const theme = THEMES[themeKey];
    if (!theme) return;
    const vars = theme.fixed ? theme.light : (theme[mode] || theme.light);
    const root = document.documentElement;
    Object.entries(vars).forEach(([k, v]) => root.style.setProperty(k, v));

    // btn text color
    const btnBg = vars['--clr-btn-bg'];
    const lightBtns = ['#ffffff', '#f5f5f5', '#dddddd', '#cccccc'];
    const isLightBtn = lightBtns.includes(btnBg?.toLowerCase());
    root.style.setProperty('--clr-btn-text', isLightBtn ? '#111111' : '#ffffff');

    localStorage.setItem('macroTheme', themeKey);
    if (!theme.fixed) localStorage.setItem('macroMode', mode);

    updateThemeUI(themeKey, mode);

    // hero image glow
    const heroImg = document.querySelector('.hero-image');
    if (heroImg) {
        heroImg.style.borderColor = vars['--clr-accent'];
        heroImg.style.boxShadow = `0 0 40px ${vars['--clr-hero-glow']}`;
    }

    // footer link
    const footerLink = document.querySelector('footer a');
    if (footerLink) footerLink.style.color = vars['--clr-accent'];

    // github buttons
    document.querySelectorAll('.github-section').forEach(btn => {
        btn.style.background = vars['--clr-github-bg'];
        btn.style.color = vars['--clr-github-text'];
    });
    document.querySelectorAll('.github-logo, .github-section-text, .github-star-badge').forEach(el => {
        el.style.color = vars['--clr-github-text'];
    });
    document.querySelectorAll('.github-star-badge i').forEach(el => {
        el.style.color = vars['--clr-github-text'];
    });
}

function updateThemeUI(themeKey, mode) {
    document.querySelectorAll('.theme-option').forEach(el => {
        el.classList.toggle('active', el.dataset.theme === themeKey);
    });
    const modeToggle = document.getElementById('modeToggle');
    if (modeToggle) {
        const theme = THEMES[themeKey];
        if (theme && theme.fixed) {
            modeToggle.style.display = 'none';
        } else {
            modeToggle.style.display = 'flex';
            modeToggle.querySelector('.mode-light').classList.toggle('active', mode === 'light');
            modeToggle.querySelector('.mode-dark').classList.toggle('active', mode === 'dark');
        }
    }
}

function getCurrentTheme() {
    return localStorage.getItem('macroTheme') || DEFAULT_THEME;
}

function getCurrentMode() {
    return localStorage.getItem('macroMode') || DEFAULT_MODE;
}

function buildThemeMenu() {
    const menuList = document.querySelector('.menu-list');
    if (!menuList) return;

    menuList.innerHTML = '';

    // macroZEUS Theme - always first, always pinned
    const macrothemeKey = 'macrozeus';
    const macroTheme = THEMES[macrothemeKey];
    const currentTheme = getCurrentTheme();
    const currentMode = getCurrentMode();

    const macroLi = document.createElement('li');
    macroLi.innerHTML = `
        <div class="theme-option macrozeus-option ${currentTheme === macrothemeKey ? 'active' : ''}" data-theme="${macrothemeKey}">
            <span class="theme-dot" style="background:${macroTheme.light['--clr-accent']}"></span>
            <span class="theme-opt-name">${macroTheme.name}</span>
        </div>
    `;
    menuList.appendChild(macroLi);

    // Divider
    const divider = document.createElement('li');
    divider.innerHTML = '<div class="theme-divider"></div>';
    menuList.appendChild(divider);

    // Mode toggle
    const modeItem = document.createElement('li');
    modeItem.innerHTML = `
        <div id="modeToggle" style="display:flex;gap:6px;padding:4px 0;margin-bottom:4px">
            <button class="mode-btn mode-light" data-mode="light" title="Açık Mod">
                <i class='bx bx-sun'></i> Açık
            </button>
            <button class="mode-btn mode-dark" data-mode="dark" title="Koyu Mod">
                <i class='bx bx-moon'></i> Koyu
            </button>
        </div>
    `;
    menuList.appendChild(modeItem);

    // Theme label
    const label = document.createElement('li');
    label.innerHTML = '<span class="theme-label">Temalar</span>';
    menuList.appendChild(label);

    // Other themes (skip macrozeus)
    Object.entries(THEMES).forEach(([key, theme]) => {
        if (key === 'macrozeus') return;
        const li = document.createElement('li');
        const accent = theme.light['--clr-accent'];
        li.innerHTML = `
            <div class="theme-option ${currentTheme === key ? 'active' : ''}" data-theme="${key}">
                <span class="theme-dot" style="background:${accent}"></span>
                <span class="theme-opt-name">${theme.name}</span>
            </div>
        `;
        menuList.appendChild(li);
    });

    // Mode button events
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const mode = btn.dataset.mode;
            const theme = getCurrentTheme();
            applyTheme(theme, mode);
        });
    });

    // Theme option events
    document.querySelectorAll('.theme-option').forEach(el => {
        el.addEventListener('click', (e) => {
            e.stopPropagation();
            const key = el.dataset.theme;
            const theme = THEMES[key];
            const mode = theme.fixed ? 'light' : getCurrentMode();
            applyTheme(key, mode);
        });
    });

    updateThemeUI(currentTheme, currentMode);
}

// ========== INIT THEME ==========
(function initTheme() {
    const savedTheme = getCurrentTheme();
    const savedMode = getCurrentMode();
    applyTheme(savedTheme, savedMode);
})();

// ========== HEADER SCROLL ==========
const menuIcon = document.querySelector('.menu-icon');
const menuList = document.querySelector('.menu-list');

window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    menuList.classList.toggle("active");
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.header-menu')) {
        menuIcon.classList.remove('active');
        menuList.classList.remove('active');
    }
});

// ========== BUILD THEME MENU ==========
buildThemeMenu();

// ========== PROJECTS ==========
const projects = [
    { name: 'Renk Paleti', image: 'renk-paleti.png', link: 'projects/renk-paleti/' },
    { name: 'Dijital Saat', image: 'dijital-saat.png', link: 'projects/dijital-saat/' },
    { name: 'QR Kod Oluşturucu', image: 'qr-kod-olusturucu.png', link: 'projects/qr-kod-olusturucu/' },
    { name: 'Döviz Çevirici', image: 'doviz-cevirici.png', link: 'projects/doviz-cevirici/' },
    { name: 'Şifre Oluşturucu', image: 'sifre-olusturucu.png', link: 'projects/sifre-olusturucu/' },
    { name: 'Hesap Makinesi', image: 'hesap-makinesi.png', link: 'projects/hesap-makinesi/' },
    { name: 'Hava Durumu', image: 'hava-durumu.png', link: 'projects/hava-durumu/' },
];

const projectList = document.querySelector('.project-list');

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleArray(projects);

projects.forEach((project) => {
    const card = document.createElement('div');
    card.classList.add('project-card');

    const image = document.createElement('img');
    image.src = project.image;
    image.alt = project.name;

    const projectDetails = document.createElement('div');
    projectDetails.classList.add('project-details');

    const name = document.createElement('h3');
    name.textContent = project.name;

    const btngroup = document.createElement('div');
    btngroup.classList.add('btn-gruop');

    const btn = document.createElement('a');
    btn.textContent = 'Görüntüle';
    btn.setAttribute('href', project.link);

    btngroup.appendChild(btn);
    projectDetails.appendChild(name);
    projectDetails.appendChild(btngroup);
    card.appendChild(image);
    card.appendChild(projectDetails);
    projectList.appendChild(card);
});

// ========== GITHUB STAR COUNTER ==========
let starCount = 0;

function starUp() {
    starCount++;
    document.querySelectorAll('.star-count').forEach((starSpan) => {
        starSpan.textContent = starCount;
    });
    if (starCount === projects.length) {
        clearInterval(timerInterval);
    }
}

let timerInterval;
function startTimer() {
    timerInterval = setInterval(starUp, 100);
}
startTimer();

// ========== PROJECT CARD ANIMATIONS ==========
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.4s ease ${index * 0.05}s, transform 0.4s ease ${index * 0.05}s`;
    setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
        const clearDelay = 400 + index * 50 + 50;
        setTimeout(() => {
            card.style.transform = '';
            card.style.transition = '';
        }, clearDelay);
    }, 50);
});