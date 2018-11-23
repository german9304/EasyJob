import { CandidateFieldsRoutingModule } from './candidate-fields-routing.module';

describe('CandidateFieldsRoutingModule', () => {
  let candidateFieldsRoutingModule: CandidateFieldsRoutingModule;

  beforeEach(() => {
    candidateFieldsRoutingModule = new CandidateFieldsRoutingModule();
  });

  it('should create an instance', () => {
    expect(candidateFieldsRoutingModule).toBeTruthy();
  });
});
