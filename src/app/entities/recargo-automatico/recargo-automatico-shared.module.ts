import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { RecargoAutomaticoListComponent } from './recargo-automatico-list.component';
import { RecargoAutomaticoService } from './recargo-automatico.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    RecargoAutomaticoListComponent
  ],
  declarations: [
    RecargoAutomaticoListComponent
  ],
  providers: [RecargoAutomaticoService]
})
export class RecargoAutomaticoSharedModule { }
