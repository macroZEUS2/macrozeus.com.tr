// menu toggle
const menuIcon = document.querySelector('.menu-icon');
const menuList = document.querySelector('.menu-list');

// header scroll efekti
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

// project details
const projects = [
    {
        name: 'Renk Paleti',
        image: 'https://r.resimlink.com/x2IGXi1zP.png',
        link: 'projects/renk-paleti/',
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
        image: 'https://r.resimlink.com/tB8qvGCpbK.png',
        link: 'projects/hesap-makinesi/',
    },
    {
        name: 'Hava Durumu',
        image: 'https://r.resimlink.com/Dask8L-c.png',
        link: 'projects/hava-durumu/',
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

const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.4s ease ${index * 0.05}s, transform 0.4s ease ${index * 0.05}s`;
    setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, 50);
});

// games section
fetch('projects/games/data/games.json')
    .then(r => r.json())
    .then(games => {
        const gameList = document.getElementById('gameList');
        games.forEach(g => {
            const card = document.createElement('div');
            card.classList.add('project-card');

            const img = document.createElement('img');
            img.src = g.thumb;
            img.alt = g.title;

            const details = document.createElement('div');
            details.classList.add('project-details');

            const title = document.createElement('h3');
            title.textContent = g.title;

            const btnGroup = document.createElement('div');
            btnGroup.classList.add('btn-gruop');

            const btn = document.createElement('a');
            btn.textContent = 'Oyna';
            btn.href = `projects/games/game.html?id=${g.id}`;
            btn.classList.add('goruntule-btn');

            btnGroup.appendChild(btn);
            details.appendChild(title);
            details.appendChild(btnGroup);
            card.appendChild(img);
            card.appendChild(details);
            gameList.appendChild(card);
        });
    });