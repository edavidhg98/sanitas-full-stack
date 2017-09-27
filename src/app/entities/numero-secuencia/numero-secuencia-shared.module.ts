import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { NumeroSecuenciaListComponent } from './numero-secuencia-list.component';
import { NumeroSecuenciaService } from './numero-secuencia.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    NumeroSecuenciaListComponent
  ],
  declarations: [
    NumeroSecuenciaListComponent
  ],
  providers: [NumeroSecuenciaService]
})
export class NumeroSecuenciaSharedModule { }
