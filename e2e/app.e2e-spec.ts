import { CookeryPage } from './app.po';

describe('cookery App', () => {
  let page: CookeryPage;

  beforeEach(() => {
    page = new CookeryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
