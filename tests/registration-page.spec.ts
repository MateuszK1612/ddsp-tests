import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/home.page";
import { RegistrationPage } from "../pages/registration.page";
import {
  registrationData,
} from "../test-data/registration.data";
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

    
const registrationData: registrationData = {
      userLogin: faker.person.firstName(),
      userEmail: faker.internet.email(),
      userPassword: faker.internet.password({ length: 12, prefix: "Te1!" }),
      userFirstName: faker.person.firstName(),
      userLastName: faker.person.lastName(),
    };

    // Act

    await registrationPage.register(registrationData);

    // Assert
    await expect(registrationPage.registrationSuccessPopup).toContainText(
      registrationPage.successMessage
    );
  });
});
