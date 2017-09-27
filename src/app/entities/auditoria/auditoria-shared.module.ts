import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { AuditoriaListComponent } from './auditoria-list.component';
import { AuditoriaService } from './auditoria.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    AuditoriaListComponent
  ],
  declarations: [
    AuditoriaListComponent
  ],
  providers: [AuditoriaService]
})
export class AuditoriaSharedModule { }
