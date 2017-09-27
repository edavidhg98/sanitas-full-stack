import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { CensoServicioSharedModule } from '../censo-servicio/censo-servicio-shared.module';

import { SucursalSharedModule } from '../sucursal/sucursal-shared.module';

import { CensoServicioComponent } from './censo-servicio.component';
import { CensoServicioUpSertComponent } from './censo-servicio-upsert.component';
import { CensoServicioDetailsComponent } from './censo-servicio-details.component';
import { CensoServicioService } from './censo-servicio.service';

import { censoServicioRoutes } from './censo-servicio.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(censoServicioRoutes),
    EntitiesSharedModule,
    CensoServicioSharedModule,    
    SucursalSharedModule    
  ],
  declarations: [
    CensoServicioComponent,
    CensoServicioUpSertComponent,
    CensoServicioDetailsComponent
  ],
  providers: [ CensoServicioService ]
})
export class CensoServicioModule { }
