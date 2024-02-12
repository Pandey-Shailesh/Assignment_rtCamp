const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({ headless: false });
    // Maximize the browser window
    const context = await browser.newContext({ viewport: { width: 1540, height: 1080 } });
    const page = await context.newPage();

    // Navigate to Amazon
    await page.goto('https://www.amazon.in');

    // Navigate to the Amazon login page
    await page.click('//a[@id="nav-link-accountList"]');

    // Fill login form
    await page.waitForSelector('//input[@id="ap_email"]');
    await page.fill('//input[@id="ap_email"]', 'shaileshpandey2081998@gmail.com');
    await page.click('//input[@id="continue"]')

    await page.waitForSelector('//input[@id="ap_password"]');
    await page.fill('//input[@id="ap_password"]','Shailesh@123')
    await page.click('//input[@id="signInSubmit"]')




    // Close the browser
    //   await browser.close();
})();





