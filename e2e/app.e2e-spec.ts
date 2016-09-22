import { AgenaIoPage } from './app.po';

describe('agena-io App', function() {
  let page: AgenaIoPage;

  beforeEach(() => {
    page = new AgenaIoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
