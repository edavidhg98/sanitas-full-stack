import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { EncabezadoCatalogoListComponent } from './encabezado-catalogo-list.component';
import { EncabezadoCatalogoService } from './encabezado-catalogo.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    EncabezadoCatalogoListComponent
  ],
  declarations: [
    EncabezadoCatalogoListComponent
  ],
  providers: [EncabezadoCatalogoService]
})
export class EncabezadoCatalogoSharedModule { }
