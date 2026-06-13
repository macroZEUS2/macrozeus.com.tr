// ========== THEME SYSTEM ==========
const THEMES = {
    monochrome: {
        name: 'Monochrome',
        fixed: false,
        light: {
            '--clr-body': '#f5f5f5',
            '--clr-header': '#ffffff',
            '--clr-primary': '#111111',
            '--clr-secondary': '#444444',
            '--clr-text-color': '#111111',
            '--clr-btn-bg': '#111111',
            '--clr-btn-bg-hover': '#333333',
            '--clr-btn-border': '#111111',
            '--clr-card-bg': '#ffffff',
            '--clr-card-shadow': 'rgba(0,0,0,0.15)',
            '--clr-hero-text': '#111111',
            '--clr-hero-sub': '#555555',
            '--clr-hero-desc': '#666666',
            '--clr-section-title': '#111111',
            '--clr-section-sub': '#555555',
            '--clr-social-bg': '#dddddd',
            '--clr-accent': '#ffa31a',
        },
        dark: {
            '--clr-body': '#111111',
            '--clr-header': '#1a1a1a',
            '--clr-primary': '#ffffff',
            '--clr-secondary': '#aaaaaa',
            '--clr-text-color': '#ffffff',
            '--clr-btn-bg': '#ffffff',
            '--clr-btn-bg-hover': '#cccccc',
            '--clr-btn-border': '#ffffff',
            '--clr-card-bg': '#1e1e1e',
            '--clr-card-shadow': 'rgba(255,255,255,0.08)',
            '--clr-hero-text': '#ffffff',
            '--clr-hero-sub': '#aaaaaa',
            '--clr-hero-desc': '#888888',
            '--clr-section-title': '#ffffff',
            '--clr-section-sub': '#aaaaaa',
            '--clr-social-bg': '#333333',
            '--clr-accent': '#ffa31a',
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
            '--clr-card-shadow': 'rgba(37,99,235,0.25)',
            '--clr-hero-text': '#0f172a',
            '--clr-hero-sub': '#3b82f6',
            '--clr-hero-desc': '#475569',
            '--clr-section-title': '#0f172a',
            '--clr-section-sub': '#475569',
            '--clr-social-bg': '#bfdbfe',
            '--clr-accent': '#2563eb',
        },
        dark: {
            '--clr-body': '#0a1628',
            '--clr-header': '#0f1e3a',
            '--clr-primary': '#e0eaff',
            '--clr-secondary': '#7aa2d4',
            '--clr-text-color': '#e0eaff',
            '--clr-btn-bg': '#60a5fa',
            '--clr-btn-bg-hover': '#93c5fd',
            '--clr-btn-border': '#60a5fa',
            '--clr-card-bg': '#111f3a',
            '--clr-card-shadow': 'rgba(96,165,250,0.2)',
            '--clr-hero-text': '#e0eaff',
            '--clr-hero-sub': '#93c5fd',
            '--clr-hero-desc': '#7aa2d4',
            '--clr-section-title': '#e0eaff',
            '--clr-section-sub': '#7aa2d4',
            '--clr-social-bg': '#1e3a5f',
            '--clr-accent': '#60a5fa',
        }
    },
    forest: {
        name: 'Forest Green',
        fixed: false,
        light: {
            '--clr-body': '#e8f5e9',
            '--clr-header': '#ffffff',
            '--clr-primary': '#14532d',
            '--clr-secondary': '#166534',
            '--clr-text-color': '#14532d',
            '--clr-btn-bg': '#16a34a',
            '--clr-btn-bg-hover': '#15803d',
            '--clr-btn-border': '#16a34a',
            '--clr-card-bg': '#ffffff',
            '--clr-card-shadow': 'rgba(22,163,74,0.25)',
            '--clr-hero-text': '#052e16',
            '--clr-hero-sub': '#22c55e',
            '--clr-hero-desc': '#4b7c5e',
            '--clr-section-title': '#052e16',
            '--clr-section-sub': '#4b7c5e',
            '--clr-social-bg': '#bbf7d0',
            '--clr-accent': '#16a34a',
        },
        dark: {
            '--clr-body': '#052e16',
            '--clr-header': '#071f10',
            '--clr-primary': '#dcfce7',
            '--clr-secondary': '#86efac',
            '--clr-text-color': '#dcfce7',
            '--clr-btn-bg': '#4ade80',
            '--clr-btn-bg-hover': '#86efac',
            '--clr-btn-border': '#4ade80',
            '--clr-card-bg': '#0a3d1a',
            '--clr-card-shadow': 'rgba(74,222,128,0.2)',
            '--clr-hero-text': '#dcfce7',
            '--clr-hero-sub': '#4ade80',
            '--clr-hero-desc': '#86efac',
            '--clr-section-title': '#dcfce7',
            '--clr-section-sub': '#86efac',
            '--clr-social-bg': '#14532d',
            '--clr-accent': '#4ade80',
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
            '--clr-card-shadow': 'rgba(147,51,234,0.25)',
            '--clr-hero-text': '#3b0764',
            '--clr-hero-sub': '#c026d3',
            '--clr-hero-desc': '#6b4f7e',
            '--clr-section-title': '#3b0764',
            '--clr-section-sub': '#6b4f7e',
            '--clr-social-bg': '#e9d5ff',
            '--clr-accent': '#9333ea',
        },
        dark: {
            '--clr-body': '#1a0533',
            '--clr-header': '#200840',
            '--clr-primary': '#f3e8ff',
            '--clr-secondary': '#c084fc',
            '--clr-text-color': '#f3e8ff',
            '--clr-btn-bg': '#a855f7',
            '--clr-btn-bg-hover': '#c084fc',
            '--clr-btn-border': '#a855f7',
            '--clr-card-bg': '#2a0d4a',
            '--clr-card-shadow': 'rgba(168,85,247,0.2)',
            '--clr-hero-text': '#f3e8ff',
            '--clr-hero-sub': '#a855f7',
            '--clr-hero-desc': '#c084fc',
            '--clr-section-title': '#f3e8ff',
            '--clr-section-sub': '#c084fc',
            '--clr-social-bg': '#3b1060',
            '--clr-accent': '#a855f7',
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
            '--clr-card-shadow': 'rgba(234,88,12,0.25)',
            '--clr-hero-text': '#431407',
            '--clr-hero-sub': '#f97316',
            '--clr-hero-desc': '#78412d',
            '--clr-section-title': '#431407',
            '--clr-section-sub': '#78412d',
            '--clr-social-bg': '#fed7aa',
            '--clr-accent': '#ea580c',
        },
        dark: {
            '--clr-body': '#1c0a00',
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
            '--clr-social-bg': '#431407',
            '--clr-accent': '#f97316',
        }
    },
    macrozeus: {
        name: 'macroZEUS Theme',
        fixed: true,
        light: {
            '--clr-body': '#696969',
            '--clr-header': '#ffffff',
            '--clr-primary': '#000000',
            '--clr-secondary': '#555555',
            '--clr-text-color': '#ffffff',
            '--clr-btn-bg': '#ffa31a',
            '--clr-btn-bg-hover': '#000000',
            '--clr-btn-border': '#000000',
            '--clr-card-bg': '#ffffff',
            '--clr-card-shadow': 'rgba(255,163,26,1)',
            '--clr-hero-text': '#ffffff',
            '--clr-hero-sub': '#b2beb5',
            '--clr-hero-desc': '#cccccc',
            '--clr-section-title': '#ffffff',
            '--clr-section-sub': '#cccccc',
            '--clr-social-bg': '#555555',
            '--clr-accent': '#ffa31a',
        }
    }
};

