import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { MedicoSucursalSharedModule } from '../medico-sucursal/medico-sucursal-shared.module';


import { MedicoSucursalComponent } from './medico-sucursal.component';
import { MedicoSucursalUpSertComponent } from './medico-sucursal-upsert.component';
import { MedicoSucursalDetailsComponent } from './medico-sucursal-details.component';
import { MedicoSucursalService } from './medico-sucursal.service';

import { medicoSucursalRoutes } from './medico-sucursal.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(medicoSucursalRoutes),
    EntitiesSharedModule,
    MedicoSucursalSharedModule    
  ],
  declarations: [
    MedicoSucursalComponent,
    MedicoSucursalUpSertComponent,
    MedicoSucursalDetailsComponent
  ],
  providers: [ MedicoSucursalService ]
})
export class MedicoSucursalModule { }
