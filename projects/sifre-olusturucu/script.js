const slider = document.querySelector(".pass-length input");
const options = document.querySelectorAll(".option input");
const copyBtn = document.querySelector(".input-box span");
const output = document.querySelector(".input-box input");
const indicator = document.querySelector(".pass-indicator");
const btn = document.querySelector(".generate-btn");
const lengthText = document.querySelector(".pass-length span");

const chars = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "!@$%^&*()_+-=[]{}|;:,.<>?"
};

function getRandom(str) {
  return str[Math.floor(Math.random() * str.length)];
}

function generatePassword() {
  let pool = "";
  let password = "";

  options.forEach(opt => {
    if (opt.checked) pool += chars[opt.id];
  });

  if (!pool) return;

  for (let i = 0; i < slider.value; i++) {
    password += getRandom(pool);
  }

  output.value = password;
}

function updateStrength() {
  const len = slider.value;

  indicator.id =
    len <= 8 ? "weak" :
    len <= 16 ? "medium" :
    "strong";
}

function updateUI() {
  lengthText.textContent = slider.value;
  updateStrength();
  generatePassword();
}

slider.addEventListener("input", updateUI);

btn.addEventListener("click", generatePassword);

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(output.value);
  copyBtn.textContent = "check";

  setTimeout(() => {
    copyBtn.textContent = "content_copy";
  }, 1500);
});

// init
updateUI();