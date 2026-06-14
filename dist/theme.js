// ========== macroCODE PROJE TEMA SİSTEMİ ==========
// Bu dosyayı tüm proje sayfalarında script.js'den ÖNCE ekle:
// <script src="../../dist/theme.js"></script>

const PROJECT_THEMES = {
    macrozeus: {
        // Orijinal macroZEUS renkleri
        '--clr-body':           'rgb(178, 190, 181)',
        '--clr-secondary':      'rgb(178, 190, 181)',
        '--clr-container':      'rgb(85, 85, 85)',
        '--card-bg-color':      'rgb(85, 85, 85)',
        '--clr-btn-bg':         'rgb(255, 163, 26)',
        '--btn-bg-color':       'rgb(255, 163, 26)',
        '--clr-btn-hover':      '#000000',
        '--btn-hover-bg-color': '#000000',
        '--clr-text':           '#ffffff',
        '--clr-primary':        '#000000',
        '--clr-btn-number':     '#696969',
        '--clr-btn-operator':   '#888888',
        '--clr-btn-equals':     'rgb(255, 163, 26)',
        '--clr-btn-clear':      '#c0392b',
        '--shadow-color':       'rgba(255, 163, 26, 0.8)',
        '--input-bg':           '#444444',
        '--input-border':       '#444444',
    },
    monochrome_light: {
        '--clr-body':           '#f5f5f5',
        '--clr-secondary':      '#f5f5f5',
        '--clr-container':      '#ffffff',
        '--card-bg-color':      '#ffffff',
        '--clr-btn-bg':         '#111111',
        '--btn-bg-color':       '#111111',
        '--clr-btn-hover':      '#333333',
        '--btn-hover-bg-color': '#333333',
        '--clr-text':           '#111111',
        '--clr-primary':        '#111111',
        '--clr-btn-number':     '#e0e0e0',
        '--clr-btn-operator':   '#cccccc',
        '--clr-btn-equals':     '#111111',
        '--clr-btn-clear':      '#e53935',
        '--shadow-color':       'rgba(0,0,0,0.15)',
        '--input-bg':           '#eeeeee',
        '--input-border':       '#dddddd',
    },
    monochrome_dark: {
        '--clr-body':           '#111111',
        '--clr-secondary':      '#111111',
        '--clr-container':      '#222222',
        '--card-bg-color':      '#222222',
        '--clr-btn-bg':         '#eeeeee',
        '--btn-bg-color':       '#eeeeee',
        '--clr-btn-hover':      '#cccccc',
        '--btn-hover-bg-color': '#cccccc',
        '--clr-text':           '#eeeeee',
        '--clr-primary':        '#eeeeee',
        '--clr-btn-number':     '#2a2a2a',
        '--clr-btn-operator':   '#333333',
        '--clr-btn-equals':     '#eeeeee',
        '--clr-btn-clear':      '#c62828',
        '--shadow-color':       'rgba(255,255,255,0.08)',
        '--input-bg':           '#333333',
        '--input-border':       '#444444',
    },
    ocean_light: {
        '--clr-body':           '#e8f0fe',
        '--clr-secondary':      '#e8f0fe',
        '--clr-container':      '#ffffff',
        '--card-bg-color':      '#ffffff',
        '--clr-btn-bg':         '#2563eb',
        '--btn-bg-color':       '#2563eb',
        '--clr-btn-hover':      '#1d4ed8',
        '--btn-hover-bg-color': '#1d4ed8',
        '--clr-text':           '#0f172a',
        '--clr-primary':        '#1a3a7a',
        '--clr-btn-number':     '#bfdbfe',
        '--clr-btn-operator':   '#93c5fd',
        '--clr-btn-equals':     '#2563eb',
        '--clr-btn-clear':      '#dc2626',
        '--shadow-color':       'rgba(37,99,235,0.3)',
        '--input-bg':           '#eff6ff',
        '--input-border':       '#bfdbfe',
    },
    ocean_dark: {
        '--clr-body':           '#0a1628',
        '--clr-secondary':      '#0a1628',
        '--clr-container':      '#111f3a',
        '--card-bg-color':      '#111f3a',
        '--clr-btn-bg':         '#3b82f6',
        '--btn-bg-color':       '#3b82f6',
        '--clr-btn-hover':      '#2563eb',
        '--btn-hover-bg-color': '#2563eb',
        '--clr-text':           '#e0eaff',
        '--clr-primary':        '#e0eaff',
        '--clr-btn-number':     '#1e3a5f',
        '--clr-btn-operator':   '#1d4ed8',
        '--clr-btn-equals':     '#3b82f6',
        '--clr-btn-clear':      '#dc2626',
        '--shadow-color':       'rgba(59,130,246,0.3)',
        '--input-bg':           '#1e3a5f',
        '--input-border':       '#2563eb',
    },
    forest_light: {
        '--clr-body':           '#eaf5eb',
        '--clr-secondary':      '#eaf5eb',
        '--clr-container':      '#ffffff',
        '--card-bg-color':      '#ffffff',
        '--clr-btn-bg':         '#16a34a',
        '--btn-bg-color':       '#16a34a',
        '--clr-btn-hover':      '#15803d',
        '--btn-hover-bg-color': '#15803d',
        '--clr-text':           '#052e16',
        '--clr-primary':        '#14532d',
        '--clr-btn-number':     '#bbf7d0',
        '--clr-btn-operator':   '#86efac',
        '--clr-btn-equals':     '#16a34a',
        '--clr-btn-clear':      '#dc2626',
        '--shadow-color':       'rgba(22,163,74,0.3)',
        '--input-bg':           '#f0fdf4',
        '--input-border':       '#bbf7d0',
    },
    forest_dark: {
        '--clr-body':           '#041a0e',
        '--clr-secondary':      '#041a0e',
        '--clr-container':      '#0a3d1a',
        '--card-bg-color':      '#0a3d1a',
        '--clr-btn-bg':         '#22c55e',
        '--btn-bg-color':       '#22c55e',
        '--clr-btn-hover':      '#16a34a',
        '--btn-hover-bg-color': '#16a34a',
        '--clr-text':           '#dcfce7',
        '--clr-primary':        '#dcfce7',
        '--clr-btn-number':     '#14532d',
        '--clr-btn-operator':   '#166534',
        '--clr-btn-equals':     '#22c55e',
        '--clr-btn-clear':      '#dc2626',
        '--shadow-color':       'rgba(34,197,94,0.3)',
        '--input-bg':           '#14532d',
        '--input-border':       '#166534',
    },
    ember_light: {
        '--clr-body':           '#fff0e8',
        '--clr-secondary':      '#fff0e8',
        '--clr-container':      '#ffffff',
        '--card-bg-color':      '#ffffff',
        '--clr-btn-bg':         '#ea580c',
        '--btn-bg-color':       '#ea580c',
        '--clr-btn-hover':      '#c2410c',
        '--btn-hover-bg-color': '#c2410c',
        '--clr-text':           '#431407',
        '--clr-primary':        '#7c2d12',
        '--clr-btn-number':     '#fed7aa',
        '--clr-btn-operator':   '#fdba74',
        '--clr-btn-equals':     '#ea580c',
        '--clr-btn-clear':      '#dc2626',
        '--shadow-color':       'rgba(234,88,12,0.3)',
        '--input-bg':           '#fff7ed',
        '--input-border':       '#fed7aa',
    },
    ember_dark: {
        '--clr-body':           '#180800',
        '--clr-secondary':      '#180800',
        '--clr-container':      '#2c1200',
        '--card-bg-color':      '#2c1200',
        '--clr-btn-bg':         '#f97316',
        '--btn-bg-color':       '#f97316',
        '--clr-btn-hover':      '#ea580c',
        '--btn-hover-bg-color': '#ea580c',
        '--clr-text':           '#ffedd5',
        '--clr-primary':        '#ffedd5',
        '--clr-btn-number':     '#3d1400',
        '--clr-btn-operator':   '#7c2d12',
        '--clr-btn-equals':     '#f97316',
        '--clr-btn-clear':      '#dc2626',
        '--shadow-color':       'rgba(249,115,22,0.3)',
        '--input-bg':           '#3d1400',
        '--input-border':       '#7c2d12',
    },
    slate_light: {
        '--clr-body':           '#f1f5f9',
        '--clr-secondary':      '#f1f5f9',
        '--clr-container':      '#ffffff',
        '--card-bg-color':      '#ffffff',
        '--clr-btn-bg':         '#475569',
        '--btn-bg-color':       '#475569',
        '--clr-btn-hover':      '#334155',
        '--btn-hover-bg-color': '#334155',
        '--clr-text':           '#0f172a',
        '--clr-primary':        '#1e293b',
        '--clr-btn-number':     '#cbd5e1',
        '--clr-btn-operator':   '#94a3b8',
        '--clr-btn-equals':     '#475569',
        '--clr-btn-clear':      '#dc2626',
        '--shadow-color':       'rgba(71,85,105,0.2)',
        '--input-bg':           '#f8fafc',
        '--input-border':       '#cbd5e1',
    },
    slate_dark: {
        '--clr-body':           '#0f172a',
        '--clr-secondary':      '#0f172a',
        '--clr-container':      '#1e293b',
        '--card-bg-color':      '#1e293b',
        '--clr-btn-bg':         '#64748b',
        '--btn-bg-color':       '#64748b',
        '--clr-btn-hover':      '#475569',
        '--btn-hover-bg-color': '#475569',
        '--clr-text':           '#e2e8f0',
        '--clr-primary':        '#e2e8f0',
        '--clr-btn-number':     '#334155',
        '--clr-btn-operator':   '#475569',
        '--clr-btn-equals':     '#64748b',
        '--clr-btn-clear':      '#dc2626',
        '--shadow-color':       'rgba(100,116,139,0.2)',
        '--input-bg':           '#334155',
        '--input-border':       '#475569',
    },
    teal_light: {
        '--clr-body':           '#e6fafa',
        '--clr-secondary':      '#e6fafa',
        '--clr-container':      '#ffffff',
        '--card-bg-color':      '#ffffff',
        '--clr-btn-bg':         '#0d9488',
        '--btn-bg-color':       '#0d9488',
        '--clr-btn-hover':      '#0f766e',
        '--btn-hover-bg-color': '#0f766e',
        '--clr-text':           '#042f2e',
        '--clr-primary':        '#134e4a',
        '--clr-btn-number':     '#99f6e4',
        '--clr-btn-operator':   '#5eead4',
        '--clr-btn-equals':     '#0d9488',
        '--clr-btn-clear':      '#dc2626',
        '--shadow-color':       'rgba(13,148,136,0.3)',
        '--input-bg':           '#f0fdfa',
        '--input-border':       '#99f6e4',
    },
    teal_dark: {
        '--clr-body':           '#021a18',
        '--clr-secondary':      '#021a18',
        '--clr-container':      '#063d3a',
        '--card-bg-color':      '#063d3a',
        '--clr-btn-bg':         '#14b8a6',
        '--btn-bg-color':       '#14b8a6',
        '--clr-btn-hover':      '#0d9488',
        '--btn-hover-bg-color': '#0d9488',
        '--clr-text':           '#ccfbf1',
        '--clr-primary':        '#ccfbf1',
        '--clr-btn-number':     '#0d4a45',
        '--clr-btn-operator':   '#0f766e',
        '--clr-btn-equals':     '#14b8a6',
        '--clr-btn-clear':      '#dc2626',
        '--shadow-color':       'rgba(20,184,166,0.3)',
        '--input-bg':           '#0d4a45',
        '--input-border':       '#0f766e',
    },
    amber_light: {
        '--clr-body':           '#fffbeb',
        '--clr-secondary':      '#fffbeb',
        '--clr-container':      '#ffffff',
        '--card-bg-color':      '#ffffff',
        '--clr-btn-bg':         '#d97706',
        '--btn-bg-color':       '#d97706',
        '--clr-btn-hover':      '#b45309',
        '--btn-hover-bg-color': '#b45309',
        '--clr-text':           '#451a03',
        '--clr-primary':        '#78350f',
        '--clr-btn-number':     '#fde68a',
        '--clr-btn-operator':   '#fcd34d',
        '--clr-btn-equals':     '#d97706',
        '--clr-btn-clear':      '#dc2626',
        '--shadow-color':       'rgba(217,119,6,0.3)',
        '--input-bg':           '#fffbeb',
        '--input-border':       '#fde68a',
    },
    amber_dark: {
        '--clr-body':           '#1c0f00',
        '--clr-secondary':      '#1c0f00',
        '--clr-container':      '#2d1a00',
        '--card-bg-color':      '#2d1a00',
        '--clr-btn-bg':         '#f59e0b',
        '--btn-bg-color':       '#f59e0b',
        '--clr-btn-hover':      '#d97706',
        '--btn-hover-bg-color': '#d97706',
        '--clr-text':           '#fef3c7',
        '--clr-primary':        '#fef3c7',
        '--clr-btn-number':     '#3d2200',
        '--clr-btn-operator':   '#78350f',
        '--clr-btn-equals':     '#f59e0b',
        '--clr-btn-clear':      '#dc2626',
        '--shadow-color':       'rgba(245,158,11,0.3)',
        '--input-bg':           '#3d2200',
        '--input-border':       '#78350f',
    },
    indigo_light: {
        '--clr-body':           '#eef2ff',
        '--clr-secondary':      '#eef2ff',
        '--clr-container':      '#ffffff',
        '--card-bg-color':      '#ffffff',
        '--clr-btn-bg':         '#4f46e5',
        '--btn-bg-color':       '#4f46e5',
        '--clr-btn-hover':      '#4338ca',
        '--btn-hover-bg-color': '#4338ca',
        '--clr-text':           '#1e1b4b',
        '--clr-primary':        '#312e81',
        '--clr-btn-number':     '#c7d2fe',
        '--clr-btn-operator':   '#a5b4fc',
        '--clr-btn-equals':     '#4f46e5',
        '--clr-btn-clear':      '#dc2626',
        '--shadow-color':       'rgba(79,70,229,0.3)',
        '--input-bg':           '#eef2ff',
        '--input-border':       '#c7d2fe',
    },
    indigo_dark: {
        '--clr-body':           '#0c0a2e',
        '--clr-secondary':      '#0c0a2e',
        '--clr-container':      '#1a1760',
        '--card-bg-color':      '#1a1760',
        '--clr-btn-bg':         '#6366f1',
        '--btn-bg-color':       '#6366f1',
        '--clr-btn-hover':      '#4f46e5',
        '--btn-hover-bg-color': '#4f46e5',
        '--clr-text':           '#e0e7ff',
        '--clr-primary':        '#e0e7ff',
        '--clr-btn-number':     '#1e1b70',
        '--clr-btn-operator':   '#312e81',
        '--clr-btn-equals':     '#6366f1',
        '--clr-btn-clear':      '#dc2626',
        '--shadow-color':       'rgba(99,102,241,0.3)',
        '--input-bg':           '#1e1b70',
        '--input-border':       '#4f46e5',
    },
    midnight_light: {
        '--clr-body':           '#f0f4f8',
        '--clr-secondary':      '#f0f4f8',
        '--clr-container':      '#ffffff',
        '--card-bg-color':      '#ffffff',
        '--clr-btn-bg':         '#2d3748',
        '--btn-bg-color':       '#2d3748',
        '--clr-btn-hover':      '#1a202c',
        '--btn-hover-bg-color': '#1a202c',
        '--clr-text':           '#1a202c',
        '--clr-primary':        '#1a202c',
        '--clr-btn-number':     '#e2e8f0',
        '--clr-btn-operator':   '#cbd5e0',
        '--clr-btn-equals':     '#2d3748',
        '--clr-btn-clear':      '#dc2626',
        '--shadow-color':       'rgba(26,32,44,0.2)',
        '--input-bg':           '#f7fafc',
        '--input-border':       '#e2e8f0',
    },
    midnight_dark: {
        '--clr-body':           '#0a0e1a',
        '--clr-secondary':      '#0a0e1a',
        '--clr-container':      '#111827',
        '--card-bg-color':      '#111827',
        '--clr-btn-bg':         '#374151',
        '--btn-bg-color':       '#374151',
        '--clr-btn-hover':      '#4b5563',
        '--btn-hover-bg-color': '#4b5563',
        '--clr-text':           '#f9fafb',
        '--clr-primary':        '#f9fafb',
        '--clr-btn-number':     '#1f2937',
        '--clr-btn-operator':   '#374151',
        '--clr-btn-equals':     '#4b5563',
        '--clr-btn-clear':      '#dc2626',
        '--shadow-color':       'rgba(249,250,251,0.08)',
        '--input-bg':           '#1f2937',
        '--input-border':       '#374151',
    },
};

