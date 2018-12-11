import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { CandProfileComponent } from './cand-profile/cand-profile.component';
import { FormRow1Component } from './form-row1/form-row1.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ProfileInfoComponent,
    ContactInfoComponent,
    CandProfileComponent,
    FormRow1Component
  ],
  exports: [CandProfileComponent]
})
export class ContactInfoModule {}
