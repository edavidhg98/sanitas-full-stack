import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { PypProgramasSharedModule } from '../pyp-programas/pyp-programas-shared.module';

import { PypProcedimientoProgramaSharedModule } from '../pyp-procedimiento-programa/pyp-procedimiento-programa-shared.module';

import { PypProgramasComponent } from './pyp-programas.component';
import { PypProgramasUpSertComponent } from './pyp-programas-upsert.component';
import { PypProgramasDetailsComponent } from './pyp-programas-details.component';
import { PypProgramasService } from './pyp-programas.service';

import { pypProgramasRoutes } from './pyp-programas.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(pypProgramasRoutes),
    EntitiesSharedModule,
    PypProgramasSharedModule,    
    PypProcedimientoProgramaSharedModule    
  ],
  declarations: [
    PypProgramasComponent,
    PypProgramasUpSertComponent,
    PypProgramasDetailsComponent
  ],
  providers: [ PypProgramasService ]
})
export class PypProgramasModule { }
