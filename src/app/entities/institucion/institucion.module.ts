import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { InstitucionSharedModule } from '../institucion/institucion-shared.module';


import { InstitucionComponent } from './institucion.component';
import { InstitucionUpSertComponent } from './institucion-upsert.component';
import { InstitucionDetailsComponent } from './institucion-details.component';
import { InstitucionService } from './institucion.service';

import { institucionRoutes } from './institucion.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(institucionRoutes),
    EntitiesSharedModule,
    InstitucionSharedModule    
  ],
  declarations: [
    InstitucionComponent,
    InstitucionUpSertComponent,
    InstitucionDetailsComponent
  ],
  providers: [ InstitucionService ]
})
export class InstitucionModule { }
