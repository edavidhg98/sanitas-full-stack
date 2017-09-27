import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { EntidadAdmisionSharedModule } from '../entidad-admision/entidad-admision-shared.module';

import { SucursalSharedModule } from '../sucursal/sucursal-shared.module';
import { EntidadSharedModule } from '../entidad/entidad-shared.module';

import { EntidadAdmisionComponent } from './entidad-admision.component';
import { EntidadAdmisionUpSertComponent } from './entidad-admision-upsert.component';
import { EntidadAdmisionDetailsComponent } from './entidad-admision-details.component';
import { EntidadAdmisionService } from './entidad-admision.service';

import { entidadAdmisionRoutes } from './entidad-admision.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(entidadAdmisionRoutes),
    EntitiesSharedModule,
    EntidadAdmisionSharedModule,    
    SucursalSharedModule,    
    EntidadSharedModule    
  ],
  declarations: [
    EntidadAdmisionComponent,
    EntidadAdmisionUpSertComponent,
    EntidadAdmisionDetailsComponent
  ],
  providers: [ EntidadAdmisionService ]
})
export class EntidadAdmisionModule { }
