import { StudentMngtPage } from './app.po';

describe('student-mngt App', () => {
  let page: StudentMngtPage;

  beforeEach(() => {
    page = new StudentMngtPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
