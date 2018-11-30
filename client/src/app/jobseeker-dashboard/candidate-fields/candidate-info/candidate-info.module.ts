import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { CandProfileComponent } from './cand-profile/cand-profile.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ProfileInfoComponent,
    ContactInfoComponent,
    CandProfileComponent
  ],
  exports: [CandProfileComponent]
})
export class ContactInfoModule {}
