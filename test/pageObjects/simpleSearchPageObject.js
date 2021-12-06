const ParentPageObject = require('./parentPageObject')
const {By, Key, Builder, WebElement,  WebDriver, until} = require('selenium-webdriver')
const assert = require('assert')
const { Driver } = require('selenium-webdriver/chrome')
const TEN_SECOND_TIMEOUT = 10000

class simpleSearchPageObject extends ParentPageObject {

  async goToHomePage () {
    // the below url call is relative to the base url in the wdio.conf.js so the below call will actually just result in going straight to the base url
    browser.url('')
  }

  async verifyHomePage () {
    await this.isElementEqualToExpected($('h2=Recommended For You'), 'Recommended For You')
  }
  async acceptCookie(driver) {
    // let acceptCookieButton = false;
    //   try {
    //   const applicationCookie = await this.driver.manage().getCookie('OptanonAlertBoxClosed');
    //   if (applicationCookie === null) {
    //   acceptCookieButton = true;
    //   }
    //   } catch (e) {
    //   acceptCookieButton = true;
    //   }

    const element = await driver.findElement(By.id("onetrust-accept-btn-handler"))
     if(element){
      await element.click()
      await driver.sleep(2000)
     }
  }

  async  goToSearchpage (driver) {

    const element1 = await  driver.findElement(By.name("query"))
    if(element1){
      await element1.click()
      await driver.sleep(2000)
    }
  }

  async  openSearchPage(driver){
    //const element =  driver.findElement(By.css(".\\_1bazady > div")) //path
    //await element.click()
    //await driver.actions({ bridge: true }).moveToElement(element).release().perform()
  }

  async enterSearchText(SearchStr, driver ){
    const element2=  await driver.findElement(By.className("_1g5dvk1")) //path
    await element2.click()
    await driver.sleep(2000)
    element2.sendKeys(SearchStr)
  }

  async verifySearchResult (SearchStr, driver){
    await this.isElementEqualToExpected($('h3=Discounts'), 'Discounts')
    await this.isElementEqualToExpected($('span=Samsung'), 'Samsung')

  // await   assert( driver.findElement(By.xpath("//h3[contains(.,\'Discounts\')]")).isSelected())
  // await assert( driver.findElement(By.xpath("//span[contains(.,\'Samsung\')]")).isSelected())
  }

}

module.exports = simpleSearchPageObject
