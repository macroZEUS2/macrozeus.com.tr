// menu toggle 
const menuIcon = document.querySelector('.menu-icon');

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
})

// menu list toggle
const menuList = document.querySelector('.menu-list');

menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("active");
})

// project details 
const projects = [
    {
        name: 'Renk Oluşturucu',
        image: 'https://r.resimlink.com/X8p40.png',
        url: 'renk-olusturucu.html',
    },
    {
        name: 'Dijital Saat',
        image: 'https://r.resimlink.com/m4qlQX6c.png',
        url: 'dijital-saat.html',
    },
    {
        name: 'QR Kod Oluşturucu',
        image: 'https://r.resimlink.com/QmfqoM.png',
        url: 'qr-kod-olusturucu.html',
    },
    {
        name: 'Döviz Çevirici',
        image: 'https://r.resimlink.com/4etWJwLY.png',
        url: 'doviz-cevirici.html',
    },
    {
        name: 'Şifre Oluşturucu',
        image: 'https://r.resimlink.com/bWgMamkn.png',
        url: 'sifre-olusturucu.html',
    },
    // js projects 
    // coming soon 
];

const projectList = document.querySelector('.project-list');

//
function shuffleArray(array) {
    for (let i = array.length - 2; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

//
shuffleArray(projects);

//
projects.forEach((project) => {
    const card = document.createElement('div');
    card.classList.add('project-card');

    const image = document.createElement('img');
    image.src = project.image;
    image.alt = project.name;
    image.classList.add('project-img');

    const projectDetails = document.createElement('div');
    projectDetails.classList.add('project-details');

    const name = document.createElement('h3');
    name.textContent = project.name;
    name.classList.add('project-title')

    const taggroup = document.createElement('div');
    taggroup.classList.add('tag-gruop');

    const btngroup = document.createElement('div');
    btngroup.classList.add('btn-gruop');


    const GörüntüleBtn = document.createElement('a');
    GörüntüleBtn.textContent = 'Görüntüle';
    GörüntüleBtn.setAttribute('href', project.url)
    GörüntüleBtn.setAttribute('target', '_blank')
    GörüntüleBtn.classList.add('Görüntüle-btn')

    btngroup.appendChild(GörüntüleBtn);

    projectDetails.appendChild(name);
    projectDetails.appendChild(btngroup)

    card.appendChild(image);
    card.appendChild(projectDetails)

    projectList.appendChild(card);
});


// github star count 
const star = document.querySelectorAll('.star-count');

let starCount = 0;
star.textContent = starCount;

function starUp() {
    starCount++
    star.forEach((starSpan) => {
        starSpan.textContent = starCount;
    })
    if (starCount == 5) {
        clearInterval(timerInterval);
    }
}
function startTimer() {

    timerInterval = setInterval(starUp, 100);
}

document.addEventListener('DOMContentLoaded', startTimer);


// scroller reveal 
animateElement = (element, delay, distance, duration, origin) => {
    // Initialize ScrollReveal with options
    const sr = ScrollReveal({
        delay: delay,
        distance: distance,
        duration: duration,
        easing: 'ease',
        origin: origin
    });

    // Reveal the element
    sr.reveal(element);
}

// select all project cards 
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach((project, index) => {
    animateElement(project, 500 + index * 100, '500px', 500, 'bottom');
})