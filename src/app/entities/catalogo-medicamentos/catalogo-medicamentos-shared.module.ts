import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { CatalogoMedicamentosListComponent } from './catalogo-medicamentos-list.component';
import { CatalogoMedicamentosService } from './catalogo-medicamentos.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    CatalogoMedicamentosListComponent
  ],
  declarations: [
    CatalogoMedicamentosListComponent
  ],
  providers: [CatalogoMedicamentosService]
})
export class CatalogoMedicamentosSharedModule { }
