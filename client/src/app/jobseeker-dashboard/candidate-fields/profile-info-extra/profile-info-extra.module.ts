import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandSkillsComponent } from './cand-skills/cand-skills.component';
import { ProfilePercentComponent } from './profile-percent/profile-percent.component';
import { ProfileExtraComponent } from './profile-extra/profile-extra.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CandSkillsComponent, ProfilePercentComponent, ProfileExtraComponent]
})
export class ProfileInfoExtraModule { }
