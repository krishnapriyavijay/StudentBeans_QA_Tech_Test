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
   //Handle cookies pop up
     const element = await driver.findElement(By.id("onetrust-accept-btn-handler"))
     if(element){
      await element.click()
      await driver.sleep(2000)
     }
      //await simpleSearchPageObject.goToHomePage(driver)
      //await simpleSearchPageObject.verifyHomePage(driver)
      //await simpleSearchPageObject.acceptCookie(driver)
})

Given('I open the search bar', async function () {
//Click on Search field
  const element1 = await  driver.findElement(By.name("query"))
  if(element1){
    await element1.click()
    await driver.sleep(2000)
   }  
   //await simpleSearchPageObject.goToSearchpage(driver)
})

When('I enter "Samsung"',  async function () {
  let SearchStr = "Samsung"
  //Enter Samsung in the input field of the search panel
  const element2=  await driver.findElement(By.className("_1g5dvk1")) //class path
  if(element2){
    await element2.click()
    await driver.sleep(2000)
    //Send 'Samsung'
    element2.sendKeys(SearchStr)
  }
  //await simpleSearchPageObject.enterSearchText(SearchStr, driver)
})

Then('I should be shown a search listing for "Samsung"', async function () {
  let SearchStr = "Samsung"
  //Verfiy the the filtered list contains Samsung
  await simpleSearchPageObject.verifySearchResult(SearchStr, driver)
})