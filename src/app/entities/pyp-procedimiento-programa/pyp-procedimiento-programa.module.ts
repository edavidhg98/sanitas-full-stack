import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { PypProcedimientoProgramaSharedModule } from '../pyp-procedimiento-programa/pyp-procedimiento-programa-shared.module';

import { MotivoSharedModule } from '../motivo/motivo-shared.module';
import { ProcedimientoSharedModule } from '../procedimiento/procedimiento-shared.module';
import { PypProgramasSharedModule } from '../pyp-programas/pyp-programas-shared.module';

import { PypProcedimientoProgramaComponent } from './pyp-procedimiento-programa.component';
import { PypProcedimientoProgramaUpSertComponent } from './pyp-procedimiento-programa-upsert.component';
import { PypProcedimientoProgramaDetailsComponent } from './pyp-procedimiento-programa-details.component';
import { PypProcedimientoProgramaService } from './pyp-procedimiento-programa.service';

import { pypProcedimientoProgramaRoutes } from './pyp-procedimiento-programa.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(pypProcedimientoProgramaRoutes),
    EntitiesSharedModule,
    PypProcedimientoProgramaSharedModule,    
    MotivoSharedModule,    
    ProcedimientoSharedModule,    
    PypProgramasSharedModule    
  ],
  declarations: [
    PypProcedimientoProgramaComponent,
    PypProcedimientoProgramaUpSertComponent,
    PypProcedimientoProgramaDetailsComponent
  ],
  providers: [ PypProcedimientoProgramaService ]
})
export class PypProcedimientoProgramaModule { }
