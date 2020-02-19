import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';

import { AppPage } from '../pages/app.po';
import { browser } from 'protractor';

let page: AppPage;

Before(() => {
  page = new AppPage();
});

Given(/^I am on the home page$/, async () => {
  await page.navigateTo();
});

When(/^I click on the btn 100 times$/, async() => {
 var i;
 for(i=0;i<100;i++){
   await page.getBtn().click();
 }
});

Then (/^I should see 100$/, async() => {
 expect(await page.getValue()).to.equal('100');
});