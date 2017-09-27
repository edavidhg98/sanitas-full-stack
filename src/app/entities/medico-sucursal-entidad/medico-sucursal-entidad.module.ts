import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { MedicoSucursalEntidadSharedModule } from '../medico-sucursal-entidad/medico-sucursal-entidad-shared.module';


import { MedicoSucursalEntidadComponent } from './medico-sucursal-entidad.component';
import { MedicoSucursalEntidadUpSertComponent } from './medico-sucursal-entidad-upsert.component';
import { MedicoSucursalEntidadDetailsComponent } from './medico-sucursal-entidad-details.component';
import { MedicoSucursalEntidadService } from './medico-sucursal-entidad.service';

import { medicoSucursalEntidadRoutes } from './medico-sucursal-entidad.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(medicoSucursalEntidadRoutes),
    EntitiesSharedModule,
    MedicoSucursalEntidadSharedModule    
  ],
  declarations: [
    MedicoSucursalEntidadComponent,
    MedicoSucursalEntidadUpSertComponent,
    MedicoSucursalEntidadDetailsComponent
  ],
  providers: [ MedicoSucursalEntidadService ]
})
export class MedicoSucursalEntidadModule { }
