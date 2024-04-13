import { Page } from "@playwright/test";

export class EditProfile {
  constructor(private page: Page) {}

  login = this.page.locator("#mat-input-17");
  firstName = this.page.locator("#firstname-input");
  lastName = this.page.locator("#lastname-input");
  phoneNumber = this.page.locator("#phone-number-input");
  saveButton = this.page.locator("#edit-profile-save-button");
}
