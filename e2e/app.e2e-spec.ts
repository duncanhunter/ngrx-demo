import { NgrxDemoPage } from './app.po';

describe('ngrx-demo App', function() {
  let page: NgrxDemoPage;

  beforeEach(() => {
    page = new NgrxDemoPage();
  });

  it('should display message saying app work', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app work!');
  });
});
