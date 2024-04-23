import { Page } from "@playwright/test";
export class SideMenuComponent {
  constructor(private page: Page) {}

  usersButton = this.page.getByRole("button", { name: "Users" });
  usersButton2 = this.page.locator('//*[@id="mat-expansion-panel-header-3"]/span/span');
  usersButton3 = this.page.getByTitle("Users");
  configurationsButton = this.page.locator("#mat-expansion-panel-header-4");
  newsletterButton = this.page.locator("#mat-expansion-panel-header-5");
  userList = this.page.getByText("people User list");
}
