const puppeteer = require('puppeteer');
    (async () => {
        browser = await puppeteer.launch({
          ignoreHTTPSErrors: true, 
          devtools: false,
          args: [
            '--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'
          ],
          headless: false
        })
        page = await browser.newPage()
        await page.goto('https://web.whatsapp.com/')
        await page.waitForTimeout(3000)
        console.log(await page.$eval("#app > div._3h3LX._1dqoA.app-wrapper-web.font-fix > div > div.landing-window > div.landing-main > div > div.O1rXL > div > canvas", (el) => el.innerhtm))
    })();    

const wsp = () => {
    
    return 'hi'
}

module.exports = wsp