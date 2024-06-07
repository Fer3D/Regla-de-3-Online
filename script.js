document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
    });

    const inputs = document.querySelectorAll('.input-field');

    inputs.forEach(input => {
        input.addEventListener('input', () => {
            const filledInputs = Array.from(inputs).filter(input => input.value.trim() !== '');
            const isAllFilled = filledInputs.length === 3;
            inputs.forEach(input => {
                input.disabled = isAllFilled && input.value.trim() === '';
            });
        });
    });

    document.getElementById('calculate').addEventListener('click', () => {
        const x1 = parseFloat(document.getElementById('x1').value);
        const x2 = parseFloat(document.getElementById('x2').value);
        const y1 = parseFloat(document.getElementById('y1').value);
        const y2 = parseFloat(document.getElementById('y2').value);
        const decimals = parseInt(document.getElementById('decimals').value);
        const proporcionalidad = document.querySelector('input[name="proporcionalidad"]:checked').value;

        let result;
        if (proporcionalidad === 'directa') {
            result = (x2 * y1) / x1;
        } else {
            result = (x1 * y1) / x2;
        }

        const roundedResult = result.toFixed(decimals);
        const disabledInput = document.querySelector('.input-field:disabled');
        if (disabledInput) {
            disabledInput.value = roundedResult;
        }

        // Mostrar resultado en el campo de resultado
        document.getElementById('result').textContent = `Resultado: ${roundedResult}`;
    });

    document.getElementById('clear').addEventListener('click', () => {
        inputs.forEach(input => {
            input.value = '';
            input.disabled = false;
        });
        document.getElementById('result').textContent = '';
    });
});
