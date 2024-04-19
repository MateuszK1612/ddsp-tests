import test, { expect } from "playwright/test";
import { HomePage } from "../pages/home.page";
import { EditProfile } from "../pages/editprofile.page";
import { Header } from "../components/header.component";
import { LoginPage } from "../pages/login.page";
import { LoginData } from "../test-data/login.data";
import { faker } from "@faker-js/faker";

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
  test("User can edit firstname", async ({ page }) => {
    // Arrange
    let firstName = await editProfile.firstName.textContent();
    let newFirstName = await faker.person.firstName();

    // Act
    await editProfile.firstName.clear();
    await editProfile.firstName.fill(newFirstName);
    await editProfile.saveButton.click();

    // Assert

    await expect(editProfile.firstName).not.toBe(firstName);
    await expect(editProfile.firstName).toHaveValue(newFirstName);
  });
  test("User can edit lastname", async ({ page }) => {
    // Arrange
    let lastName = await editProfile.lastName.textContent();
    let newLastName = await faker.person.lastName();

    // Act
    await editProfile.lastName.clear();
    await editProfile.lastName.fill(newLastName);
    await editProfile.saveButton.click();

    // Assert

    await expect(editProfile.lastName).not.toBe(lastName);
    await expect(editProfile.lastName).toHaveValue(newLastName);
  });
  test("User can edit phone number", async ({ page }) => {
    // Arrange
    let phoneNumber = await editProfile.phoneNumber.textContent();
    let newPhoneNumber = await faker.string.numeric({ length: 9 });
    // Act
    await editProfile.phoneNumber.clear();
    await editProfile.phoneNumber.fill(newPhoneNumber);
    await editProfile.saveButton.click();
    // Assert
    await expect(editProfile.phoneNumber).not.toBe(phoneNumber);
    await expect(editProfile.phoneNumber).toHaveValue(newPhoneNumber);
  });

  // test("", async ({ page }) => {
  //   // Arrange
  //   const isTrue = await editProfile.isSubscribed();
  //   // Act
  //   await page.waitForTimeout(2000);

  //   let dupa = await editProfile.firstName.inputValue();
  //   if (isTrue === true) {
  //     await editProfile.subscribeCheckBox.click();
  //     await editProfile.saveButton.click();
  //     await expect(editProfile.subscribeCheckBox).toBeChecked({
  //       checked: false
  //     })
  //   }
  //   if (isTrue === false) {
  //     let dupa = editProfile.subscribeCheckBox;
  //     await editProfile.subscribeCheckBox.click();
  //     let dupa2 = editProfile.saveButton;
  //     await editProfile.saveButton.click();
  //     await expect(editProfile.subscribeCheckBox).toBeChecked({
  //       checked: true
  //     })

  //   }

  //   // Assert


  // });
});
