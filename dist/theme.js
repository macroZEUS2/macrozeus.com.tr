// ========== macroCODE PROJE TEMA SİSTEMİ (v2) ==========
// Bu dosyayı tüm proje sayfalarında ekle:
// <script src="../../dist/theme.js"></script>
//
// Bu dosya artık hem renk değişkenlerini hem de header/tema menüsü
// mantığını içerir, böylece proje sayfaları da ana sayfadaki
// macroCODE / GitHub / tema menüsü ile aynı header'a sahip olur.

// THEMES nesnesi script.js'den buraya kopyalandı (ana sayfa script.js
// hâlâ kendi kopyasını kullanır - homepage'e özel hero/proje listesi var)
const PROJECT_PAGE_THEMES = {
    macrozeus: {
        name: 'macroZEUS',
        fixed: true,
        light: {
            '--clr-body': '#696969',
            '--clr-header': '#ffffff',
            '--clr-primary': '#000000',
            '--clr-secondary': '#555555',
            '--clr-text-color': '#ffffff',
            '--clr-btn-bg': 'rgb(255, 163, 26)',
            '--clr-btn-bg-hover': '#000000',
            '--clr-btn-border': '#000000',
            '--clr-btn-text': '#ffffff',
            '--clr-card-bg': '#ffffff',
            '--clr-card-shadow': 'rgba(255,163,26,0.5)',
            '--clr-accent': 'rgb(255, 163, 26)',
            '--clr-github-bg': 'rgb(255, 163, 26)',
            '--clr-github-text': '#ffffff',
            '--clr-github-hover': '#000000',
            '--clr-github-border': 'transparent',
            '--clr-menu-bg': '#000000',
            '--clr-menu-border': 'rgba(255,163,26,0.25)',
            '--clr-favicon-frame': 'rgb(255, 163, 26)',
        }
    },
    monochrome: {
        name: 'Monochrome', fixed: false,
        light: {
            '--clr-body': '#f5f5f5','--clr-header': '#ffffff','--clr-primary': '#111111','--clr-secondary': '#444444',
            '--clr-text-color': '#111111','--clr-btn-bg': '#111111','--clr-btn-bg-hover': '#333333','--clr-btn-border': '#111111',
            '--clr-btn-text': '#ffffff','--clr-card-bg': '#ffffff','--clr-card-shadow': 'rgba(0,0,0,0.10)','--clr-accent': '#111111',
            '--clr-github-bg': '#111111','--clr-github-text': '#ffffff','--clr-github-hover': '#333333','--clr-github-border': 'transparent',
            '--clr-menu-bg': '#ffffff','--clr-menu-border': 'rgba(0,0,0,0.10)','--clr-favicon-frame': '#111111',
        },
        dark: {
            '--clr-body': '#111111','--clr-header': '#1a1a1a','--clr-primary': '#eeeeee','--clr-secondary': '#aaaaaa',
            '--clr-text-color': '#eeeeee','--clr-btn-bg': '#eeeeee','--clr-btn-bg-hover': '#cccccc','--clr-btn-border': '#eeeeee',
            '--clr-btn-text': '#111111','--clr-card-bg': '#222222','--clr-card-shadow': 'rgba(255,255,255,0.05)','--clr-accent': '#eeeeee',
            '--clr-github-bg': '#2a2a2a','--clr-github-text': '#eeeeee','--clr-github-hover': '#444444','--clr-github-border': 'rgba(255,255,255,0.15)',
            '--clr-menu-bg': '#1a1a1a','--clr-menu-border': 'rgba(255,255,255,0.08)','--clr-favicon-frame': '#eeeeee',
        }
    },
    ocean: {
        name: 'Ocean Blue', fixed: false,
        light: {
            '--clr-body': '#e8f0fe','--clr-header': '#ffffff','--clr-primary': '#1a3a7a','--clr-secondary': '#4a6fa5',
            '--clr-text-color': '#1a3a7a','--clr-btn-bg': '#2563eb','--clr-btn-bg-hover': '#1d4ed8','--clr-btn-border': '#2563eb',
            '--clr-btn-text': '#ffffff','--clr-card-bg': '#ffffff','--clr-card-shadow': 'rgba(37,99,235,0.15)','--clr-accent': '#2563eb',
            '--clr-github-bg': '#2563eb','--clr-github-text': '#ffffff','--clr-github-hover': '#1d4ed8','--clr-github-border': 'transparent',
            '--clr-menu-bg': '#ffffff','--clr-menu-border': 'rgba(37,99,235,0.15)','--clr-favicon-frame': '#2563eb',
        },
        dark: {
            '--clr-body': '#0a1628','--clr-header': '#0d1f3c','--clr-primary': '#e0eaff','--clr-secondary': '#93b4d8',
            '--clr-text-color': '#e0eaff','--clr-btn-bg': '#3b82f6','--clr-btn-bg-hover': '#60a5fa','--clr-btn-border': '#3b82f6',
            '--clr-btn-text': '#ffffff','--clr-card-bg': '#111f3a','--clr-card-shadow': 'rgba(59,130,246,0.15)','--clr-accent': '#3b82f6',
            '--clr-github-bg': '#3b82f6','--clr-github-text': '#ffffff','--clr-github-hover': '#2563eb','--clr-github-border': 'rgba(255,255,255,0.15)',
            '--clr-menu-bg': '#0d1f3c','--clr-menu-border': 'rgba(59,130,246,0.2)','--clr-favicon-frame': '#3b82f6',
        }
    },
    forest: {
        name: 'Forest Green', fixed: false,
        light: {
            '--clr-body': '#eaf5eb','--clr-header': '#ffffff','--clr-primary': '#14532d','--clr-secondary': '#166534',
            '--clr-text-color': '#14532d','--clr-btn-bg': '#16a34a','--clr-btn-bg-hover': '#15803d','--clr-btn-border': '#16a34a',
            '--clr-btn-text': '#ffffff','--clr-card-bg': '#ffffff','--clr-card-shadow': 'rgba(22,163,74,0.15)','--clr-accent': '#16a34a',
            '--clr-github-bg': '#16a34a','--clr-github-text': '#ffffff','--clr-github-hover': '#15803d','--clr-github-border': 'transparent',
            '--clr-menu-bg': '#ffffff','--clr-menu-border': 'rgba(22,163,74,0.15)','--clr-favicon-frame': '#16a34a',
        },
        dark: {
            '--clr-body': '#041a0e','--clr-header': '#071f10','--clr-primary': '#dcfce7','--clr-secondary': '#86efac',
            '--clr-text-color': '#dcfce7','--clr-btn-bg': '#22c55e','--clr-btn-bg-hover': '#4ade80','--clr-btn-border': '#22c55e',
            '--clr-btn-text': '#052e16','--clr-card-bg': '#0a3d1a','--clr-card-shadow': 'rgba(34,197,94,0.15)','--clr-accent': '#22c55e',
            '--clr-github-bg': '#22c55e','--clr-github-text': '#052e16','--clr-github-hover': '#4ade80','--clr-github-border': 'rgba(255,255,255,0.15)',
            '--clr-menu-bg': '#071f10','--clr-menu-border': 'rgba(34,197,94,0.2)','--clr-favicon-frame': '#22c55e',
        }
    },
    ember: {
        name: 'Ember Red', fixed: false,
        light: {
            '--clr-body': '#fff0e8','--clr-header': '#ffffff','--clr-primary': '#7c2d12','--clr-secondary': '#c2410c',
            '--clr-text-color': '#7c2d12','--clr-btn-bg': '#ea580c','--clr-btn-bg-hover': '#c2410c','--clr-btn-border': '#ea580c',
            '--clr-btn-text': '#ffffff','--clr-card-bg': '#ffffff','--clr-card-shadow': 'rgba(234,88,12,0.15)','--clr-accent': '#ea580c',
            '--clr-github-bg': '#ea580c','--clr-github-text': '#ffffff','--clr-github-hover': '#c2410c','--clr-github-border': 'transparent',
            '--clr-menu-bg': '#ffffff','--clr-menu-border': 'rgba(234,88,12,0.15)','--clr-favicon-frame': '#ea580c',
        },
        dark: {
            '--clr-body': '#180800','--clr-header': '#1f0d00','--clr-primary': '#ffedd5','--clr-secondary': '#fb923c',
            '--clr-text-color': '#ffedd5','--clr-btn-bg': '#f97316','--clr-btn-bg-hover': '#fb923c','--clr-btn-border': '#f97316',
            '--clr-btn-text': '#ffffff','--clr-card-bg': '#2c1200','--clr-card-shadow': 'rgba(249,115,22,0.15)','--clr-accent': '#f97316',
            '--clr-github-bg': '#f97316','--clr-github-text': '#ffffff','--clr-github-hover': '#c2410c','--clr-github-border': 'rgba(255,255,255,0.15)',
            '--clr-menu-bg': '#1f0d00','--clr-menu-border': 'rgba(249,115,22,0.2)','--clr-favicon-frame': '#f97316',
        }
    },
    slate: {
        name: 'Slate Gray', fixed: false,
        light: {
            '--clr-body': '#f1f5f9','--clr-header': '#ffffff','--clr-primary': '#1e293b','--clr-secondary': '#475569',
            '--clr-text-color': '#1e293b','--clr-btn-bg': '#475569','--clr-btn-bg-hover': '#334155','--clr-btn-border': '#475569',
            '--clr-btn-text': '#ffffff','--clr-card-bg': '#ffffff','--clr-card-shadow': 'rgba(71,85,105,0.12)','--clr-accent': '#64748b',
            '--clr-github-bg': '#475569','--clr-github-text': '#ffffff','--clr-github-hover': '#334155','--clr-github-border': 'transparent',
            '--clr-menu-bg': '#ffffff','--clr-menu-border': 'rgba(71,85,105,0.12)','--clr-favicon-frame': '#475569',
        },
        dark: {
            '--clr-body': '#0f172a','--clr-header': '#1e293b','--clr-primary': '#e2e8f0','--clr-secondary': '#94a3b8',
            '--clr-text-color': '#e2e8f0','--clr-btn-bg': '#64748b','--clr-btn-bg-hover': '#94a3b8','--clr-btn-border': '#64748b',
            '--clr-btn-text': '#ffffff','--clr-card-bg': '#1e293b','--clr-card-shadow': 'rgba(100,116,139,0.15)','--clr-accent': '#94a3b8',
            '--clr-github-bg': '#64748b','--clr-github-text': '#ffffff','--clr-github-hover': '#475569','--clr-github-border': 'rgba(255,255,255,0.15)',
            '--clr-menu-bg': '#1e293b','--clr-menu-border': 'rgba(100,116,139,0.2)','--clr-favicon-frame': '#64748b',
        }
    },
    teal: {
        name: 'Teal & Cyan', fixed: false,
        light: {
            '--clr-body': '#e6fafa','--clr-header': '#ffffff','--clr-primary': '#134e4a','--clr-secondary': '#0f766e',
            '--clr-text-color': '#134e4a','--clr-btn-bg': '#0d9488','--clr-btn-bg-hover': '#0f766e','--clr-btn-border': '#0d9488',
            '--clr-btn-text': '#ffffff','--clr-card-bg': '#ffffff','--clr-card-shadow': 'rgba(13,148,136,0.15)','--clr-accent': '#0d9488',
            '--clr-github-bg': '#0d9488','--clr-github-text': '#ffffff','--clr-github-hover': '#0f766e','--clr-github-border': 'transparent',
            '--clr-menu-bg': '#ffffff','--clr-menu-border': 'rgba(13,148,136,0.15)','--clr-favicon-frame': '#0d9488',
        },
        dark: {
            '--clr-body': '#021a18','--clr-header': '#042f2e','--clr-primary': '#ccfbf1','--clr-secondary': '#5eead4',
            '--clr-text-color': '#ccfbf1','--clr-btn-bg': '#14b8a6','--clr-btn-bg-hover': '#2dd4bf','--clr-btn-border': '#14b8a6',
            '--clr-btn-text': '#042f2e','--clr-card-bg': '#063d3a','--clr-card-shadow': 'rgba(20,184,166,0.15)','--clr-accent': '#14b8a6',
            '--clr-github-bg': '#14b8a6','--clr-github-text': '#042f2e','--clr-github-hover': '#0d9488','--clr-github-border': 'rgba(255,255,255,0.15)',
            '--clr-menu-bg': '#042f2e','--clr-menu-border': 'rgba(20,184,166,0.2)','--clr-favicon-frame': '#14b8a6',
        }
    },
    amber: {
        name: 'Amber Gold', fixed: false,
        light: {
            '--clr-body': '#fffbeb','--clr-header': '#ffffff','--clr-primary': '#78350f','--clr-secondary': '#b45309',
            '--clr-text-color': '#78350f','--clr-btn-bg': '#d97706','--clr-btn-bg-hover': '#b45309','--clr-btn-border': '#d97706',
            '--clr-btn-text': '#ffffff','--clr-card-bg': '#ffffff','--clr-card-shadow': 'rgba(217,119,6,0.15)','--clr-accent': '#d97706',
            '--clr-github-bg': '#d97706','--clr-github-text': '#ffffff','--clr-github-hover': '#b45309','--clr-github-border': 'transparent',
            '--clr-menu-bg': '#ffffff','--clr-menu-border': 'rgba(217,119,6,0.15)','--clr-favicon-frame': '#d97706',
        },
        dark: {
            '--clr-body': '#1c0f00','--clr-header': '#241400','--clr-primary': '#fef3c7','--clr-secondary': '#fcd34d',
            '--clr-text-color': '#fef3c7','--clr-btn-bg': '#f59e0b','--clr-btn-bg-hover': '#fbbf24','--clr-btn-border': '#f59e0b',
            '--clr-btn-text': '#1c0f00','--clr-card-bg': '#2d1a00','--clr-card-shadow': 'rgba(245,158,11,0.15)','--clr-accent': '#f59e0b',
            '--clr-github-bg': '#f59e0b','--clr-github-text': '#1c0f00','--clr-github-hover': '#d97706','--clr-github-border': 'rgba(255,255,255,0.15)',
            '--clr-menu-bg': '#241400','--clr-menu-border': 'rgba(245,158,11,0.2)','--clr-favicon-frame': '#f59e0b',
        }
    },
    indigo: {
        name: 'Deep Indigo', fixed: false,
        light: {
            '--clr-body': '#eef2ff','--clr-header': '#ffffff','--clr-primary': '#312e81','--clr-secondary': '#4338ca',
            '--clr-text-color': '#312e81','--clr-btn-bg': '#4f46e5','--clr-btn-bg-hover': '#4338ca','--clr-btn-border': '#4f46e5',
            '--clr-btn-text': '#ffffff','--clr-card-bg': '#ffffff','--clr-card-shadow': 'rgba(79,70,229,0.15)','--clr-accent': '#4f46e5',
            '--clr-github-bg': '#4f46e5','--clr-github-text': '#ffffff','--clr-github-hover': '#4338ca','--clr-github-border': 'transparent',
            '--clr-menu-bg': '#ffffff','--clr-menu-border': 'rgba(79,70,229,0.15)','--clr-favicon-frame': '#4f46e5',
        },
        dark: {
            '--clr-body': '#0c0a2e','--clr-header': '#13104a','--clr-primary': '#e0e7ff','--clr-secondary': '#a5b4fc',
            '--clr-text-color': '#e0e7ff','--clr-btn-bg': '#6366f1','--clr-btn-bg-hover': '#818cf8','--clr-btn-border': '#6366f1',
            '--clr-btn-text': '#ffffff','--clr-card-bg': '#1a1760','--clr-card-shadow': 'rgba(99,102,241,0.15)','--clr-accent': '#6366f1',
            '--clr-github-bg': '#6366f1','--clr-github-text': '#ffffff','--clr-github-hover': '#4f46e5','--clr-github-border': 'rgba(255,255,255,0.15)',
            '--clr-menu-bg': '#13104a','--clr-menu-border': 'rgba(99,102,241,0.2)','--clr-favicon-frame': '#6366f1',
        }
    },
    midnight: {
        name: 'Midnight', fixed: false,
        light: {
            '--clr-body': '#f0f4f8','--clr-header': '#ffffff','--clr-primary': '#1a202c','--clr-secondary': '#2d3748',
            '--clr-text-color': '#1a202c','--clr-btn-bg': '#2d3748','--clr-btn-bg-hover': '#1a202c','--clr-btn-border': '#2d3748',
            '--clr-btn-text': '#ffffff','--clr-card-bg': '#ffffff','--clr-card-shadow': 'rgba(26,32,44,0.10)','--clr-accent': '#4a5568',
            '--clr-github-bg': '#2d3748','--clr-github-text': '#ffffff','--clr-github-hover': '#1a202c','--clr-github-border': 'transparent',
            '--clr-menu-bg': '#ffffff','--clr-menu-border': 'rgba(26,32,44,0.10)','--clr-favicon-frame': '#2d3748',
        },
        dark: {
            '--clr-body': '#0a0e1a','--clr-header': '#111827','--clr-primary': '#f9fafb','--clr-secondary': '#d1d5db',
            '--clr-text-color': '#f9fafb','--clr-btn-bg': '#374151','--clr-btn-bg-hover': '#4b5563','--clr-btn-border': '#374151',
            '--clr-btn-text': '#f9fafb','--clr-card-bg': '#111827','--clr-card-shadow': 'rgba(249,250,251,0.05)','--clr-accent': '#6b7280',
            '--clr-github-bg': '#374151','--clr-github-text': '#f9fafb','--clr-github-hover': '#4b5563','--clr-github-border': 'rgba(255,255,255,0.15)',
            '--clr-menu-bg': '#111827','--clr-menu-border': 'rgba(249,250,251,0.08)','--clr-favicon-frame': '#374151',
        }
    },
};

