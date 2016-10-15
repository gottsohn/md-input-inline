import { MdInputInlinePage } from './app.po';

describe('md-input-inline App', function() {
  let page: MdInputInlinePage;

  beforeEach(() => {
    page = new MdInputInlinePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
