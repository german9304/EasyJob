import { EmployerDashboardModule } from './employer-dashboard.module';

describe('EmployerDashboardModule', () => {
  let employerDashboardModule: EmployerDashboardModule;

  beforeEach(() => {
    employerDashboardModule = new EmployerDashboardModule();
  });

  it('should create an instance', () => {
    expect(employerDashboardModule).toBeTruthy();
  });
});
