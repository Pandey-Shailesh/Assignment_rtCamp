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
    await page.click('//input[@id="continue"]');

    await page.waitForSelector('//input[@id="ap_password"]');
    await page.fill('//input[@id="ap_password"]', 'Shailesh@123');
    await page.click('//input[@id="signInSubmit"]');


    // Validation Search Result
    await page.waitForSelector('//input[@id="twotabsearchtextbox"]');
    await page.fill('//input[@id="twotabsearchtextbox"]', 'men shoes');
    await page.click('//input[@id="nav-search-submit-button"]');




// Validation Buy Now Result
await page.waitForSelector('//input[@id="buy-now-button"]');
await page.click('//input[@id="buy-now-button"]');

await page.waitForSelector('//span[@class="nav-cart-icon"]');
await page.click('//span[@class="nav-cart-icon"]');


await page.waitForSelector('//span[@text=" Go to Cart "]');
await page.click('//span[@text="Go to Card"]');

await page.waitForSelector('//input[@class="a-button-input "]');
await page.click('//input[@class="a-button-input "]');

await page.waitForSelector('//input[@name="placeYourOrder1"]');
await page.click('//input[@name="placeYourOrder1"]');

setTimeout(50000);

     Validate Product Wishlist functionality
    await page.waitForSelector('//div[@class="_bGlmZ_tint_M0L-m"]');
    await page.click('//div[@class="_bGlmZ_tint_M0L-m"]');

    await page.waitForSelector('//input[@id="add-to-wishlist-button"]');
    await page.click('//input[@id="add-to-wishlist-button"]');

    // Scroll down the page
    await page.evaluate(() => {
        window.scrollBy(0, 150);
    });

    await page.waitForSelector('//span[@class=" a-fixed-left-grid-inner"]');
    await page.click('//span[@class=" a-fixed-left-grid-inner"]');

    await page.waitForSelector('//a[@id="atwl-link-to-list-K3RM5WUP1VOK"]',{timeout:2000});
    await page.click('//a[@id="atwl-link-to-list-K3RM5WUP1VOK"]');


    // Close the browser
      await browser.close();
})();





