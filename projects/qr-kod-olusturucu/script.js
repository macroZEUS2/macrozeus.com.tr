const wrapper = document.querySelector(".wrapper"),
input = document.querySelector(".form input"),
button = document.querySelector(".form button"),
img = document.querySelector(".qr-code img");

let lastValue = "";

button.addEventListener("click", () => {
    const value = input.value.trim();

    if (!value || value === lastValue) return;

    lastValue = value;

    button.innerText = "Oluşturuluyor...";

    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(value)}`;

    img.onload = () => {
        wrapper.classList.add("active");
        button.innerText = "QR Kod Oluştur";
    };
});

input.addEventListener("input", () => {
    if (!input.value.trim()) {
        wrapper.classList.remove("active");
        lastValue = "";
    }
});