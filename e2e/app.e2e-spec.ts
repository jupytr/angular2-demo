import { AgenaIoPage } from './app.po';

describe('agena-io App', function() {
  let page: AgenaIoPage;

  beforeEach(() => {
    page = new AgenaIoPage();
  });

  it('should display message saying app works', () => {
    AgenaIoPage.navigateTo();
    expect(AgenaIoPage.getParagraphText()).toEqual('app works!');
  });
});
