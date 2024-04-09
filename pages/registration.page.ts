import { Page } from "@playwright/test";

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

  registrationSuccessPopup = this.page.locator('#registration-success-popup')
}