// ========== PROJE SAYFASI RENK DEĞİŞKENLERİ (form elemanları, kart vb.) ==========
const PROJECT_THEMES = {
    macrozeus: {
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
        '--clr-attr-text':      '#000000',
        '--clr-attr-link':      '#000000',
        '--clr-favicon-frame':  'rgb(255, 163, 26)',
    },
    monochrome_light: {
        '--clr-body':'#f5f5f5','--clr-secondary':'#f5f5f5','--clr-container':'#ffffff','--card-bg-color':'#ffffff',
        '--clr-btn-bg':'#111111','--btn-bg-color':'#111111','--clr-btn-hover':'#333333','--btn-hover-bg-color':'#333333',
        '--clr-text':'#111111','--clr-primary':'#111111','--clr-btn-number':'#e0e0e0','--clr-btn-operator':'#cccccc',
        '--clr-btn-equals':'#111111','--clr-btn-clear':'#e53935','--shadow-color':'rgba(0,0,0,0.15)',
        '--input-bg':'#eeeeee','--input-border':'#dddddd','--clr-attr-text':'#111111','--clr-attr-link':'#111111','--clr-favicon-frame':'#111111',
    },
    monochrome_dark: {
        '--clr-body':'#111111','--clr-secondary':'#111111','--clr-container':'#222222','--card-bg-color':'#222222',
        '--clr-btn-bg':'#eeeeee','--btn-bg-color':'#eeeeee','--clr-btn-hover':'#cccccc','--btn-hover-bg-color':'#cccccc',
        '--clr-text':'#eeeeee','--clr-primary':'#eeeeee','--clr-btn-number':'#2a2a2a','--clr-btn-operator':'#333333',
        '--clr-btn-equals':'#eeeeee','--clr-btn-clear':'#c62828','--shadow-color':'rgba(255,255,255,0.08)',
        '--input-bg':'#333333','--input-border':'#444444','--clr-attr-text':'#eeeeee','--clr-attr-link':'#eeeeee','--clr-favicon-frame':'#eeeeee',
    },
    ocean_light: {
        '--clr-body':'#e8f0fe','--clr-secondary':'#e8f0fe','--clr-container':'#ffffff','--card-bg-color':'#ffffff',
        '--clr-btn-bg':'#2563eb','--btn-bg-color':'#2563eb','--clr-btn-hover':'#1d4ed8','--btn-hover-bg-color':'#1d4ed8',
        '--clr-text':'#0f172a','--clr-primary':'#1a3a7a','--clr-btn-number':'#bfdbfe','--clr-btn-operator':'#93c5fd',
        '--clr-btn-equals':'#2563eb','--clr-btn-clear':'#dc2626','--shadow-color':'rgba(37,99,235,0.3)',
        '--input-bg':'#eff6ff','--input-border':'#bfdbfe','--clr-attr-text':'#1a3a7a','--clr-attr-link':'#1a3a7a','--clr-favicon-frame':'#2563eb',
    },
    ocean_dark: {
        '--clr-body':'#0a1628','--clr-secondary':'#0a1628','--clr-container':'#111f3a','--card-bg-color':'#111f3a',
        '--clr-btn-bg':'#3b82f6','--btn-bg-color':'#3b82f6','--clr-btn-hover':'#2563eb','--btn-hover-bg-color':'#2563eb',
        '--clr-text':'#e0eaff','--clr-primary':'#e0eaff','--clr-btn-number':'#1e3a5f','--clr-btn-operator':'#1d4ed8',
        '--clr-btn-equals':'#3b82f6','--clr-btn-clear':'#dc2626','--shadow-color':'rgba(59,130,246,0.3)',
        '--input-bg':'#1e3a5f','--input-border':'#2563eb','--clr-attr-text':'#e0eaff','--clr-attr-link':'#e0eaff','--clr-favicon-frame':'#3b82f6',
    },
    forest_light: {
        '--clr-body':'#eaf5eb','--clr-secondary':'#eaf5eb','--clr-container':'#ffffff','--card-bg-color':'#ffffff',
        '--clr-btn-bg':'#16a34a','--btn-bg-color':'#16a34a','--clr-btn-hover':'#15803d','--btn-hover-bg-color':'#15803d',
        '--clr-text':'#052e16','--clr-primary':'#14532d','--clr-btn-number':'#bbf7d0','--clr-btn-operator':'#86efac',
        '--clr-btn-equals':'#16a34a','--clr-btn-clear':'#dc2626','--shadow-color':'rgba(22,163,74,0.3)',
        '--input-bg':'#f0fdf4','--input-border':'#bbf7d0','--clr-attr-text':'#14532d','--clr-attr-link':'#14532d','--clr-favicon-frame':'#16a34a',
    },
    forest_dark: {
        '--clr-body':'#041a0e','--clr-secondary':'#041a0e','--clr-container':'#0a3d1a','--card-bg-color':'#0a3d1a',
        '--clr-btn-bg':'#22c55e','--btn-bg-color':'#22c55e','--clr-btn-hover':'#16a34a','--btn-hover-bg-color':'#16a34a',
        '--clr-text':'#dcfce7','--clr-primary':'#dcfce7','--clr-btn-number':'#14532d','--clr-btn-operator':'#166534',
        '--clr-btn-equals':'#22c55e','--clr-btn-clear':'#dc2626','--shadow-color':'rgba(34,197,94,0.3)',
        '--input-bg':'#14532d','--input-border':'#166534','--clr-attr-text':'#dcfce7','--clr-attr-link':'#dcfce7','--clr-favicon-frame':'#22c55e',
    },
    ember_light: {
        '--clr-body':'#fff0e8','--clr-secondary':'#fff0e8','--clr-container':'#ffffff','--card-bg-color':'#ffffff',
        '--clr-btn-bg':'#ea580c','--btn-bg-color':'#ea580c','--clr-btn-hover':'#c2410c','--btn-hover-bg-color':'#c2410c',
        '--clr-text':'#431407','--clr-primary':'#7c2d12','--clr-btn-number':'#fed7aa','--clr-btn-operator':'#fdba74',
        '--clr-btn-equals':'#ea580c','--clr-btn-clear':'#dc2626','--shadow-color':'rgba(234,88,12,0.3)',
        '--input-bg':'#fff7ed','--input-border':'#fed7aa','--clr-attr-text':'#7c2d12','--clr-attr-link':'#7c2d12','--clr-favicon-frame':'#ea580c',
    },
    ember_dark: {
        '--clr-body':'#180800','--clr-secondary':'#180800','--clr-container':'#2c1200','--card-bg-color':'#2c1200',
        '--clr-btn-bg':'#f97316','--btn-bg-color':'#f97316','--clr-btn-hover':'#ea580c','--btn-hover-bg-color':'#ea580c',
        '--clr-text':'#ffedd5','--clr-primary':'#ffedd5','--clr-btn-number':'#3d1400','--clr-btn-operator':'#7c2d12',
        '--clr-btn-equals':'#f97316','--clr-btn-clear':'#dc2626','--shadow-color':'rgba(249,115,22,0.3)',
        '--input-bg':'#3d1400','--input-border':'#7c2d12','--clr-attr-text':'#ffedd5','--clr-attr-link':'#ffedd5','--clr-favicon-frame':'#f97316',
    },
    slate_light: {
        '--clr-body':'#f1f5f9','--clr-secondary':'#f1f5f9','--clr-container':'#ffffff','--card-bg-color':'#ffffff',
        '--clr-btn-bg':'#475569','--btn-bg-color':'#475569','--clr-btn-hover':'#334155','--btn-hover-bg-color':'#334155',
        '--clr-text':'#0f172a','--clr-primary':'#1e293b','--clr-btn-number':'#cbd5e1','--clr-btn-operator':'#94a3b8',
        '--clr-btn-equals':'#475569','--clr-btn-clear':'#dc2626','--shadow-color':'rgba(71,85,105,0.2)',
        '--input-bg':'#f8fafc','--input-border':'#cbd5e1','--clr-attr-text':'#1e293b','--clr-attr-link':'#1e293b','--clr-favicon-frame':'#475569',
    },
    slate_dark: {
        '--clr-body':'#0f172a','--clr-secondary':'#0f172a','--clr-container':'#1e293b','--card-bg-color':'#1e293b',
        '--clr-btn-bg':'#64748b','--btn-bg-color':'#64748b','--clr-btn-hover':'#475569','--btn-hover-bg-color':'#475569',
        '--clr-text':'#e2e8f0','--clr-primary':'#e2e8f0','--clr-btn-number':'#334155','--clr-btn-operator':'#475569',
        '--clr-btn-equals':'#64748b','--clr-btn-clear':'#dc2626','--shadow-color':'rgba(100,116,139,0.2)',
        '--input-bg':'#334155','--input-border':'#475569','--clr-attr-text':'#e2e8f0','--clr-attr-link':'#e2e8f0','--clr-favicon-frame':'#64748b',
    },
    teal_light: {
        '--clr-body':'#e6fafa','--clr-secondary':'#e6fafa','--clr-container':'#ffffff','--card-bg-color':'#ffffff',
        '--clr-btn-bg':'#0d9488','--btn-bg-color':'#0d9488','--clr-btn-hover':'#0f766e','--btn-hover-bg-color':'#0f766e',
        '--clr-text':'#042f2e','--clr-primary':'#134e4a','--clr-btn-number':'#99f6e4','--clr-btn-operator':'#5eead4',
        '--clr-btn-equals':'#0d9488','--clr-btn-clear':'#dc2626','--shadow-color':'rgba(13,148,136,0.3)',
        '--input-bg':'#f0fdfa','--input-border':'#99f6e4','--clr-attr-text':'#134e4a','--clr-attr-link':'#134e4a','--clr-favicon-frame':'#0d9488',
    },
    teal_dark: {
        '--clr-body':'#021a18','--clr-secondary':'#021a18','--clr-container':'#063d3a','--card-bg-color':'#063d3a',
        '--clr-btn-bg':'#14b8a6','--btn-bg-color':'#14b8a6','--clr-btn-hover':'#0d9488','--btn-hover-bg-color':'#0d9488',
        '--clr-text':'#ccfbf1','--clr-primary':'#ccfbf1','--clr-btn-number':'#0d4a45','--clr-btn-operator':'#0f766e',
        '--clr-btn-equals':'#14b8a6','--clr-btn-clear':'#dc2626','--shadow-color':'rgba(20,184,166,0.3)',
        '--input-bg':'#0d4a45','--input-border':'#0f766e','--clr-attr-text':'#ccfbf1','--clr-attr-link':'#ccfbf1','--clr-favicon-frame':'#14b8a6',
    },
    amber_light: {
        '--clr-body':'#fffbeb','--clr-secondary':'#fffbeb','--clr-container':'#ffffff','--card-bg-color':'#ffffff',
        '--clr-btn-bg':'#d97706','--btn-bg-color':'#d97706','--clr-btn-hover':'#b45309','--btn-hover-bg-color':'#b45309',
        '--clr-text':'#451a03','--clr-primary':'#78350f','--clr-btn-number':'#fde68a','--clr-btn-operator':'#fcd34d',
        '--clr-btn-equals':'#d97706','--clr-btn-clear':'#dc2626','--shadow-color':'rgba(217,119,6,0.3)',
        '--input-bg':'#fffbeb','--input-border':'#fde68a','--clr-attr-text':'#78350f','--clr-attr-link':'#78350f','--clr-favicon-frame':'#d97706',
    },
    amber_dark: {
        '--clr-body':'#1c0f00','--clr-secondary':'#1c0f00','--clr-container':'#2d1a00','--card-bg-color':'#2d1a00',
        '--clr-btn-bg':'#f59e0b','--btn-bg-color':'#f59e0b','--clr-btn-hover':'#d97706','--btn-hover-bg-color':'#d97706',
        '--clr-text':'#fef3c7','--clr-primary':'#fef3c7','--clr-btn-number':'#3d2200','--clr-btn-operator':'#78350f',
        '--clr-btn-equals':'#f59e0b','--clr-btn-clear':'#dc2626','--shadow-color':'rgba(245,158,11,0.3)',
        '--input-bg':'#3d2200','--input-border':'#78350f','--clr-attr-text':'#fef3c7','--clr-attr-link':'#fef3c7','--clr-favicon-frame':'#f59e0b',
    },
    indigo_light: {
        '--clr-body':'#eef2ff','--clr-secondary':'#eef2ff','--clr-container':'#ffffff','--card-bg-color':'#ffffff',
        '--clr-btn-bg':'#4f46e5','--btn-bg-color':'#4f46e5','--clr-btn-hover':'#4338ca','--btn-hover-bg-color':'#4338ca',
        '--clr-text':'#1e1b4b','--clr-primary':'#312e81','--clr-btn-number':'#c7d2fe','--clr-btn-operator':'#a5b4fc',
        '--clr-btn-equals':'#4f46e5','--clr-btn-clear':'#dc2626','--shadow-color':'rgba(79,70,229,0.3)',
        '--input-bg':'#eef2ff','--input-border':'#c7d2fe','--clr-attr-text':'#312e81','--clr-attr-link':'#312e81','--clr-favicon-frame':'#4f46e5',
    },
    indigo_dark: {
        '--clr-body':'#0c0a2e','--clr-secondary':'#0c0a2e','--clr-container':'#1a1760','--card-bg-color':'#1a1760',
        '--clr-btn-bg':'#6366f1','--btn-bg-color':'#6366f1','--clr-btn-hover':'#4f46e5','--btn-hover-bg-color':'#4f46e5',
        '--clr-text':'#e0e7ff','--clr-primary':'#e0e7ff','--clr-btn-number':'#1e1b70','--clr-btn-operator':'#312e81',
        '--clr-btn-equals':'#6366f1','--clr-btn-clear':'#dc2626','--shadow-color':'rgba(99,102,241,0.3)',
        '--input-bg':'#1e1b70','--input-border':'#4f46e5','--clr-attr-text':'#e0e7ff','--clr-attr-link':'#e0e7ff','--clr-favicon-frame':'#6366f1',
    },
    midnight_light: {
        '--clr-body':'#f0f4f8','--clr-secondary':'#f0f4f8','--clr-container':'#ffffff','--card-bg-color':'#ffffff',
        '--clr-btn-bg':'#2d3748','--btn-bg-color':'#2d3748','--clr-btn-hover':'#1a202c','--btn-hover-bg-color':'#1a202c',
        '--clr-text':'#1a202c','--clr-primary':'#1a202c','--clr-btn-number':'#e2e8f0','--clr-btn-operator':'#cbd5e0',
        '--clr-btn-equals':'#2d3748','--clr-btn-clear':'#dc2626','--shadow-color':'rgba(26,32,44,0.2)',
        '--input-bg':'#f7fafc','--input-border':'#e2e8f0','--clr-attr-text':'#1a202c','--clr-attr-link':'#1a202c','--clr-favicon-frame':'#2d3748',
    },
    midnight_dark: {
        '--clr-body':'#0a0e1a','--clr-secondary':'#0a0e1a','--clr-container':'#111827','--card-bg-color':'#111827',
        '--clr-btn-bg':'#374151','--btn-bg-color':'#374151','--clr-btn-hover':'#4b5563','--btn-hover-bg-color':'#4b5563',
        '--clr-text':'#f9fafb','--clr-primary':'#f9fafb','--clr-btn-number':'#1f2937','--clr-btn-operator':'#374151',
        '--clr-btn-equals':'#4b5563','--clr-btn-clear':'#dc2626','--shadow-color':'rgba(249,250,251,0.08)',
        '--input-bg':'#1f2937','--input-border':'#374151','--clr-attr-text':'#f9fafb','--clr-attr-link':'#f9fafb','--clr-favicon-frame':'#374151',
    },
};

