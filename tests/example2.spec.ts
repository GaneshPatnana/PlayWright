import { test, expect } from '@playwright/test';

test('Power Automate', async ({ page }) => {
  await page.goto('https://powerautomate.microsoft.com/');

  await page.locator("[data-automation-id='header_signin-desktop']").click();
  //await page.locator("[data-automation-id='header_signin-desktop']").waitFor({state: 'detached'});
  // Fill an input to the right of "Username".
//await page.locator('input:right-of(:text("Username"))').fill('value');

// Click a button near the promo card.
//await page.locator('button:near(.promo-card)').click();

// Click the radio input in the list closest to the "Label 3".
//await page.locator('[type=radio]:left-of(:text("Label 3"))').first().click();

// Fill the input by targeting the label.
await page.locator("[id='i0116']").fill('patester1@powerautomateelo.onmicrosoft.com');
await page.locator("[id='idSIButton9']").click();


await page.locator("[id='i0118']").fill('ELO@test');

//await page.locator("[id='i0118']").waitFor({state: 'detached'});
await page.locator("[id='idSIButton9']").click();

await page.locator("[id='idSIButton9']").click();

await page.locator("[id='id__135']").click();
await page.locator("[id='id__17']").click();

await page.locator("[data-automation-id='splitbuttonprimary']").click();


await page.locator("[class='ms-ContextualMenu-itemText label-710']").click();
await page.locator("[class='ms-ContextualMenu-itemText label-710']").waitFor({state:'detached'});




});
