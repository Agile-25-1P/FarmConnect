
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\d{10,15}$/;

function validateName(name) {
  return name.trim().length >= 3;
}

function validateEmail(email) {
  return emailRegex.test(email.trim());
}

function validatePhone(phone) {
  return phoneRegex.test(phone.trim());
}

function validatePassword(password) {
  return password.length >= 8;
}

function validateConfirm(password, confirmPassword) {
  return confirmPassword === password && password.length > 0;
}

module.exports = {
  validateName,
  validateEmail,
  validatePhone,
  validatePassword,
  validateConfirm,
};