const DEFAULT_THEME = 'macrozeus';
const DEFAULT_MODE = 'light';

function getCurrentTheme() {
    const saved = localStorage.getItem('macroTheme');
    if (saved && !PROJECT_PAGE_THEMES[saved]) {
        localStorage.removeItem('macroTheme');
        return DEFAULT_THEME;
    }
    return saved || DEFAULT_THEME;
}
function getCurrentMode() {
    return localStorage.getItem('macroMode') || DEFAULT_MODE;
}

function isLightColor(color) {
    if (!color) return true;
    color = color.trim();
    let r, g, b;
    if (color.startsWith('rgb')) {
        const m = color.match(/(\d+)/g);
        if (!m || m.length < 3) return true;
        r = parseInt(m[0]); g = parseInt(m[1]); b = parseInt(m[2]);
    } else if (color.startsWith('#')) {
        let hex = color.slice(1);
        if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
        if (hex.length !== 6) return true;
        r = parseInt(hex.slice(0, 2), 16);
        g = parseInt(hex.slice(2, 4), 16);
        b = parseInt(hex.slice(4, 6), 16);
    } else {
        return true;
    }
    const luma = 0.299 * r + 0.587 * g + 0.114 * b;
    return luma > 155;
}

// ========== PROJE RENK DEĞİŞKENLERİNİ UYGULA ==========
function applyProjectTheme(themeKey, mode) {
    let varsKey = (themeKey === 'macrozeus') ? 'macrozeus' : themeKey + '_' + (mode || 'light');
    const vars = PROJECT_THEMES[varsKey] || PROJECT_THEMES['macrozeus'];
    const root = document.documentElement;
    Object.entries(vars).forEach(([k, v]) => root.style.setProperty(k, v));

    // Gölgeyi sadece .container'a uygula (.wrapper artık ayrı bir kutu değil)
    const shadowColor = vars['--shadow-color'];
    if (shadowColor) {
        document.querySelectorAll('.container').forEach(el => {
            el.style.boxShadow = `0 0 30px ${shadowColor}`;
        });
        // .wrapper varsa ve .container'ın İÇİNDE değilse (eski yapı), ona da uygula.
        document.querySelectorAll('.wrapper').forEach(el => {
            if (!el.closest('.container')) {
                el.style.boxShadow = `0 0 30px ${shadowColor}`;
            } else {
                el.style.boxShadow = 'none';
                el.style.background = 'transparent';
            }
        });
    }

    // Input arka planı
    const inputBg = vars['--input-bg'];
    const inputBorder = vars['--input-border'];
    if (inputBg) {
        document.querySelectorAll('input:not([type="color"]):not([type="range"]):not([type="checkbox"]), select').forEach(el => {
            el.style.backgroundColor = inputBg;
            el.style.borderColor = inputBorder;
            el.style.color = vars['--clr-text'];
        });
        document.querySelectorAll('select option').forEach(el => {
            el.style.backgroundColor = inputBg;
            el.style.color = vars['--clr-text'];
        });
    }

    // Alt bilgi (Create by ...) - tek standart
    document.querySelectorAll('.attribute').forEach(el => {
        el.style.color = vars['--clr-attr-text'];
    });
    document.querySelectorAll('.attribute a').forEach(el => {
        el.style.color = vars['--clr-attr-link'];
        el.style.borderBottom = 'none';
        el.style.textDecoration = 'underline';
        el.style.fontWeight = '700';
    });

    applyProjectFavicon(themeKey);
    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) favicon.style.setProperty('--clr-favicon-frame', vars['--clr-favicon-frame']);
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

