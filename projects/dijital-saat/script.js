function updateDate() {
    const now = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    document.querySelector('.date').textContent =
        now.toLocaleDateString('tr-TR', options);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function updateTime() {
    const now = new Date();

    const timeString =
        `${formatTime(now.getHours())}:${formatTime(now.getMinutes())}:${formatTime(now.getSeconds())}`;

    document.querySelector('.time').textContent = timeString;
}

updateDate();
updateTime();
setInterval(updateTime, 1000);