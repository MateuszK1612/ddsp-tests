import test, { expect } from "playwright/test";
import { LoginPage } from "../pages/login.page";
import { HomePage } from "../pages/home.page";
import { LoginData } from "../test-data/login.data";
import { Header } from "../components/header.component";

test.describe("Login page tests", () => {
  let loginPage: LoginPage;
  let homePage: HomePage;
  let header: Header;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    header = new Header(page);

    await page.goto("/");
    await homePage.cookiesAcceptButton.click();
    await header.loginButton.click();
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
    await expect(header.loginButton).toHaveText("Login");
  });

  test("Uncuccesful login with too short password", async ({ page }) => {
    // Arrange
    const loginData: LoginData = loginPage.getLoginData();
    loginData.password = "xyz";
    // Act
    await loginPage.login(loginData);

    // Assert
    await expect(loginPage.tooShortPassword).toHaveText(
      loginPage.tooShortPasswordError
    );
  });
  test("Uncuccesful login with incorrect password", async ({ page }) => {
    // Arrange
    const loginData: LoginData = loginPage.getLoginData();
    loginData.password = "xyz12345!";
    // Act
    await loginPage.login(loginData);

    // Assert
    await expect(header.loginButton).toHaveText("Login");
  });
});
