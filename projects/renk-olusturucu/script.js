const colors = "0123456789ABCDEF";
const btn = document.getElementById("colorGenerateBtn");
const box = document.querySelector(".color-box");
const code = document.getElementById("colorKodValue");

function randomColor() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += colors[Math.floor(Math.random() * colors.length)];
  }
  return color;
}

btn.addEventListener("click", () => {
  const color = randomColor();

  box.style.backgroundColor = color;
  code.textContent = color;
});