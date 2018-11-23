import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';

@NgModule({
  imports: [CommonModule],

  declarations: [ProfileInfoComponent, ContactInfoComponent]
})
export class ContactInfoModule {}
