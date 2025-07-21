// Select the display input using its name attribute
const display = document.querySelector('input[name="display"]');

// Select all buttons inside the form
const buttons = document.querySelectorAll('input[type="button"]');

// Loop through each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;

        if (value === '=') {
            try {
                // Use eval to calculate result
                display.value = eval(display.value);
            } catch (error) {
                display.value = "Error";
            }
        }
        // 'AC' and 'DE' are handled inline in HTML
    });
});
