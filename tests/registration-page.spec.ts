import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/home.page";
import { RegistrationPage } from "../pages/registration.page";
import { RegistrationData } from "../test-data/registration.data";

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
    const registrationData: RegistrationData = registrationPage.getData(); 
    // Act
    await registrationPage.register(registrationData);

    // Assert
    await expect(registrationPage.registrationSuccessPopup).toContainText(
      registrationPage.successMessage
    );
  });

  test("Unsuccessful registration with incorrect user login", async ({
    page,
  }) => {
    // Arrange
    const registrationData: RegistrationData = registrationPage.getData();
    registrationData.login = "#@$" 

    // Act
    await registrationPage.register(registrationData);

    // Assert
    await expect(registrationPage.wrongLoginError).toHaveText(
      registrationPage.wrongLoginMessage
    );
  });

  test("Unsuccessful registration with incorrect user email", async ({
    page,
  }) => {
    // Arrange
    const registrationData: RegistrationData = registrationPage.getData();
    registrationData.email = "test@test@test.pl"

    // Act
    await registrationPage.register(registrationData);

    // Assert
    await expect(registrationPage.wrongEmailError).toHaveText(
      registrationPage.wrongEmailMessage
    );
  });
});
