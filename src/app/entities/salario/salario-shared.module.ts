import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { SalarioListComponent } from './salario-list.component';
import { SalarioService } from './salario.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    SalarioListComponent
  ],
  declarations: [
    SalarioListComponent
  ],
  providers: [SalarioService]
})
export class SalarioSharedModule { }
