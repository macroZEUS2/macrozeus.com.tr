// Sayfa tamamen yüklendiğinde çalıştır
document.addEventListener('DOMContentLoaded', () => {

    // --- Global Değişkenler ve Ayarlar ---
    let currentTheme = localStorage.getItem('siteTheme') || 'default';
    let currentMode = localStorage.getItem('siteMode') || 'light';

    const projects = [
        { name: 'Renk Paleti', image: 'renk-paleti.png', link: 'projects/renk-paleti/' },
        { name: 'Dijital Saat', image: 'dijital-saat.png', link: 'projects/dijital-saat/' },
        { name: 'QR Kod Oluşturucu', image: 'qr-kod-olusturucu.png', link: 'projects/qr-kod-olusturucu/' },
        { name: 'Döviz Çevirici', image: 'doviz-cevirici.png', link: 'projects/döviz-çevirici/' },
        { name: 'Şifre Oluşturucu', image: 'sifre-olusturucu.png', link: 'projects/şifre-oluşturucu/' },
        { name: 'Hesap Makinesi', image: 'hesap-makinesi.png', link: 'projects/hesap-makinesi/' },
        { name: 'Hava Durumu', image: 'hava-durumu.png', link: 'projects/hava-durumu/' },
    ];

    // DOM Elementleri
    const menuIcon = document.querySelector('.menu-icon');
    const menuList = document.querySelector('.menu-list');
    const header = document.getElementById('header');
    const projectList = document.querySelector('.project-list');
    const modeToggle = document.getElementById('mode-toggle');
    const modeIcon = document.getElementById('mode-icon');
    const modeText = document.getElementById('mode-text');
    const themeSelectors = document.querySelectorAll('.theme-selector');

    // --- TEMA VE MOD SİSTEMİ ---
    function updateSiteAppearance() {
        // Body class'ını güncelle (ör: theme-paramedic-dark)
        document.body.className = `theme-${currentTheme}-${currentMode}`;
        
        // Menüdeki mod ikonunu ve yazısını güncelle
        if (currentMode === 'dark') {
            modeIcon.className = 'bx bx-moon';
            modeText.textContent = 'Koyu Mod';
        } else {
            modeIcon.className = 'bx bx-sun';
            modeText.textContent = 'Açık Mod';
        }

        // Seçimleri hafızaya kaydet
        localStorage.setItem('siteTheme', currentTheme);
        localStorage.setItem('siteMode', currentMode);
    }

    // Başlangıçta temayı uygula
    updateSiteAppearance();

    // Tema Seçimi (Menü içindeki tema linkleri)
    themeSelectors.forEach(selector => {
        selector.addEventListener('click', (e) => {
            e.preventDefault();
            currentTheme = selector.getAttribute('data-theme');
            updateSiteAppearance();
        });
    });

    // Mod Değiştirme (Menü içindeki Güneş/Ay)
    modeToggle.addEventListener('click', (e) => {
        e.preventDefault();
        currentMode = (currentMode === 'light') ? 'dark' : 'light';
        updateSiteAppearance();
    });

    // --- MENU TOGGLE ---
    menuIcon.addEventListener("click", () => {
        menuIcon.classList.toggle("active");
        menuList.classList.toggle("active");
    });

    // --- SCROLL HEADER ---
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- PROJELERİ LİSTELEME VE YILDIZ SAYACI ---
    if (projectList) { // Sadece proje listesi olan sayfalarda çalıştır
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
            card.innerHTML = `
                <img src="${project.image}" alt="${project.name}">
                <div class="project-details">
                    <h3>${project.name}</h3>
                    <div class="btn-gruop">
                        <a href="${project.link}">Görüntüle</a>
                    </div>
                </div>
            `;
            projectList.appendChild(card);
        });

        // Yıldız Sayacı (Orijinal kodun)
        let starCount = 0;
        const starCounts = document.querySelectorAll('.star-count');

        function starUp() {
            if (starCounts.length > 0) {
                starCount++;
                starCounts.forEach(starSpan => starSpan.textContent = starCount);
                
                if (starCount >= projects.length) {
                    clearInterval(timerInterval);
                }
            }
        }
        let timerInterval = setInterval(starUp, 100);

        // Proje Kartı Animasyonları (Düzeltildi)
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = `opacity 0.4s ease ${index * 0.05}s, transform 0.4s ease ${index * 0.05}s`;
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
                
                // Hover efektinin düzgün çalışması için transition'ı temizle
                setTimeout(() => {
                    card.style.transition = ''; 
                }, 500); 
            }, 50);
        });
    }
});