const convertBtn = document.getElementById('convertBtn');
const amountInput = document.getElementById('amount');
const baseCurrencySelect = document.getElementById('baseCurrency');
const targetCurrencySelect = document.getElementById('targetCurrency');
const result = document.getElementById('conversionResult');

const apiUrl = 'https://api.frankfurter.app/latest';

// currencies
async function loadCurrencies() {
    const res = await fetch(apiUrl);
    const data = await res.json();

    const currencies = Object.keys(data.rates);
    const list = ['USD','EUR','TRY', ...currencies];

    [...new Set(list)].forEach(cur => {
        baseCurrencySelect.innerHTML += `<option>${cur}</option>`;
        targetCurrencySelect.innerHTML += `<option>${cur}</option>`;
    });

    baseCurrencySelect.value = "USD";
    targetCurrencySelect.value = "TRY";
}

// convert
async function convert() {
    const amount = Number(amountInput.value);
    const from = baseCurrencySelect.value;
    const to = targetCurrencySelect.value;

    if (!amount || amount <= 0) {
        result.textContent = "Geçerli miktar gir";
        return;
    }

    const res = await fetch(`${apiUrl}?from=${from}&to=${to}`);
    const data = await res.json();

    const rate = data.rates[to];
    const output = amount * rate;

    result.textContent = `${amount} ${from} = ${output.toFixed(2)} ${to}`;
}

document.addEventListener('DOMContentLoaded', loadCurrencies);
convertBtn.addEventListener('click', convert);