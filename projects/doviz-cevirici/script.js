const convertBtn = document.getElementById('convertBtn');
const amountInput = document.getElementById('amount');
const baseCurrencySelect = document.getElementById('baseCurrency');
const targetCurrencySelect = document.getElementById('targetCurrency');
const conversionResult = document.getElementById('conversionResult');

const apiUrl = 'https://open.er-api.com/v6/latest';

async function fetchCurrencies() {
    try {
        conversionResult.textContent = 'Döviz kurları yükleniyor...';
        const response = await fetch(`${apiUrl}/USD`);
        if (!response.ok) throw new Error('API hatası');
        const data = await response.json();

        if (data.result !== 'success') throw new Error('API hatası');

        const currencies = Object.keys(data.rates).sort();

        currencies.forEach(currency => {
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
        conversionResult.textContent = '';
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
        conversionResult.textContent = 'Hesaplanıyor...';
        const response = await fetch(`${apiUrl}/${baseCurrency}`);
        if (!response.ok) throw new Error('API hatası');
        const data = await response.json();

        if (data.result !== 'success') throw new Error('API hatası');

        const rate = data.rates[targetCurrency];
        const convertedAmount = (amount * rate).toFixed(2);
        conversionResult.textContent = `${amount} ${baseCurrency} = ${convertedAmount} ${targetCurrency}`;
    } catch (error) {
        console.error('Hata:', error);
        conversionResult.textContent = 'Dönüşüm yapılırken bir hata oluştu.';
    }
}

document.addEventListener('DOMContentLoaded', fetchCurrencies);
convertBtn.addEventListener('click', convertCurrency);