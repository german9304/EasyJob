import { JobseekerDashboardModule } from './jobseeker-dashboard.module';

describe('JobseekerDashboardModule', () => {
  let jobseekerDashboardModule: JobseekerDashboardModule;

  beforeEach(() => {
    jobseekerDashboardModule = new JobseekerDashboardModule();
  });

  it('should create an instance', () => {
    expect(jobseekerDashboardModule).toBeTruthy();
  });
});
