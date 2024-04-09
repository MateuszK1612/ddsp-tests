import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/home.page";

test.describe("Home Page tests", () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    console.log(page);
    await page.goto("/");
    await homePage.cookiesAcceptButton.click();
  });

  test("Succesful Home Page loading", async ({ page }) => {
    // Arrange

    // Act

    // Assert

    await expect(homePage.loginButton).toBeVisible;
  });
});
