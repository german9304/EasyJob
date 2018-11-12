import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {  candidateFieldsRoutes } from './routes';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(candidateFieldsRoutes)
  ],
  declarations: []
})
export class ExpEduResFieldsRoutingModule { }
