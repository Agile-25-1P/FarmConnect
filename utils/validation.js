document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registrationForm");
  const successMessage = document.getElementById("successMessage");

  const fullName = document.getElementById("fullName");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const phoneError = document.getElementById("phoneError");
  const passwordError = document.getElementById("passwordError");
  const confirmError = document.getElementById("confirmError");

  const togglePw = document.getElementById("togglePassword");
  const toggleConfirm = document.getElementById("toggleConfirmPassword");

  const strengthMeter = document.getElementById("strengthMeter");
  const strengthText = document.getElementById("strengthText");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{10,15}$/;

  function setupToggle(inputEl, toggleEl) {
    toggleEl.addEventListener("click", () => {
      const type = inputEl.type === "password" ? "text" : "password";
      inputEl.type = type;
      toggleEl.querySelector("i").classList.toggle("fa-eye-slash");
    });
  }
  setupToggle(password, togglePw);
  setupToggle(confirmPassword, toggleConfirm);

  password.addEventListener("input", () => {
    const val = password.value;
    let score = 0;
    if (val.length >= 8) score += 1;
    if (/[A-Z]/.test(val)) score += 1;
    if (/[0-9]/.test(val)) score += 1;
    if (/[\W_]/.test(val)) score += 1;

    strengthMeter.style.width = (score / 4) * 100 + "%";

    const words = ["Very Weak", "Weak", "Fair", "Strong", "Very Strong"];
    strengthText.textContent = `Strength: ${words[score]}`;
  });

  function validateName() {
    const ok = fullName.value.trim().length >= 3;
    nameError.style.display = ok ? "none" : "block";
    return ok;
  }

  function validateEmail() {
    const ok = emailRegex.test(email.value.trim());
    emailError.style.display = ok ? "none" : "block";
    return ok;
  }

  function validatePhone() {
    const ok = phoneRegex.test(phone.value.trim());
    phoneError.style.display = ok ? "none" : "block";
    return ok;
  }

  function validatePassword() {
    const ok = password.value.length >= 8;
    passwordError.style.display = ok ? "none" : "block";
    return ok;
  }

  function validateConfirm() {
    const ok =
      confirmPassword.value === password.value && password.value.length > 0;
    confirmError.style.display = ok ? "none" : "block";
    return ok;
  }

  fullName.addEventListener("input", validateName);
  email.addEventListener("input", validateEmail);
  phone.addEventListener("input", validatePhone);
  password.addEventListener("input", () => {
    validatePassword();
    validateConfirm();
  });
  confirmPassword.addEventListener("input", validateConfirm);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const valid = [
      validateName(),
      validateEmail(),
      validatePhone(),
      validatePassword(),
      validateConfirm(),
    ].every((v) => v);

    if (!valid) {
      const firstError = document.querySelector(
        '.error-message[style*="block"]'
      );
      firstError &&
        firstError.previousElementSibling
          .querySelector("input, select")
          ?.focus();
      return;
    }

    successMessage.style.display = "block";
    form.style.display = "none";

    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 2000);
  });
});
