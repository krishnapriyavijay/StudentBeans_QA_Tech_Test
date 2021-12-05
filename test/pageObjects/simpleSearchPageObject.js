const ParentPageObject = require('./parentPageObject')
const {By, Key, Builder} = require('selenium-webdriver')
const assert = require('assert')

class simpleSearchPageObject extends ParentPageObject {

  goToHomePage () {
    // the below url call is relative to the base url in the wdio.conf.js so the below call will actually just result in going straight to the base url
    browser.url('')
  }

  verifyHomePage () {
    this.isElementEqualToExpected($('h2=Recommended For You'), 'Recommended For You')
  }

  goToSearchpage (){
    const element = driver.findElement(By.name("query"))
    driver.actions({ bridge: true }).moveToElement(element).clickAndHold().perform()
  }

  openSearchPage(){
    const element =  driver.findElement(By.css(".\\_1bazady > div")) //path
     driver.actions({ bridge: true }).moveToElement(element).release().perform()
  }

  enterSearchText(SearchStr ){
    driver.findElement(By.xpath("//div[@id=\'home_root\']/div/nav/div")).click()
    driver.findElement(By.xpath("//input[@value=\'Samsung\']")).sendKeys(SearchStr )
  }

  verifySearchResult (SearchStr){
    assert( driver.findElement(By.xpath("//h3[contains(.,\'Discounts\')]")).isSelected())
    assert( driver.findElement(By.xpath("//span[contains(.,\'Samsung\')]")).isSelected())
  }

}

module.exports = simpleSearchPageObject
