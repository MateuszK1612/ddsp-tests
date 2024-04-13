import test, { expect } from "playwright/test";
import { HomePage } from "../pages/home.page";
import { EditProfile } from "../pages/editprofile.page";
import { Header } from "../components/header.component";
import { LoginPage } from "../pages/login.page";
import { LoginData } from "../test-data/login.data";

test.describe("Edit profile page tests", () => {
  let homePage: HomePage;
  let loginPage: LoginPage;
  let header: Header;
  let editProfile: EditProfile;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    header = new Header(page);
    editProfile = new EditProfile(page);
    loginPage = new LoginPage(page);
    const loginData: LoginData = loginPage.getLoginData();
    await page.goto("/");
    await homePage.cookiesAcceptButton.click();
    await header.loginButton.click();
    await loginPage.login(loginData);
    await header.userMenu.hover();
    await header.userMenuEditProfile.click();
  });

  test("User can see edit profile page", async ({ page }) => {
    // Arrange
    // Act
    // Assert
    await expect(editProfile.firstName).toBeVisible;
    await expect(editProfile.lastName).toBeVisible;
    await expect(editProfile.phoneNumber).toBeVisible;
    await expect(editProfile.saveButton).toBeVisible;
  });
});
