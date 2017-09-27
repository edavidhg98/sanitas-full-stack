import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { OcupacionSharedModule } from '../ocupacion/ocupacion-shared.module';


import { OcupacionComponent } from './ocupacion.component';
import { OcupacionUpSertComponent } from './ocupacion-upsert.component';
import { OcupacionDetailsComponent } from './ocupacion-details.component';
import { OcupacionService } from './ocupacion.service';

import { ocupacionRoutes } from './ocupacion.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ocupacionRoutes),
    EntitiesSharedModule,
    OcupacionSharedModule    
  ],
  declarations: [
    OcupacionComponent,
    OcupacionUpSertComponent,
    OcupacionDetailsComponent
  ],
  providers: [ OcupacionService ]
})
export class OcupacionModule { }
