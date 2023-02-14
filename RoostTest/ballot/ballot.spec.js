

//Set up WebDriver
const {Builder, By, Key, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

//Set up Chrome driver
let o = new chrome.Options();
o.addArguments('start-fullscreen');
o.addArguments('disable-infobars');

let driver = new Builder()
    .setChromeOptions(o)
    .forBrowser('chrome')
    .build();

//Navigate to the URL
driver.get(ROOST_SVC_URL);

//Retrieve the page title
driver.getTitle().then(function(title) {
    console.log(title);
});

//Quit driver
driver.quit();