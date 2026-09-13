import { validateEmail, validatePassword } from "../validators";

describe("validateEmail", () => {
  test("returns no error for a valid email", () => {
    expect(validateEmail("johndoe@gmail.com")).toBe("");
  });

  test("returns an error when email is missing", () => {
    expect(validateEmail("")).toBe("Email is required");
  });

  test("returns an error for an email missing the domain", () => {
    expect(validateEmail("johndoe@")).toBe("Enter a valid email address");
  });

  test("returns an error for an email missing the @ symbol", () => {
    expect(validateEmail("johndoe.gmail.com")).toBe(
      "Enter a valid email address"
    );
  });
});

describe("validatePassword", () => {
  test("returns no error for a password with at least 8 characters", () => {
    expect(validatePassword("password123")).toBe("");
  });

  test("returns an error when password is missing", () => {
    expect(validatePassword("")).toBe("Password is required");
  });

  test("returns an error when password is shorter than 8 characters", () => {
    expect(validatePassword("abc123")).toBe("Must be at least 8 characters");
  });
});
