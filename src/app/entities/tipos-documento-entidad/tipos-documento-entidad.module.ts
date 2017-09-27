import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { TiposDocumentoEntidadSharedModule } from '../tipos-documento-entidad/tipos-documento-entidad-shared.module';

import { EntidadSharedModule } from '../entidad/entidad-shared.module';
import { TipoPlanSharedModule } from '../tipo-plan/tipo-plan-shared.module';

import { TiposDocumentoEntidadComponent } from './tipos-documento-entidad.component';
import { TiposDocumentoEntidadUpSertComponent } from './tipos-documento-entidad-upsert.component';
import { TiposDocumentoEntidadDetailsComponent } from './tipos-documento-entidad-details.component';
import { TiposDocumentoEntidadService } from './tipos-documento-entidad.service';

import { tiposDocumentoEntidadRoutes } from './tipos-documento-entidad.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(tiposDocumentoEntidadRoutes),
    EntitiesSharedModule,
    TiposDocumentoEntidadSharedModule,    
    EntidadSharedModule,    
    TipoPlanSharedModule    
  ],
  declarations: [
    TiposDocumentoEntidadComponent,
    TiposDocumentoEntidadUpSertComponent,
    TiposDocumentoEntidadDetailsComponent
  ],
  providers: [ TiposDocumentoEntidadService ]
})
export class TiposDocumentoEntidadModule { }
