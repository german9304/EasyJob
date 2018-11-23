import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandSkillsComponent } from './cand-skills.component';

describe('CandSkillsComponent', () => {
  let component: CandSkillsComponent;
  let fixture: ComponentFixture<CandSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
