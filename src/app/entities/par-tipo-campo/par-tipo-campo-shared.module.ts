import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { ParTipoCampoListComponent } from './par-tipo-campo-list.component';
import { ParTipoCampoService } from './par-tipo-campo.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    ParTipoCampoListComponent
  ],
  declarations: [
    ParTipoCampoListComponent
  ],
  providers: [ParTipoCampoService]
})
export class ParTipoCampoSharedModule { }
