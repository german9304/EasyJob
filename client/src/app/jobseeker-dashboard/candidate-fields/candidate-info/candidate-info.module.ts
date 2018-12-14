import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { CandProfileComponent } from './cand-profile/cand-profile.component';
import { FormRow1Component } from './form-row1/form-row1.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfInfoRoutingModule } from './prof-info-routing/prof-info-routing.module';
import { FormRow2Component } from './form-row2/form-row2.component';
import { FormRow3Component } from './form-row3/form-row3.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, ProfInfoRoutingModule],
  declarations: [
    ProfileInfoComponent,
    ContactInfoComponent,
    CandProfileComponent,
    FormRow1Component,
    FormRow2Component,
    FormRow3Component
  ],
  exports: [CandProfileComponent]
})
export class ContactInfoModule {}
