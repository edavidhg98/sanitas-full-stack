import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { AuditoriaContratoListComponent } from './auditoria-contrato-list.component';
import { AuditoriaContratoService } from './auditoria-contrato.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    AuditoriaContratoListComponent
  ],
  declarations: [
    AuditoriaContratoListComponent
  ],
  providers: [AuditoriaContratoService]
})
export class AuditoriaContratoSharedModule { }
