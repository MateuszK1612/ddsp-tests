import { Page } from "@playwright/test";
export class SideMenuComponent {
  constructor(private page: Page) {}

  usersButton = this.page.locator("#mat-expansion-panel-header-6");
  configurationsButton = this.page.locator("#mat-expansion-panel-header-7");
  newsletterButton = this.page.locator("#mat-expansion-panel-header-8");
}