// ========== HEADER OLUŞTUR (proje sayfaları için) ==========
// Proje sayfasında <div id="macro-header-mount"></div> bulunmalı.
function buildProjectHeader() {
    const mount = document.getElementById('macro-header-mount');
    if (!mount) return;

    mount.innerHTML = `
    <header class="header-section" id="header">
        <div class="header-logo">
            <a href="../../#projects"><span>macroCODE</span></a>
        </div>
        <div class="header-nav">
            <a href="https://github.com/macroZEUS2" target="_blank" rel="noopener noreferrer" class="github-section">
                <span class="github-logo"><i class='bx bxl-github'></i></span>
                <span class="github-section-text">GitHub</span>
                <span class="github-star-badge">
                    <i class='bx bxs-star'></i>
                    <span class="star-count"></span>
                </span>
            </a>
            <div class="header-menu">
                <div class="menu-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul class="menu-list"></ul>
            </div>
        </div>
    </header>
    <a href="https://github.com/macroZEUS2" target="_blank" rel="noopener noreferrer" class="github-section mobile">
        <span class="github-logo"><i class='bx bxl-github'></i></span>
        <span class="github-star-badge">
            <i class='bx bxs-star'></i>
            <span class="star-count"></span>
        </span>
    </a>
    `;

    // Header scroll davranışı
    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        if (!header) return;
        if (window.scrollY > 50) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
    });

    // GitHub star counter
    let starCount = 0;
    const starSpans = document.querySelectorAll('.star-count');
    if (starSpans.length > 0) {
        const max = 7;
        const timerInterval = setInterval(() => {
            starCount++;
            starSpans.forEach(span => { span.textContent = starCount; });
            if (starCount >= max) clearInterval(timerInterval);
        }, 100);
    }

    // Menü açma/kapama
    const menuIcon = mount.querySelector('.menu-icon');
    const menuListEl = mount.querySelector('.menu-list');
    if (menuIcon && menuListEl) {
        menuIcon.addEventListener('click', () => {
            menuIcon.classList.toggle('active');
            menuListEl.classList.toggle('active');
        });
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.header-menu')) {
                menuIcon.classList.remove('active');
                menuListEl.classList.remove('active');
            }
        });
    }
}

