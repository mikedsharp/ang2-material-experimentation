import { Ng2TestMaterialPage } from './app.po';

describe('ng2-test-material App', function() {
  let page: Ng2TestMaterialPage;

  beforeEach(() => {
    page = new Ng2TestMaterialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
