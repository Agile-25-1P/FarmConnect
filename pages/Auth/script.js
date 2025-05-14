// Remember Me functionality
window.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('loginEmail');
    const rememberMeCheckbox = document.getElementById('rememberMe');

    // Pre-fill email if stored in localStorage
    const savedEmail = localStorage.getItem('rememberedEmail');
    if (savedEmail) {
        emailInput.value = savedEmail;
        rememberMeCheckbox.checked = true;
    }

    // Save email to localStorage on form submit if Remember Me is checked
    loginForm.addEventListener('submit', () => {
        if (rememberMeCheckbox.checked) {
            localStorage.setItem('rememberedEmail', emailInput.value);
        } else {
            localStorage.removeItem('rememberedEmail');
        }
    });
});
