const { Given, When, Then } = require('cucumber')
const assert = require('assert')
const {Builder, By, Key} = require('selenium-webdriver')
const SimpleSearchPageObject = require('../pageObjects/simpleSearchPageObject')

const simpleSearchPageObject = new SimpleSearchPageObject()    

Given('I am on the studentbeans homepage', {timeout:10000}, async function () {
  driver = await new Builder().forBrowser('chrome').build()
  await simpleSearchPageObject.goToHomePage()
  await driver.manage().window().setRect({ width: 1338, height: 839 })
  await simpleSearchPageObject.verifyHomePage()
})

Given('I open the search bar', {timeout:10000},  async function () {
  await simpleSearchPageObject.goToSearchpage()
  await simpleSearchPageObject.openSearchPage()
})

When('I enter "Samsung"', {timeout:10000},  async function () {
  let SearchStr = "Samsung"
  await simpleSearchPageObject.enterSearchText(SearchStr )
})

Then('I should be shown a search listing for "Samsung"', {timeout:10000},  async function () {
  let SearchStr = "Samsung"
  await simpleSearchPageObject.verifySearchResult(SearchStr)
})