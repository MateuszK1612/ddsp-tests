import { Page } from "playwright";
import { LoginData } from "../test-data/login.data";
import { LoginPage } from "./login.page";

export class DashboardPage {
  constructor(private page: Page) {}

  dashboardTitle = this.page.getByRole("link", { name: "Dashboard" });
}

//Just for purpose of training and this tests login and password are not hidden
