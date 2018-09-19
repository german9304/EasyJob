import { AppDashboardRoutingModule } from './app-dashboard-routing.module';

describe('AppDashboardRoutingModule', () => {
  let appDashboardRoutingModule: AppDashboardRoutingModule;

  beforeEach(() => {
    appDashboardRoutingModule = new AppDashboardRoutingModule();
  });

  it('should create an instance', () => {
    expect(appDashboardRoutingModule).toBeTruthy();
  });
});
