import { Page } from "playwright";
import { LoginData } from "../test-data/login.data";

export class LoginPage {
  constructor(private page: Page) {}

  loginInput = this.page.locator("#username-input");
  passwordInput = this.page.locator("#password-input");
  loginButton = this.page.locator("#sign-in-btn");
  userLoggedMenu = this.page.locator("#user-logged-menu");

  async login(loginData: LoginData): Promise<void> {
    await this.loginInput.fill(loginData.login);
    await this.passwordInput.fill(loginData.password);
    await this.loginButton.click();
  }

  getLoginData(): LoginData {
    return {
        login: "TestAdmin1",
        password: "Tester123!",
      }
  }
}
