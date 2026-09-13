const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateEmail(email) {
  if (!email) return "Email is required";
  if (!EMAIL_REGEX.test(email)) return "Enter a valid email address";
  return "";
}

export function validatePassword(password) {
  if (!password) return "Password is required";
  if (password.length < 8) return "Must be at least 8 characters";
  return "";
}
