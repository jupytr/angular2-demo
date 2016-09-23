import { browser, element, by } from 'protractor/globals';

export class AgenaIoPage {
  static navigateTo() {
    return browser.get('/');
  }

  static getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
