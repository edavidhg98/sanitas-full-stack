import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { RecalculoAutomaticoListComponent } from './recalculo-automatico-list.component';
import { RecalculoAutomaticoService } from './recalculo-automatico.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    RecalculoAutomaticoListComponent
  ],
  declarations: [
    RecalculoAutomaticoListComponent
  ],
  providers: [RecalculoAutomaticoService]
})
export class RecalculoAutomaticoSharedModule { }
