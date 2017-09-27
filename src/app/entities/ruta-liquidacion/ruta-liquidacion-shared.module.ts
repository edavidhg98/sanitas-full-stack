import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { RutaLiquidacionListComponent } from './ruta-liquidacion-list.component';
import { RutaLiquidacionService } from './ruta-liquidacion.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    RutaLiquidacionListComponent
  ],
  declarations: [
    RutaLiquidacionListComponent
  ],
  providers: [RutaLiquidacionService]
})
export class RutaLiquidacionSharedModule { }
