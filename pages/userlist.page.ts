import { Page } from "@playwright/test";

export class UserListColumns {
    constructor(private page: Page) {}
 name = this.page.getByText('Name', { exact: true });
 firstName = this.page.getByText('Firstname');
 lastName = this.page.getByText('Lastname');
 gender = this.page.getByText('Gender');
 verified = this.page.getByText('Verified');
 blocked = this.page.getByText('Blocked');
 registrationDate = this.page.getByText('Registration date');

}