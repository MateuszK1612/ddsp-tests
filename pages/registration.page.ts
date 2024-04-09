import { Page } from "@playwright/test";
import { registrationData } from "../test-data/registration.data";

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

  wrongLoginError = this.page.locator('#username-error-pattern')
  wrongLoginMessage = "The field cannot contain special characters"

  successMessage = "User created correctly and verification message sent. Please complete your registration by using the link in the verification email you sent"

  async register(registrationData: registrationData, skipcheckbox: boolean = false): Promise<void> {
    await this.usernameInput.fill(registrationData.userLogin);
    await this.emailInput.fill(registrationData.userEmail);
    await this.confirmEmailInput.fill(registrationData.userEmail);
    await this.passwordInput.fill(registrationData.userPassword);
    await this.confirmPasswordInput.fill(registrationData.userPassword);
    await this.firstNameInput.fill(registrationData.userFirstName);
    await this.lastNameInput.fill(registrationData.userLastName);
    if (skipcheckbox === false) {
    await this.acceptTermsCheckbox.click();
    }
    await this.registerButton.click();
  }


}
