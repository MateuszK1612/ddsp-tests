import test from "playwright/test";
import { HomePage } from "../pages/home.page";
import { LoginPage } from "../pages/login.page";
import { DashboardPage } from "../pages/dashboard.page";
import { LoginData } from "../test-data/login.data";
import { SideMenuComponent } from "../components/side-menu.component";
import { Header } from "../components/header.component";

test.describe("User list page tests", () => {
  let loginPage: LoginPage;
  let homePage: HomePage;
  let dashboardPage: DashboardPage;
  let sideMenu: SideMenuComponent;
  let header: Header;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    dashboardPage = new DashboardPage(page);
    const loginData: LoginData = loginPage.getLoginData();
    sideMenu = new SideMenuComponent(page);
    header = new Header(page);

    await page.goto("/");
    await homePage.cookiesAcceptButton.click();
    await header.loginButton.click();
    await loginPage.login(loginData);
    await header.administratorPanel.click();
  });

  test("User can go to user list page", async ({ page }) => {
    // Arrange

    // Act

    sideMenu.usersButton2.click();
    sideMenu.userList.click();
    // Assert
  });
});
