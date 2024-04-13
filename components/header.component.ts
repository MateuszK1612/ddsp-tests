import { Page } from "@playwright/test";

export class Header {
  constructor(private page: Page) {}

  
  loginButton = this.page.locator("#login-btn");
  registerButton = this.page.locator("#register-btn");
}