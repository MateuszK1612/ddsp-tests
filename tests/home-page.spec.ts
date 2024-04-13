import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/home.page";
import { Header } from "../components/header.component";

test.describe("Home Page tests", () => {
  let homePage: HomePage;
  let header: Header;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    header = new Header(page);
    await page.goto("/");
    await homePage.cookiesAcceptButton.click();
  });

  test("Succesful Home Page loading", async ({ page }) => {
    // Arrange

    // Act

    // Assert
    await expect(header.loginButton).toBeVisible;
  });
});
