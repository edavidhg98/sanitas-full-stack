import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { CamaPlanListComponent } from './cama-plan-list.component';
import { CamaPlanService } from './cama-plan.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    CamaPlanListComponent
  ],
  declarations: [
    CamaPlanListComponent
  ],
  providers: [CamaPlanService]
})
export class CamaPlanSharedModule { }