// ========== HEADER TEMA UYGULA (macroZEUS header görünümü) ==========
function applyHeaderTheme(themeKey, mode) {
    const theme = PROJECT_PAGE_THEMES[themeKey];
    if (!theme) return;
    const vars = theme.fixed ? theme.light : (theme[mode] || theme.light);
    const root = document.documentElement;
    Object.entries(vars).forEach(([k, v]) => root.style.setProperty(k, v));

    const menuBg = vars['--clr-menu-bg'] || '#ffffff';
    const menuTextColor = isLightColor(menuBg) ? '#111111' : '#eeeeee';
    root.style.setProperty('--clr-menu-text', menuTextColor);

    const menuList = document.querySelector('.menu-list');
    if (menuList) {
        menuList.style.backgroundColor = vars['--clr-menu-bg'];
        menuList.style.borderColor = vars['--clr-menu-border'];
    }
    document.querySelectorAll('.github-section').forEach(el => {
        el.style.backgroundColor = vars['--clr-github-bg'];
        el.style.color = vars['--clr-github-text'];
        el.style.borderColor = vars['--clr-github-border'];
    });
    document.querySelectorAll('.github-logo, .github-section-text, .github-star-badge').forEach(el => {
        el.style.color = vars['--clr-github-text'];
    });
    document.querySelectorAll('.header-logo a span').forEach(el => {
        el.style.color = vars['--clr-primary'];
    });
    const header = document.getElementById('header');
    if (header) header.style.backgroundColor = vars['--clr-header'];

    const menuIconSpans = document.querySelectorAll('.menu-icon span');
    menuIconSpans.forEach(el => { el.style.backgroundColor = vars['--clr-primary']; });

    fixModeBtnContrast(vars['--clr-accent']);
}

