import { CandidateExperienceFieldsModule } from './candidate-experience-fields.module';

describe('CandidateExperienceFieldsModule', () => {
  let candidateExperienceFieldsModule: CandidateExperienceFieldsModule;

  beforeEach(() => {
    candidateExperienceFieldsModule = new CandidateExperienceFieldsModule();
  });

  it('should create an instance', () => {
    expect(candidateExperienceFieldsModule).toBeTruthy();
  });
});
