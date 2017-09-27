import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { TipoPlanListComponent } from './tipo-plan-list.component';
import { TipoPlanService } from './tipo-plan.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    TipoPlanListComponent
  ],
  declarations: [
    TipoPlanListComponent
  ],
  providers: [TipoPlanService]
})
export class TipoPlanSharedModule { }
