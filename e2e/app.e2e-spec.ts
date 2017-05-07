import { IspHackerEarthPage } from './app.po';

describe('isp-hacker-earth App', () => {
  let page: IspHackerEarthPage;

  beforeEach(() => {
    page = new IspHackerEarthPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
