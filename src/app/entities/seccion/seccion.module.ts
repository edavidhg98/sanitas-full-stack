import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { SeccionSharedModule } from '../seccion/seccion-shared.module';

import { CamaSharedModule } from '../cama/cama-shared.module';
import { SucursalSharedModule } from '../sucursal/sucursal-shared.module';

import { SeccionComponent } from './seccion.component';
import { SeccionUpSertComponent } from './seccion-upsert.component';
import { SeccionDetailsComponent } from './seccion-details.component';
import { SeccionService } from './seccion.service';

import { seccionRoutes } from './seccion.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(seccionRoutes),
    EntitiesSharedModule,
    SeccionSharedModule,    
    CamaSharedModule,    
    SucursalSharedModule    
  ],
  declarations: [
    SeccionComponent,
    SeccionUpSertComponent,
    SeccionDetailsComponent
  ],
  providers: [ SeccionService ]
})
export class SeccionModule { }
