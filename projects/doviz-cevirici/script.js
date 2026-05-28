const convertBtn = document.getElementById('convertBtn');
const amountInput = document.getElementById('amount');
const baseCurrencySelect = document.getElementById('baseCurrency');
const targetCurrencySelect = document.getElementById('targetCurrency');
const conversionResult = document.getElementById('conversionResult');

const apiUrl = 'https://api.frankfurter.app/latest';

async function fetchCurrencies() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('API\'den döviz kurları alınamadı.');
        const data = await response.json();
        const currencies = Object.keys(data.rates);

        const defaultCurrencies = ['USD', 'EUR', 'TRY'];
        const allCurrencies = [...new Set([...defaultCurrencies, ...currencies])].sort();

        allCurrencies.forEach(currency => {
            const baseOption = document.createElement('option');
            baseOption.value = currency;
            baseOption.textContent = currency;
            baseCurrencySelect.appendChild(baseOption);

            const targetOption = document.createElement('option');
            targetOption.value = currency;
            targetOption.textContent = currency;
            targetCurrencySelect.appendChild(targetOption);
        });

        baseCurrencySelect.value = 'USD';
        targetCurrencySelect.value = 'TRY';
    } catch (error) {
        console.error('Hata:', error);
        conversionResult.textContent = 'Döviz kurları yüklenirken bir hata oluştu.';
    }
}

async function convertCurrency() {
    const amount = parseFloat(amountInput.value);
    const baseCurrency = baseCurrencySelect.value;
    const targetCurrency = targetCurrencySelect.value;

    if (isNaN(amount) || amount <= 0) {
        conversionResult.textContent = 'Lütfen geçerli bir miktar girin!';
        return;
    }

    if (baseCurrency === targetCurrency) {
        conversionResult.textContent = `${amount} ${baseCurrency} = ${amount} ${targetCurrency}`;
        return;
    }

    try {
        const response = await fetch(`${apiUrl}?from=${baseCurrency}&to=${targetCurrency}`);
        if (!response.ok) throw new Error('API\'den dönüşüm oranı alınamadı.');
        const data = await response.json();
        const rate = data.rates[targetCurrency];
        const convertedAmount = amount * rate;
        conversionResult.textContent = `${amount} ${baseCurrency} = ${convertedAmount.toFixed(2)} ${targetCurrency}`;
    } catch (error) {
        console.error('Hata:', error);
        conversionResult.textContent = 'Dönüşüm yapılırken bir hata oluştu.';
    }
}

document.addEventListener('DOMContentLoaded', fetchCurrencies);
convertBtn.addEventListener('click', convertCurrency);