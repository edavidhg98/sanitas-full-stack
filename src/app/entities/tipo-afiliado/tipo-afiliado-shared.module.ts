import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { TipoAfiliadoListComponent } from './tipo-afiliado-list.component';
import { TipoAfiliadoService } from './tipo-afiliado.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    TipoAfiliadoListComponent
  ],
  declarations: [
    TipoAfiliadoListComponent
  ],
  providers: [TipoAfiliadoService]
})
export class TipoAfiliadoSharedModule { }
