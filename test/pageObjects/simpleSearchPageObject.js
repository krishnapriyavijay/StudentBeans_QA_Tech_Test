const ParentPageObject = require('./parentPageObject')
const {By, Key, Builder, WebElement,  WebDriver, until} = require('selenium-webdriver')
const assert = require('assert')
const { Driver } = require('selenium-webdriver/chrome')

class simpleSearchPageObject extends ParentPageObject {

  async goToHomePage (driver) {
    // the below url call is relative to the base url in the wdio.conf.js so the below call will actually just result in going straight to the base url
    browser.url('')
  }

  async verifyHomePage (driver) {
    //verify 'Recommended For You' text in the main page 
    await this.isElementEqualToExpected($('h2=Recommended For You'), 'Recommended For You')
  }
  async acceptCookie(driver) {
    //Handle cookies pop up
    const element = await driver.findElement(By.id("onetrust-accept-btn-handler"))
    //Check if element exists 
    if(element){
      await element.click()
      await driver.sleep(2000)
     }
  }

  async  goToSearchpage (driver) {
    //
    const element1 = await  driver.findElement(By.name("query"))
    if(element1){
      await element1.click()
      await driver.sleep(2000)
    }
  }

  async enterSearchText(SearchStr, driver ){
    const element2=  await driver.findElement(By.className("_1g5dvk1")) //path
    await element2.click()
    await driver.sleep(2000)
    element2.sendKeys(SearchStr)
  }

  async verifySearchResult (SearchStr, driver){
    //Verfiy the the filtered list contains Samsung and a Discount is one of them
    await this.isElementEqualToExpected($('h3=Discounts'), 'Discounts')
    await this.isElementEqualToExpected($('span=Samsung'), 'Samsung')
  }

}

module.exports = simpleSearchPageObject
