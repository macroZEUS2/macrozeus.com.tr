const lengthSlider = document.querySelector(".pass-length input"),
    lengthLabel = document.querySelector(".pass-length span"),
    options = document.querySelectorAll(".option input"),
    copyIcon = document.querySelector(".input-box span"),
    passwordInput = document.querySelector(".input-box input"),
    passIndicator = document.querySelector(".pass-indicator"),
    generateBtn = document.querySelector(".generate-btn");

const characters = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "^!$%&|[](){}:;.,*+-#@<>~"
};

// Güvenli rastgele sayı (Math.random yerine crypto)
const randomInt = (max) => {
    const limit = Math.floor(2 ** 32 / max) * max;
    const buf = new Uint32Array(1);
    do { crypto.getRandomValues(buf); } while (buf[0] >= limit);
    return buf[0] % max;
};

// Güç göstergesi: sadece uzunluğa değil, kullanılan karakter havuzuna da bakar
const updatePassIndicator = (poolSize, length) => {
    const bits = length * Math.log2(poolSize);
    passIndicator.id = bits < 36 ? "weak" : bits < 60 ? "medium" : "strong";
};

const generatePassword = () => {
    const active = [...options].filter((o) => o.checked);
    const pool = active.map((o) => characters[o.id]).join("");
    const length = +lengthSlider.value;

    // Seçilen her türden en az bir karakter garanti edilir
    const chars = active.map((o) => {
        const set = characters[o.id];
        return set[randomInt(set.length)];
    });
    while (chars.length < length) chars.push(pool[randomInt(pool.length)]);

    // Karıştır (Fisher-Yates)
    for (let i = chars.length - 1; i > 0; i--) {
        const j = randomInt(i + 1);
        [chars[i], chars[j]] = [chars[j], chars[i]];
    }

    passwordInput.value = chars.slice(0, length).join("");
    updatePassIndicator(pool.length, length);
};

const updateSlider = () => {
    lengthLabel.innerText = lengthSlider.value;
    const pct = ((lengthSlider.value - lengthSlider.min) / (lengthSlider.max - lengthSlider.min)) * 100;
    lengthSlider.style.setProperty("--fill", pct + "%");
    generatePassword();
};

const copyPassword = async () => {
    try {
        await navigator.clipboard.writeText(passwordInput.value);
    } catch {
        passwordInput.select();
        document.execCommand("copy");
    }
    copyIcon.innerText = "check";
    copyIcon.classList.add("copied");
    setTimeout(() => {
        copyIcon.innerText = "copy_all";
        copyIcon.classList.remove("copied");
    }, 1500);
};

// En az bir seçenek her zaman açık kalır
options.forEach((option) => {
    option.addEventListener("change", () => {
        if (![...options].some((o) => o.checked)) option.checked = true;
        generatePassword();
    });
});

copyIcon.addEventListener("click", copyPassword);
copyIcon.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); copyPassword(); }
});
lengthSlider.addEventListener("input", updateSlider);
generateBtn.addEventListener("click", generatePassword);

updateSlider();
