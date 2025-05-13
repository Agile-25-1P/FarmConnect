
const {
  validateName,
  validateEmail,
  validatePhone,
  validatePassword,
  validateConfirm,
} = require('../utils/validationUtils');

describe('Validation Utilities', () => {
  test('validateName(): should be at least 3 characters', () => {
    expect(validateName('')).toBe(false);
    expect(validateName('Al')).toBe(false);
    expect(validateName('Alex')).toBe(true);
  });

  test('validateEmail(): should match email format', () => {
    expect(validateEmail('test')).toBe(false);
    expect(validateEmail('test@com')).toBe(false);
    expect(validateEmail('test@example.com')).toBe(true);
  });

  test('validatePhone(): should be 10-15 digit numbers', () => {
    expect(validatePhone('12345')).toBe(false);
    expect(validatePhone('1234567890')).toBe(true);
    expect(validatePhone('123456789012345')).toBe(true);
    expect(validatePhone('1234567890123456')).toBe(false);
  });

  test('validatePassword(): should be at least 8 characters', () => {
    expect(validatePassword('abc123')).toBe(false);
    expect(validatePassword('abc12345')).toBe(true);
  });

  test('validateConfirm(): should match and be non-empty', () => {
    expect(validateConfirm('pass1234', 'pass1234')).toBe(true);
    expect(validateConfirm('pass1234', 'wrong')).toBe(false);
    expect(validateConfirm('', '')).toBe(false);
  });
});
