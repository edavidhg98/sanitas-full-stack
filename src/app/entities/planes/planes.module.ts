import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { PlanesSharedModule } from '../planes/planes-shared.module';

import { EntidadSharedModule } from '../entidad/entidad-shared.module';

import { PlanesComponent } from './planes.component';
import { PlanesUpSertComponent } from './planes-upsert.component';
import { PlanesDetailsComponent } from './planes-details.component';
import { PlanesService } from './planes.service';

import { planesRoutes } from './planes.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(planesRoutes),
    EntitiesSharedModule,
    PlanesSharedModule,    
    EntidadSharedModule    
  ],
  declarations: [
    PlanesComponent,
    PlanesUpSertComponent,
    PlanesDetailsComponent
  ],
  providers: [ PlanesService ]
})
export class PlanesModule { }
