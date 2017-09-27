import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { ParFormularioListComponent } from './par-formulario-list.component';
import { ParFormularioService } from './par-formulario.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    ParFormularioListComponent
  ],
  declarations: [
    ParFormularioListComponent
  ],
  providers: [ParFormularioService]
})
export class ParFormularioSharedModule { }
