import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { TipoMotivoListComponent } from './tipo-motivo-list.component';
import { TipoMotivoService } from './tipo-motivo.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    TipoMotivoListComponent
  ],
  declarations: [
    TipoMotivoListComponent
  ],
  providers: [TipoMotivoService]
})
export class TipoMotivoSharedModule { }
