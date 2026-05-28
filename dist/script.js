// menu toggle
const menuIcon = document.querySelector('.menu-icon');
const menuList = document.querySelector('.menu-list');

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    menuList.classList.toggle("active");
});

// project details
const projects = [
    {
        name: 'Server Homepage',
        image: 'https://cdn-icons-png.flaticon.com/512/25/25694.png',
        link: 'http://home.macrozeus.com.tr',
        isHomepage: true,
    },
    {
        name: 'Oyunlar',
        image: 'https://cdn-icons-png.flaticon.com/512/686/686589.png',
        link: 'projects/games/',
        isGames: true,
    },
    {
        name: 'Renk Oluşturucu',
        image: 'https://r.resimlink.com/X8p40.png',
        link: 'projects/renk-olusturucu/',
    },
    {
        name: 'Dijital Saat',
        image: 'https://r.resimlink.com/m4qlQX6c.png',
        link: 'projects/dijital-saat/',
    },
    {
        name: 'QR Kod Oluşturucu',
        image: 'https://r.resimlink.com/QmfqoM.png',
        link: 'projects/qr-kod-olusturucu/',
    },
    {
        name: 'Döviz Çevirici',
        image: 'https://r.resimlink.com/4etWJwLY.png',
        link: 'projects/doviz-cevirici/',
    },
    {
        name: 'Şifre Oluşturucu',
        image: 'https://r.resimlink.com/bWgMamkn.png',
        link: 'projects/sifre-olusturucu/',
    },
    {
        name: 'Hesap Makinesi',
        image: 'https://r.resimlink.com/bWgMamkn.png',
        link: 'projects/hesap-makinesi/',
    },
];

const projectList = document.querySelector('.project-list');

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const homepageCard = projects.filter(p => p.isHomepage);
const gamesCard = projects.filter(p => p.isGames);
const otherProjects = projects.filter(p => !p.isHomepage && !p.isGames);
shuffleArray(otherProjects);
const sortedProjects = [...homepageCard, ...gamesCard, ...otherProjects];

sortedProjects.forEach((project) => {
    const card = document.createElement('div');
    card.classList.add('project-card');
    if (project.isHomepage) card.classList.add('homepage-card');
    if (project.isGames) card.classList.add('games-card');

    const image = document.createElement('img');
    image.src = project.image;
    image.alt = project.name;
    image.classList.add('project-img');

    const projectDetails = document.createElement('div');
    projectDetails.classList.add('project-details');

    const name = document.createElement('h3');
    name.textContent = project.name;
    name.classList.add('project-title');

    const btngroup = document.createElement('div');
    btngroup.classList.add('btn-gruop');

    const görüntüleBtn = document.createElement('a');
    görüntüleBtn.textContent = 'Görüntüle';
    görüntüleBtn.setAttribute('href', project.link);
    if (project.isHomepage) {
        görüntüleBtn.setAttribute('target', '_blank');
    }
    görüntüleBtn.classList.add('goruntule-btn');

    btngroup.appendChild(görüntüleBtn);
    projectDetails.appendChild(name);
    projectDetails.appendChild(btngroup);
    card.appendChild(image);
    card.appendChild(projectDetails);
    projectList.appendChild(card);
});

// github star count
const star = document.querySelectorAll('.star-count');
let starCount = 0;

function starUp() {
    starCount++;
    star.forEach((starSpan) => {
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
document.addEventListener('DOMContentLoaded', startTimer);

// scroll reveal
const animateElement = (element, delay, distance, duration, origin) => {
    const sr = ScrollReveal({
        delay: delay,
        distance: distance,
        duration: duration,
        easing: 'ease',
        origin: origin,
    });
    sr.reveal(element);
};

setTimeout(() => {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((project, index) => {
        animateElement(project, 300 + index * 100, '50px', 500, 'bottom');
    });
}, 100);