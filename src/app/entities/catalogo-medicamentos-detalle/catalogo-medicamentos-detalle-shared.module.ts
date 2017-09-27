import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { CatalogoMedicamentosDetalleListComponent } from './catalogo-medicamentos-detalle-list.component';
import { CatalogoMedicamentosDetalleService } from './catalogo-medicamentos-detalle.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    CatalogoMedicamentosDetalleListComponent
  ],
  declarations: [
    CatalogoMedicamentosDetalleListComponent
  ],
  providers: [CatalogoMedicamentosDetalleService]
})
export class CatalogoMedicamentosDetalleSharedModule { }
