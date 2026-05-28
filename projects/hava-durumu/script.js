const API_KEY = 'd42c2990be7bc645c2d1e254df1f2b74';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const weatherCard = document.getElementById('weatherCard');
const error = document.getElementById('error');

async function getWeather(city) {
    try {
        error.textContent = '';
        weatherCard.classList.remove('active');

        const response = await fetch(
            `${API_URL}?q=${city}&appid=${API_KEY}&units=metric&lang=tr`
        );

        if (!response.ok) {
            if (response.status === 404) {
                error.textContent = 'Şehir bulunamadı. Lütfen geçerli bir şehir adı girin.';
            } else {
                error.textContent = 'Bir hata oluştu. Lütfen tekrar deneyin.';
            }
            return;
        }

        const data = await response.json();

        document.getElementById('cityName').textContent = `${data.name}, ${data.sys.country}`;
        document.getElementById('temperature').textContent = `${Math.round(data.main.temp)}°C`;
        document.getElementById('description').textContent = data.weather[0].description;
        document.getElementById('humidity').textContent = `${data.main.humidity}%`;
        document.getElementById('wind').textContent = `${Math.round(data.wind.speed * 3.6)} km/s`;
        document.getElementById('feelsLike').textContent = `${Math.round(data.main.feels_like)}°C`;

        const iconCode = data.weather[0].icon;
        document.getElementById('weatherIcon').innerHTML = 
            `<img src="https://openweathermap.org/img/wn/${iconCode}@2x.png" alt="hava durumu ikonu">`;

        weatherCard.classList.add('active');
    } catch (err) {
        error.textContent = 'Bağlantı hatası. İnternet bağlantınızı kontrol edin.';
    }
}

searchBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) getWeather(city);
});

cityInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        const city = cityInput.value.trim();
        if (city) getWeather(city);
    }
});

// Varsayılan şehir
getWeather('Istanbul');