// ========== TEMA UYGULA ==========
function applyProjectTheme(themeKey, mode) {
    // Tema + mod kombinasyonunu belirle
    let varsKey;
    if (themeKey === 'macrozeus') {
        varsKey = 'macrozeus';
    } else {
        varsKey = themeKey + '_' + (mode || 'light');
    }

    const vars = PROJECT_THEMES[varsKey] || PROJECT_THEMES['macrozeus'];
    const root = document.documentElement;
    Object.entries(vars).forEach(([k, v]) => root.style.setProperty(k, v));

    // Gölge rengini container'a uygula (box-shadow inline override)
    const shadowColor = vars['--shadow-color'];
    if (shadowColor) {
        document.querySelectorAll('.container, .wrapper').forEach(el => {
            el.style.boxShadow = `0 0 30px ${shadowColor}`;
        });
    }

    // Input arka plan rengini güncelle
    const inputBg = vars['--input-bg'];
    const inputBorder = vars['--input-border'];
    if (inputBg) {
        document.querySelectorAll('input:not([type="color"]):not([type="range"]):not([type="checkbox"]), select').forEach(el => {
            el.style.backgroundColor = inputBg;
            el.style.borderColor = inputBorder;
        });
    }

    // Favicon güncelle
    applyProjectFavicon(themeKey);
}

function applyProjectFavicon(themeKey) {
    const favicon = document.querySelector('link[rel="icon"]');
    if (!favicon) return;
    const macroSrc = favicon.getAttribute('data-macrozeus');
    const otherSrc = favicon.getAttribute('data-other');
    if (macroSrc && otherSrc) {
        favicon.href = themeKey === 'macrozeus' ? macroSrc : otherSrc;
    }
}

// ========== BAŞLAT ==========
(function init() {
    const theme = localStorage.getItem('macroTheme') || 'macrozeus';
    const mode  = localStorage.getItem('macroMode')  || 'light';

    // DOM hazır olunca uygula
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            applyProjectTheme(theme, mode);
        });
    } else {
        applyProjectTheme(theme, mode);
    }

    // Başka sekmede tema değişince burada da güncelle
    window.addEventListener('storage', function(e) {
        if (e.key === 'macroTheme' || e.key === 'macroMode') {
            const t = localStorage.getItem('macroTheme') || 'macrozeus';
            const m = localStorage.getItem('macroMode')  || 'light';
            applyProjectTheme(t, m);
        }
    });
})();