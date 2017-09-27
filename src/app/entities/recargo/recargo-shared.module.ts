import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { RecargoListComponent } from './recargo-list.component';
import { RecargoService } from './recargo.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    RecargoListComponent
  ],
  declarations: [
    RecargoListComponent
  ],
  providers: [RecargoService]
})
export class RecargoSharedModule { }
