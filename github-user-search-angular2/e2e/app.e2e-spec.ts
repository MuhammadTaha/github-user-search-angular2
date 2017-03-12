import { GithubUserSearchAngular2Page } from './app.po';

describe('github-user-search-angular2 App', () => {
  let page: GithubUserSearchAngular2Page;

  beforeEach(() => {
    page = new GithubUserSearchAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
