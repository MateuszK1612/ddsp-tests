import test from "playwright/test";
import { HomePage } from "../pages/home.page";
import { LoginPage } from "../pages/login.page";
import { DashboardPage } from "../pages/dashboard.page";
import { LoginData } from "../test-data/login.data";
import { SideMenuComponent } from "../components/side-menu.component";
import { Header } from "../components/header.component";
import { UserListColumns } from "../pages/userlist.page";

test.describe("User list page tests", () => {
  let loginPage: LoginPage;
  let homePage: HomePage;
  let dashboardPage: DashboardPage;
  let sideMenu: SideMenuComponent;
  let header: Header;
  let userListColumns: UserListColumns;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    dashboardPage = new DashboardPage(page);
    const loginData: LoginData = loginPage.getLoginData();
    sideMenu = new SideMenuComponent(page);
    header = new Header(page);
    userListColumns = new UserListColumns(page);

    await page.goto("/");
    await homePage.cookiesAcceptButton.click();
    await header.loginButton.click();
    await loginPage.login(loginData);
    await header.administratorPanel.click();
    await page.goto("https://ddsp.damiandziura.pl/#/Admin/Users/List");
  });

  test("User can sort grid by names", async ({ page }) => {
    // Arrange

    // Act
    userListColumns.firstName.click();
    // Assert
  });
});