const DEFAULT_THEME = 'monochrome';
const DEFAULT_MODE = 'light';

function applyTheme(themeKey, mode) {
    const theme = THEMES[themeKey];
    if (!theme) return;
    const vars = theme.fixed ? theme.light : (theme[mode] || theme.light);
    const root = document.documentElement;
    Object.entries(vars).forEach(([k, v]) => root.style.setProperty(k, v));
    
    // btn text color fix for light themes
    const btnBg = vars['--clr-btn-bg'];
    const isLight = ['#ffffff','#f5f5f5','#e8f0fe','#e8f5e9','#f5f0ff','#fff0e8'].includes(btnBg);
    root.style.setProperty('--clr-btn-text', isLight ? '#111' : '#fff');

    localStorage.setItem('macroTheme', themeKey);
    if (!theme.fixed) localStorage.setItem('macroMode', mode);
    
    // update UI
    updateThemeUI(themeKey, mode);
    
    // hero image border
    const heroImg = document.querySelector('.hero-image');
    if (heroImg) heroImg.style.borderColor = vars['--clr-accent'];
    
    // footer link
    const footerLink = document.querySelector('footer a');
    if (footerLink) footerLink.style.color = vars['--clr-accent'];
}

function updateThemeUI(themeKey, mode) {
    // update active states
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

    // Mode toggle
    const modeItem = document.createElement('li');
    modeItem.innerHTML = `
        <div id="modeToggle" style="display:flex;gap:6px;padding:6px 0;margin-bottom:4px">
            <button class="mode-btn mode-light" data-mode="light" title="Açık Mod">
                <i class='bx bx-sun'></i> Açık
            </button>
            <button class="mode-btn mode-dark" data-mode="dark" title="Koyu Mod">
                <i class='bx bx-moon'></i> Koyu
            </button>
        </div>
    `;
    menuList.appendChild(modeItem);

    // Divider label
    const label = document.createElement('li');
    label.innerHTML = '<span class="theme-label">Temalar</span>';
    menuList.appendChild(label);

    // Theme options
    const currentTheme = getCurrentTheme();
    const currentMode = getCurrentMode();

    Object.entries(THEMES).forEach(([key, theme]) => {
        const li = document.createElement('li');
        const vars = theme.fixed ? theme.light : (theme.light || theme.light);
        const accent = vars['--clr-accent'];
        li.innerHTML = `
            <div class="theme-option ${currentTheme === key ? 'active' : ''}" data-theme="${key}">
                <span class="theme-dot" style="background:${accent}"></span>
                <span class="theme-opt-name">${theme.name}</span>
                ${theme.fixed ? '<span class="theme-badge">⚡</span>' : ''}
            </div>
        `;
        menuList.appendChild(li);
    });

    // Events: mode buttons
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const mode = btn.dataset.mode;
            const theme = getCurrentTheme();
            applyTheme(theme, mode);
        });
    });

    // Events: theme options
    document.querySelectorAll('.theme-option').forEach(el => {
        el.addEventListener('click', (e) => {
            e.stopPropagation();
            const key = el.dataset.theme;
            const theme = THEMES[key];
            const mode = theme.fixed ? 'light' : getCurrentMode();
            applyTheme(key, mode);
        });
    });

    // Init UI state
    updateThemeUI(currentTheme, currentMode);
}

// ========== INIT THEME ON LOAD ==========
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

// Close menu on outside click
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