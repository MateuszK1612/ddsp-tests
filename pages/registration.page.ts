import { expect, Page } from "@playwright/test";
import { RegistrationData } from "../test-data/registration.data";
import { faker } from "@faker-js/faker";

export class RegistrationPage {
  constructor(private page: Page) {}

  usernameInput = this.page.locator("#username-input");
  emailInput = this.page.locator("#email-input");
  confirmEmailInput = this.page.locator("#confirm-email-input");
  passwordInput = this.page.locator("#password-input");
  confirmPasswordInput = this.page.locator("#confirm-password-input");
  firstNameInput = this.page.locator("#firstname-input");
  lastNameInput = this.page.locator("#lastname-input");

  genderOptions = [
    this.page.locator("# gender-radio-option-man"),
    this.page.locator("#gender-radio-option-woman"),
    this.page.locator("#gender-radio-option-other"),
  ];

  messagesLanguageCodeSelect = this.page.locator(
    "#messages-language-code-select"
  );
  acceptTermsCheckbox = this.page.locator("#accept-terms-checkbox");
  subscribeNewsletterCheckbox = this.page.locator(
    "#subscribe-newsletter-checkbox"
  );
  registerButton = this.page.locator("#register-button");

  registrationSuccessPopup = this.page.locator("#registration-success-popup");

  wrongLoginError = this.page.locator("#username-error-pattern");
  wrongLoginMessage = "The field cannot contain special characters";

  wrongEmailError = this.page.locator("#email-error-format");
  wrongEmailMessage = "Incorrect E-mail";

  notmatchingEmailError = this.page.locator("#confirm-email-error-must-match");
  notmatchingEmailMessage = "E-mails are different. They should be equal!";

  tooshortPasswordError = this.page.locator("#password-error-minlength");
  tooshortPasswordMessage = "Password with less than 8 characters";

  wrongPasswordError = this.page.locator("#password-error-pattern");
  wrongPasswordMessage =
    " The password must consist of at least one number, contain lowercase and uppercase letters and special characters (e.g. #,?,!) ";

  notMatchingPasswordError = this.page.locator(
    "#confirm-password-error-must-match"
  );
  notMatchingPasswordMessage = "Passwords are different. They should be equal!";

  uncheckedTermsBox = this.page.locator("#accept-terms-error-required");
  uncheckedTermsBoxError = "You have to accept the terms and conditions";

  successMessage =
    "User created correctly and verification message sent. Please complete your registration by using the link in the verification email you sent";

  async register(
    registrationData: RegistrationData,
    skipcheckbox: boolean = false
  ): Promise<void> {
    await this.usernameInput.fill(registrationData.login);
    await this.emailInput.fill(registrationData.email);
    await this.confirmEmailInput.fill(registrationData.confirmEmail);
    await this.passwordInput.fill(registrationData.password);
    await this.confirmPasswordInput.fill(registrationData.confirmPassword);
    await this.firstNameInput.fill(registrationData.firstName);
    await this.lastNameInput.fill(registrationData.lastName);
    if (skipcheckbox === false) {
      await this.acceptTermsCheckbox.click();
      await expect(this.uncheckedTermsBox).toBeVisible
      
    }
    await this.registerButton.click();
  }

  getData(): RegistrationData {
    const password = faker.internet.password({ length: 12, prefix: "Te1!" });
    const email = faker.internet.email();
    const registrationData: RegistrationData = {
      login: faker.person.firstName(),
      email: email,
      confirmEmail: email,
      password: password,
      confirmPassword: password,
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
    };

    return registrationData;
  }
}
