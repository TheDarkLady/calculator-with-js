function clearDisplay() {
    document.querySelector('input[name="display"]').value = '';
}

function deleteLastChar() {
    const display = document.querySelector('input[name="display"]');
    display.value = display.value.slice(0, -1);
}

function appendToDisplay(value) {
    document.querySelector('input[name="display"]').value += value;
}

function calculateResult() {
    const display = document.querySelector('input[name="display"]');
    try {
        const result = eval(display.value);
        display.value = result !== undefined ? result : '';
    } catch (e) {
        display.value = '';
    }
}
