const TEN_SECOND_TIMEOUT = 10000
const assert = require('assert')

class ParentPageObject {
  isElementEqualToExpected (element, expectedText) {
    browser.waitUntil(
      () => {
        const errorMessage = 'actual does not equal expected'
        return expect(element.getText(), errorMessage).to.equal(expectedText)
      },
      TEN_SECOND_TIMEOUT,
      'Text does not match expected'
    )
  }

  //othger functions
  async isElementVisible(element) {
    try {
      const ele = await this.driver.findElement.call(this, element);
      return await ele.isDisplayed();
    } catch (error) {
      return assert.ok(false,
        `--> Error Description: Element is not Visible: ${error}`);
    }
  }
  //===

  async waitForPageLoad(duration) {
    const time = duration === undefined ? 3000 : duration;
    return await this.driver.sleep(time);
  }

}

module.exports = ParentPageObject