function fixModeBtnContrast(accentColor) {
    const activeBtns = document.querySelectorAll('.mode-btn.active');
    activeBtns.forEach(btn => {
        const isLight = isLightColor(accentColor);
        const textColor = isLight ? '#111111' : '#ffffff';
        btn.style.color = textColor;
        btn.querySelectorAll('i, span').forEach(el => { el.style.color = textColor; });
    });
}

function updateThemeUI(themeKey, mode) {
    document.querySelectorAll('.theme-option').forEach(el => {
        el.classList.toggle('active', el.dataset.theme === themeKey);
    });
    const modeToggle = document.getElementById('modeToggle');
    if (modeToggle) {
        const theme = PROJECT_PAGE_THEMES[themeKey];
        if (theme && theme.fixed) {
            modeToggle.style.display = 'none';
        } else {
            modeToggle.style.display = 'flex';
            const lightBtn = modeToggle.querySelector('.mode-light');
            const darkBtn = modeToggle.querySelector('.mode-dark');
            if (lightBtn) lightBtn.classList.toggle('active', mode === 'light');
            if (darkBtn) darkBtn.classList.toggle('active', mode === 'dark');
        }
    }
}

// ========== TEMA MENÜSÜ OLUŞTUR (proje sayfaları için) ==========
function buildThemeMenuForProjectPage() {
    const menuList = document.querySelector('.menu-list');
    if (!menuList) return;

    menuList.innerHTML = '';

    const currentTheme = getCurrentTheme();
    const currentMode = getCurrentMode();

    const themeData = PROJECT_PAGE_THEMES[currentTheme];
    const activeVars = themeData
        ? (themeData.fixed ? themeData.light : (themeData[currentMode] || themeData.light))
        : {};

    const menuBg = activeVars['--clr-menu-bg'] || '#ffffff';
    const menuText = isLightColor(menuBg) ? '#111111' : '#eeeeee';
    const accentColor = activeVars['--clr-accent'] || '#111111';
    const activeBtnText = isLightColor(accentColor) ? '#111111' : '#ffffff';
    const menuBorder = activeVars['--clr-menu-border'] || 'rgba(0,0,0,0.1)';

    const macrothemeKey = 'macrozeus';
    const macroTheme = PROJECT_PAGE_THEMES[macrothemeKey];
    const macroLi = document.createElement('li');
    macroLi.innerHTML = `
        <div class="theme-option macrozeus-option ${currentTheme === macrothemeKey ? 'active' : ''}" data-theme="${macrothemeKey}">
            <span class="theme-dot" style="background:${macroTheme.light['--clr-accent']}"></span>
            <span class="theme-opt-name" style="color:${menuText}">${macroTheme.name}</span>
        </div>
    `;
    menuList.appendChild(macroLi);

    const divider = document.createElement('li');
    divider.innerHTML = `<div class="theme-divider" style="background:${menuBorder}"></div>`;
    menuList.appendChild(divider);

    const isLight = currentMode === 'light';
    const modeItem = document.createElement('li');
    modeItem.innerHTML = `
        <div id="modeToggle" style="display:${currentTheme === 'macrozeus' ? 'none' : 'flex'};gap:6px;padding:4px 0;margin-bottom:4px">
            <button class="mode-btn mode-light ${isLight ? 'active' : ''}" data-mode="light"
                style="${isLight
                    ? `background:${accentColor};border-color:${accentColor};color:${activeBtnText}`
                    : `background:transparent;border-color:${menuBorder};color:${menuText}`}">
                <i class='bx bx-sun' style="color:inherit"></i> <span style="color:inherit">Açık</span>
            </button>
            <button class="mode-btn mode-dark ${!isLight ? 'active' : ''}" data-mode="dark"
                style="${!isLight
                    ? `background:${accentColor};border-color:${accentColor};color:${activeBtnText}`
                    : `background:transparent;border-color:${menuBorder};color:${menuText}`}">
                <i class='bx bx-moon' style="color:inherit"></i> <span style="color:inherit">Koyu</span>
            </button>
        </div>
    `;
    menuList.appendChild(modeItem);

    const label = document.createElement('li');
    label.innerHTML = `<span class="theme-label" style="color:${menuText};opacity:0.5;border-top:1px solid ${menuBorder}">Temalar</span>`;
    menuList.appendChild(label);

    Object.entries(PROJECT_PAGE_THEMES).forEach(([key, theme]) => {
        if (key === 'macrozeus') return;
        const li = document.createElement('li');
        const accent = theme.light['--clr-accent'];
        li.innerHTML = `
            <div class="theme-option ${currentTheme === key ? 'active' : ''}" data-theme="${key}">
                <span class="theme-dot" style="background:${accent}"></span>
                <span class="theme-opt-name" style="color:${menuText}">${theme.name}</span>
            </div>
        `;
        menuList.appendChild(li);
    });

    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const mode = btn.dataset.mode;
            const theme = getCurrentTheme();
            localStorage.setItem('macroMode', mode);
            applyHeaderTheme(theme, mode);
            applyProjectTheme(theme, mode);
            buildThemeMenuForProjectPage();
        });
    });

    document.querySelectorAll('.theme-option').forEach(el => {
        el.addEventListener('click', (e) => {
            e.stopPropagation();
            const key = el.dataset.theme;
            const theme = PROJECT_PAGE_THEMES[key];
            const mode = theme.fixed ? 'light' : getCurrentMode();
            localStorage.setItem('macroTheme', key);
            if (!theme.fixed) localStorage.setItem('macroMode', mode);
            applyHeaderTheme(key, mode);
            applyProjectTheme(key, mode);
            buildThemeMenuForProjectPage();
        });
    });

    updateThemeUI(currentTheme, currentMode);
}

// ========== BAŞLAT ==========
(function init() {
    const theme = getCurrentTheme();
    const mode  = getCurrentMode();

    function start() {
        buildProjectHeader();
        applyHeaderTheme(theme, mode);
        applyProjectTheme(theme, mode);
        buildThemeMenuForProjectPage();
        applyHeaderTheme(theme, mode); // menü yeniden oluşunca kontrastı düzelt
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', start);
    } else {
        start();
    }

    // Başka sekmede tema değişince burada da güncelle
    window.addEventListener('storage', function(e) {
        if (e.key === 'macroTheme' || e.key === 'macroMode') {
            const t = getCurrentTheme();
            const m = getCurrentMode();
            applyHeaderTheme(t, m);
            applyProjectTheme(t, m);
            buildThemeMenuForProjectPage();
        }
    });
})();