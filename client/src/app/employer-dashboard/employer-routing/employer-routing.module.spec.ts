import { EmployerRoutingModule } from './employer-routing.module';

describe('EmployerRoutingModule', () => {
  let employerRoutingModule: EmployerRoutingModule;

  beforeEach(() => {
    employerRoutingModule = new EmployerRoutingModule();
  });

  it('should create an instance', () => {
    expect(employerRoutingModule).toBeTruthy();
  });
});
