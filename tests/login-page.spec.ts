import test, { expect } from "playwright/test";
import { LoginPage } from "../pages/login.page";
import { HomePage } from "../pages/home.page";
import { LoginData } from "../test-data/login.data";

test.describe("Login page tests", () => {
  let loginPage: LoginPage;
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);

    await page.goto("/");
    await homePage.cookiesAcceptButton.click();
    await homePage.loginButton.click();
  });

  test("Succesful login", async ({ page }) => {
    // Arrange
    const loginData: LoginData = loginPage.getLoginData();

    // Act
    await loginPage.login(loginData);
    // Assert
    await expect(loginPage.userLoggedMenu).toHaveText(loginData.login);
  });

  test("Uncuccesful login with incorrect username", async ({ page }) => {
    // Arrange
    const loginData: LoginData = loginPage.getLoginData();
    loginData.login = "xyz";
    // Act
    await loginPage.login(loginData);
    

    // Assert
    await expect(homePage.loginButton).toHaveText("Login");
  });
});
