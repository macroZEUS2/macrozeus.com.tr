let expression = '';

function appendValue(value) {
    const operators = ['+', '-', '×', '÷', '%'];
    const lastChar = expression.slice(-1);

    if (operators.includes(value) && operators.includes(lastChar)) return;
    if (value === '.' && lastChar === '.') return;

    expression += value;
    document.getElementById('expression').textContent = expression;
    calculate(true);
}

function clearAll() {
    expression = '';
    document.getElementById('expression').textContent = '';
    document.getElementById('result').textContent = '0';
}

function deleteLast() {
    expression = expression.slice(0, -1);
    document.getElementById('expression').textContent = expression;
    if (expression === '') {
        document.getElementById('result').textContent = '0';
    } else {
        calculate(true);
    }
}

function calculate(preview = false) {
    try {
        const expr = expression
            .replace(/×/g, '*')
            .replace(/÷/g, '/')
            .replace(/%/g, '/100');

        const result = Function('"use strict"; return (' + expr + ')')();

        if (isNaN(result) || !isFinite(result)) {
            if (!preview) document.getElementById('result').textContent = 'Hata';
            return;
        }

        const formatted = parseFloat(result.toFixed(10)).toString();
        document.getElementById('result').textContent = formatted;

        if (!preview) {
            expression = formatted;
            document.getElementById('expression').textContent = '';
        }
    } catch (e) {
        if (!preview) document.getElementById('result').textContent = 'Hata';
    }
}