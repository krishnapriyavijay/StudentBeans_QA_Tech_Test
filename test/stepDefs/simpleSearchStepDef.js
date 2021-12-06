const { Given, When, Then } = require('cucumber')
const assert = require('assert')
const {Builder, By, Key, WebDriver, Browser, until} = require('selenium-webdriver')
const SimpleSearchPageObject = require('../pageObjects/simpleSearchPageObject')
const { Driver } = require('selenium-webdriver/chrome')
let driver = new Builder().forBrowser("chrome").build();

const simpleSearchPageObject = new SimpleSearchPageObject()    

Given('I am on the studentbeans homepage', async function () {
  
   await driver.get("https://www.studentbeans.com/");
   await driver.sleep(5000);
   //await simpleSearchPageObject.goToHomePage()
   //await simpleSearchPageObject.verifyHomePage()
    // await simpleSearchPageObject.acceptCookie()
     const element = await driver.findElement(By.id("onetrust-accept-btn-handler"))
     if(element){
      await element.click()
      await driver.sleep(2000)
     }
})


Given('I open the search bar', async function () {

  const element1 = await  driver.findElement(By.name("query"))

  if(element1){
    await element1.click()
    await driver.sleep(2000)
   }
  //await simpleSearchPageObject.goToSearchpage(driver)
  //await simpleSearchPageObject.openSearchPage(driver)   
})

When('I enter "Samsung"',  async function () {
  let SearchStr = "Samsung"

  const element2=  await driver.findElement(By.className("_1g5dvk1")) //path
  await element2.click()
  await driver.sleep(2000)
  element2.sendKeys(SearchStr)
  //await simpleSearchPageObject.enterSearchText(SearchStr, driver)
})

Then('I should be shown a search listing for "Samsung"', async function () {
  let SearchStr = "Samsung"
  await simpleSearchPageObject.verifySearchResult(SearchStr, driver)
})