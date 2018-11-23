import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandSkillsComponent } from './cand-skills/cand-skills.component';
import { ProfilePercentComponent } from './profile-percent/profile-percent.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CandSkillsComponent, ProfilePercentComponent]
})
export class ProfileInfoExtraModule { }
