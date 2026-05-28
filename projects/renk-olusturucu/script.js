//  values array 
const colors = [0 , 1 ,2 , 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D" , "E", "F"];
const generateBtn = document.getElementById("colorGenerateBtn");
const colorBox = document.querySelector(".color-box");
const KodValue = document.getElementById("colorKodValue");

// Düzeltme: rgbValue değişkeni HTML'de olmadığı için kaldırıldı.
// const rgbValue = document.getElementById("rgbValue");

// Düzeltme: Hex kodunu RGB'ye çeviren bir fonksiyon eklendi.
const hexToRgb = (hex) => {
    let r = 0, g = 0, b = 0;
    // 3 karakterli hex kodları için
    if (hex.length === 4) {
        r = parseInt(hex[1] + hex[1], 16);
        g = parseInt(hex[2] + hex[2], 16);
        b = parseInt(hex[3] + hex[3], 16);
    } 
    // 6 karakterli hex kodları için
    else if (hex.length === 7) {
        r = parseInt(hex.substring(1, 3), 16);
        g = parseInt(hex.substring(3, 5), 16);
        b = parseInt(hex.substring(5, 7), 16);
    }
    return `RGB(${r}, ${g}, ${b})`;
};

// generate random number 
const generateRandomNumber = () => {
    return Math.floor(Math.random() * colors.length);
}

// generate random color 
generateBtn.addEventListener("click" , () => {
    let color = "#";
    for(let i = 0 ; i < 6 ; i++){
        color += colors[generateRandomNumber()];
    }

    // change bg color of color box 
    colorBox.style.backgroundColor = color;

    // display  color values 
    KodValue.textContent = color;
    // Düzeltme: `rgbValue` elementi HTML'den kaldırıldığı için bu satır da kaldırıldı.
    // Ayrıca `KodToRgb` fonksiyonu `hexToRgb` olarak değiştirildi.
    // rgbValue.textContent = hexToRgb(color);
})