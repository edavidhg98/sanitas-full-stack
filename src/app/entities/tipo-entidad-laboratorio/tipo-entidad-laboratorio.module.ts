import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { TipoEntidadLaboratorioSharedModule } from '../tipo-entidad-laboratorio/tipo-entidad-laboratorio-shared.module';


import { TipoEntidadLaboratorioComponent } from './tipo-entidad-laboratorio.component';
import { TipoEntidadLaboratorioUpSertComponent } from './tipo-entidad-laboratorio-upsert.component';
import { TipoEntidadLaboratorioDetailsComponent } from './tipo-entidad-laboratorio-details.component';
import { TipoEntidadLaboratorioService } from './tipo-entidad-laboratorio.service';

import { tipoEntidadLaboratorioRoutes } from './tipo-entidad-laboratorio.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(tipoEntidadLaboratorioRoutes),
    EntitiesSharedModule,
    TipoEntidadLaboratorioSharedModule    
  ],
  declarations: [
    TipoEntidadLaboratorioComponent,
    TipoEntidadLaboratorioUpSertComponent,
    TipoEntidadLaboratorioDetailsComponent
  ],
  providers: [ TipoEntidadLaboratorioService ]
})
export class TipoEntidadLaboratorioModule { }
