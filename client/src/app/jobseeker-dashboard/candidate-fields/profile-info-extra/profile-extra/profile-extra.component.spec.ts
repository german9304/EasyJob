import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileExtraComponent } from './profile-extra.component';

describe('ProfileExtraComponent', () => {
  let component: ProfileExtraComponent;
  let fixture: ComponentFixture<ProfileExtraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileExtraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileExtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
