import { GeniusPage } from './app.po';

describe('genius App', () => {
  let page: GeniusPage;

  beforeEach(() => {
    page = new GeniusPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
