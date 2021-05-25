const express = require('express'),
    app = express(),
    axios = require('axios'),
    download = require('image-downloader'),
    fs = require('fs')
    port = 4500,
    puppeteer = require('puppeteer');
    let browser, page;
    
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
    await page.waitForTimeout(2500)
    const a = await page.$$eval("._3jid7", el => el.map(x => x.getAttribute("data-ref")))
})();

app.get('/', async(req, res) => {
    await page.goto('https://web.whatsapp.com/')
    await page.waitForTimeout(2500)
    const qr = await page.$$eval("._3jid7", el => el.map(x => x.getAttribute("data-ref")))

    const options = {
        url: 'https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl=' + qr[0],
        dest: __dirname + '/public'
    }

    download.image(options).then(({ filename, image }) => {
      fs.createReadStream(__dirname + '/public/chart').pipe(res);
    })
    await page.waitForTimeout(10000)
    await page.type('#pane-side > div:nth-child(3) > div > div > div:nth-child(11) > div > div', '\n')
});

app.listen(port, () => {
    console.log(`Execute in : http://127.0.0.1:${port}`)
})