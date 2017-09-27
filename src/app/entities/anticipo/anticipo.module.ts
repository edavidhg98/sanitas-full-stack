import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { AnticipoSharedModule } from '../anticipo/anticipo-shared.module';

import { SucursalSharedModule } from '../sucursal/sucursal-shared.module';
import { EntidadSharedModule } from '../entidad/entidad-shared.module';
import { ProcedimientoSharedModule } from '../procedimiento/procedimiento-shared.module';

import { AnticipoComponent } from './anticipo.component';
import { AnticipoUpSertComponent } from './anticipo-upsert.component';
import { AnticipoDetailsComponent } from './anticipo-details.component';
import { AnticipoService } from './anticipo.service';

import { anticipoRoutes } from './anticipo.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(anticipoRoutes),
    EntitiesSharedModule,
    AnticipoSharedModule,    
    SucursalSharedModule,    
    EntidadSharedModule,    
    ProcedimientoSharedModule    
  ],
  declarations: [
    AnticipoComponent,
    AnticipoUpSertComponent,
    AnticipoDetailsComponent
  ],
  providers: [ AnticipoService ]
})
export class AnticipoModule { }
