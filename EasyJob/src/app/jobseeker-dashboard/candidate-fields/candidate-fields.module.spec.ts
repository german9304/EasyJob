import { CandidateFieldsModule } from './candidate-fields.module';

describe('CandidateExperienceFieldsModule', () => {
  let candidateFieldsModule: CandidateFieldsModule;

  beforeEach(() => {
    candidateFieldsModule = new CandidateFieldsModule();
  });

  it('should create an instance', () => {
    expect(candidateFieldsModule).toBeTruthy();
  });
});
