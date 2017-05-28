import { ProjectManagementPage } from './app.po';

describe('project-management App', function() {
  let page: ProjectManagementPage;

  beforeEach(() => {
    page = new ProjectManagementPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
