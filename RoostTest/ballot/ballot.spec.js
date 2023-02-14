

//Create a webdriver instance
var webdriver = require('selenium-webdriver');

//Create a chrome driver instance
var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

//Navigate to the ROOST_SVC_URL
driver.get(ROOST_SVC_URL);

//Retrieve the page title
driver.getTitle().then(function(title){
    //Print the page title to the console
    console.log(title);
});

//Quit the driver
driver.quit();