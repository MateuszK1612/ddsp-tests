import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/home.page";
import { registrationData } from "../test-data/registration.data";
import { RegistrationPage } from "../pages/registration.page";
import { faker } from "@faker-js/faker";

test.describe("Registration page tests", () => {
  let homePage: HomePage;
  let registrationPage: RegistrationPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    registrationPage = new RegistrationPage(page);
    await page.goto("/");
    await homePage.cookiesAcceptButton.click();
    await homePage.registerButton.click();
  });

  test("Succesful registration", async ({ page }) => {
    // Arrange
    const userLogin = registrationData.userLogin;
    const userEmail = registrationData.userEmail;
    const userPassword = registrationData.userPassword;
    const firstName = registrationData.userName;
    const lastName = registrationData.userLastName;

    // Act
    await registrationPage.usernameInput.fill(userLogin);
    await registrationPage.emailInput.fill(userEmail);
    await registrationPage.confirmEmailInput.fill(userEmail);
    await registrationPage.passwordInput.fill(userPassword);
    await registrationPage.confirmPasswordInput.fill(userPassword);
    await registrationPage.firstNameInput.fill(firstName);
    await registrationPage.lastNameInput.fill(lastName);
    await registrationPage.acceptTermsCheckbox.click();
    await registrationPage.registerButton.click();

    // Assert
    await expect(registrationPage.registrationSuccessPopup).toContainText(
      "User created correctly and verification message sent. Please complete your registration by using the link in the verification email you sent"
    );
  });
});
