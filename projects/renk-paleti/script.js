const colorPicker = document.getElementById('colorPicker');
const colorPreview = document.getElementById('colorPreview');
const hexValue = document.getElementById('hexValue');
const rgbValue = document.getElementById('rgbValue');
const hslValue = document.getElementById('hslValue');
const palette = document.getElementById('palette');
const savedColors = document.getElementById('savedColors');
const saveBtn = document.getElementById('saveBtn');

let saved = JSON.parse(localStorage.getItem('savedColors') || '[]');

function hexToRgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
}

function rgbToHsl(r, g, b) {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0;
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
            case g: h = ((b - r) / d + 2) / 6; break;
            case b: h = ((r - g) / d + 4) / 6; break;
        }
    }
    return {
        h: Math.round(h * 360),
        s: Math.round(s * 100),
        l: Math.round(l * 100)
    };
}

function lightenDarken(hex, amount) {
    const { r, g, b } = hexToRgb(hex);
    const clamp = v => Math.max(0, Math.min(255, v));
    const toHex = v => clamp(v + amount).toString(16).padStart(2, '0');
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function updateColor(hex) {
    const { r, g, b } = hexToRgb(hex);
    const { h, s, l } = rgbToHsl(r, g, b);

    colorPreview.style.backgroundColor = hex;
    hexValue.textContent = hex.toUpperCase();
    rgbValue.textContent = `rgb(${r}, ${g}, ${b})`;
    hslValue.textContent = `hsl(${h}, ${s}%, ${l}%)`;

    // Ton paleti oluştur
    palette.innerHTML = '';
    const steps = [-80, -60, -40, -20, 0, 20, 40, 60, 80];
    steps.forEach(step => {
        const shade = lightenDarken(hex, step);
        const swatch = document.createElement('div');
        swatch.className = 'swatch';
        swatch.style.backgroundColor = shade;
        swatch.title = shade.toUpperCase();
        swatch.addEventListener('click', () => {
            colorPicker.value = shade;
            updateColor(shade);
        });
        palette.appendChild(swatch);
    });
}

function copyValue(id) {
    const text = document.getElementById(id).textContent;
    navigator.clipboard.writeText(text).then(() => {
        const btn = document.querySelector(`#${id} ~ button`) ||
            document.querySelector(`[onclick="copyValue('${id}')"]`);
        btn.innerHTML = '<i class="bx bx-check"></i>';
        setTimeout(() => btn.innerHTML = '<i class="bx bx-copy"></i>', 1500);
    });
}

function renderSaved() {
    savedColors.innerHTML = '';
    saved.forEach((color, i) => {
        const swatch = document.createElement('div');
        swatch.className = 'saved-swatch';
        swatch.style.backgroundColor = color;
        swatch.title = color.toUpperCase();
        swatch.addEventListener('click', () => {
            colorPicker.value = color;
            updateColor(color);
        });
        const del = document.createElement('button');
        del.className = 'del-btn';
        del.innerHTML = '×';
        del.addEventListener('click', (e) => {
            e.stopPropagation();
            saved.splice(i, 1);
            localStorage.setItem('savedColors', JSON.stringify(saved));
            renderSaved();
        });
        swatch.appendChild(del);
        savedColors.appendChild(swatch);
    });
}

saveBtn.addEventListener('click', () => {
    const hex = colorPicker.value;
    if (!saved.includes(hex)) {
        saved.push(hex);
        localStorage.setItem('savedColors', JSON.stringify(saved));
        renderSaved();
    }
});

colorPicker.addEventListener('input', () => updateColor(colorPicker.value));

updateColor(colorPicker.value);
renderSaved();