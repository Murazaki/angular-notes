import { AngularBaseAppPage } from './app.po';

describe('angular-base-app App', function() {
  let page: AngularBaseAppPage;

  beforeEach(() => {
    page = new AngularBaseAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
