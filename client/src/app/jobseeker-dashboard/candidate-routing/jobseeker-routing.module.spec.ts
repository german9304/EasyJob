import { JobseekerRoutingModule } from './jobseeker-routing.module';

describe('JobseekerRoutingModule', () => {
  let jobseekerRoutingModule: JobseekerRoutingModule;

  beforeEach(() => {
    jobseekerRoutingModule = new JobseekerRoutingModule();
  });

  it('should create an instance', () => {
    expect(jobseekerRoutingModule).toBeTruthy();
  });
});
