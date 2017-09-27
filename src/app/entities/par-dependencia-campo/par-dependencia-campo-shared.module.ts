import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { ParDependenciaCampoListComponent } from './par-dependencia-campo-list.component';
import { ParDependenciaCampoService } from './par-dependencia-campo.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    ParDependenciaCampoListComponent
  ],
  declarations: [
    ParDependenciaCampoListComponent
  ],
  providers: [ParDependenciaCampoService]
})
export class ParDependenciaCampoSharedModule { }
