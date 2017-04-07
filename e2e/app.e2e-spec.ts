import { RunningGroupPage } from './app.po';

describe('running-group App', function() {
  let page: RunningGroupPage;

  beforeEach(() => {
    page = new RunningGroupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
