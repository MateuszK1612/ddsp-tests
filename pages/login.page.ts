import { Page } from "playwright";
import { LoginData } from "../test-data/login.data";

export class LoginPage {
  constructor(private page: Page) {}

  loginInput = this.page.locator("#username-input");
  passwordInput = this.page.locator("#password-input");
  loginButton = this.page.locator("#sign-in-btn");
  userLoggedMenu = this.page.locator("#user-logged-menu");
  administratorPanel = this.page.getByRole("link", {
    name: "Administrator panel",
  });

  tooShortPassword = this.page.locator("#password-error-minlength")
  tooShortPasswordError = "The value entered is too short"

  async login(loginData: LoginData): Promise<void> {
    await this.loginInput.fill(loginData.login);
    await this.passwordInput.fill(loginData.password);
    await this.loginButton.click();
  }

  getLoginData(): LoginData {
    return {
      login: "Dymek",
      password: "Damian13!",
    };
    //Just for purpose of training and this tests login and password are not hidden
  }
}
