import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, RouterLinkActive } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CandidateFieldsRoutingModule } from './candidate-fields-routing/candidate-fields-routing.module';
import { CandFieldsExpModule } from './cand-fields-exp/cand-fields-exp.module';
import { ContactInfoModule } from './candidate-info/candidate-info.module';
import { ProfileInfoExtraModule } from './profile-info-extra/profile-info-extra.module';

import { TestComponent } from './testing/test.component';
import { TestViewComponent } from './testing/test-view/test-view.component';
import { CandidateFieldsComponent } from './candidate-fields/candidate-fields.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CandidateFieldsRoutingModule,
    CandFieldsExpModule,
    ContactInfoModule,
    ProfileInfoExtraModule
  ],
  declarations: [CandidateFieldsComponent],
  exports: []
})
export class CandidateFieldsModule {}
