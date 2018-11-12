import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, RouterLinkActive } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CandidateFieldsRoutingModule } from './candidate-fields-routing/candidate-fields-routing.module';
import { TestComponent } from './testing/test.component';
import { TestViewComponent } from './testing/test-view/test-view.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    CandidateFieldsRoutingModule
  ],
  declarations: [
  ],
  exports: []
})
export class CandidateFieldsModule {}
