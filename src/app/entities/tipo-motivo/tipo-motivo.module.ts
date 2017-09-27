import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { TipoMotivoSharedModule } from '../tipo-motivo/tipo-motivo-shared.module';

import { MotivoSharedModule } from '../motivo/motivo-shared.module';

import { TipoMotivoComponent } from './tipo-motivo.component';
import { TipoMotivoUpSertComponent } from './tipo-motivo-upsert.component';
import { TipoMotivoDetailsComponent } from './tipo-motivo-details.component';
import { TipoMotivoService } from './tipo-motivo.service';

import { tipoMotivoRoutes } from './tipo-motivo.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(tipoMotivoRoutes),
    EntitiesSharedModule,
    TipoMotivoSharedModule,    
    MotivoSharedModule    
  ],
  declarations: [
    TipoMotivoComponent,
    TipoMotivoUpSertComponent,
    TipoMotivoDetailsComponent
  ],
  providers: [ TipoMotivoService ]
})
export class TipoMotivoModule { }
