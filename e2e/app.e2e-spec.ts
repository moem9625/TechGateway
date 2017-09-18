import { TechGatewayPage } from './app.po';

describe('tech-gateway App', () => {
  let page: TechGatewayPage;

  beforeEach(() => {
    page = new TechGatewayPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
