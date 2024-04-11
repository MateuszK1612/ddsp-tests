import test from "playwright/test";
import { HomePage } from "../pages/home.page";
import { LoginPage } from "../pages/login.page";
import { DashboardPage } from "../pages/dashboard.page";
import { LoginData } from "../test-data/login.data";
import { SideMenuComponent } from "../components/side-menu.component";

test.describe("Dashboard page tests", () => {
  let loginPage: LoginPage;
  let homePage: HomePage;
  let dashboardPage: DashboardPage;
  let sideMenu: SideMenuComponent;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    dashboardPage = new DashboardPage(page);
    const loginData: LoginData = loginPage.getLoginData();
    sideMenu = new SideMenuComponent(page);

    await page.goto("/");
    await homePage.cookiesAcceptButton.click();
    await homePage.loginButton.click();
    await loginPage.login(loginData);
    await loginPage.administratorPanel.click();
  });

  test("User can see side menu and dashboard", async ({ page }) => {
    // Arrange
    // Act
    // Assert
    sideMenu.usersButton.isVisible;
    sideMenu.configurationsButton.isVisible;
    sideMenu.newsletterButton.isVisible;
    dashboardPage.dashboardTitle.isVisible;
  });
});
