import { Page } from '@playwright/test';

export class HomePage {
    constructor(private page:Page){}

    cookiesAcceptButton =  this.page.locator('#privacy-policy-approve-btn')
    loginButton = this.page.locator('#login-btn')
    
}