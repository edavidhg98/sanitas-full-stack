import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { ProcedimientoNivelSharedModule } from '../procedimiento-nivel/procedimiento-nivel-shared.module';

import { ProcedimientoSharedModule } from '../procedimiento/procedimiento-shared.module';
import { SucursalSharedModule } from '../sucursal/sucursal-shared.module';

import { ProcedimientoNivelComponent } from './procedimiento-nivel.component';
import { ProcedimientoNivelUpSertComponent } from './procedimiento-nivel-upsert.component';
import { ProcedimientoNivelDetailsComponent } from './procedimiento-nivel-details.component';
import { ProcedimientoNivelService } from './procedimiento-nivel.service';

import { procedimientoNivelRoutes } from './procedimiento-nivel.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(procedimientoNivelRoutes),
    EntitiesSharedModule,
    ProcedimientoNivelSharedModule,    
    ProcedimientoSharedModule,    
    SucursalSharedModule    
  ],
  declarations: [
    ProcedimientoNivelComponent,
    ProcedimientoNivelUpSertComponent,
    ProcedimientoNivelDetailsComponent
  ],
  providers: [ ProcedimientoNivelService ]
})
export class ProcedimientoNivelModule { }
