// Temayı yükle
function setTheme(themeName) {
    document.body.className = themeName; 
    localStorage.setItem('siteTheme', themeName);
}
}

// Sayfa yüklendiğinde hafızadaki temayı uygula
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('siteTheme') || 'theme-default';
    setTheme(savedTheme);
});

// menu toggle
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
console.log('star-count elements:', document.querySelectorAll('.star-count').length);

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

function animateCard(card, index) {
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
}