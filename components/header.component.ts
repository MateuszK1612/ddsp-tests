import { Page } from "@playwright/test";

export class Header {
  constructor(private page: Page) {}

  aboutUsButton = this.page.locator('#about-us-btn')
  loginButton = this.page.locator("#login-btn");
  registerButton = this.page.locator("#register-btn");
  administratorPanel = this.page.getByRole("link", {
    name: "Administrator panel",
  });
}