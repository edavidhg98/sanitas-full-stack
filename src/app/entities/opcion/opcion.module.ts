import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { OpcionSharedModule } from '../opcion/opcion-shared.module';


import { OpcionComponent } from './opcion.component';
import { OpcionUpSertComponent } from './opcion-upsert.component';
import { OpcionDetailsComponent } from './opcion-details.component';
import { OpcionService } from './opcion.service';

import { opcionRoutes } from './opcion.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(opcionRoutes),
    EntitiesSharedModule,
    OpcionSharedModule    
  ],
  declarations: [
    OpcionComponent,
    OpcionUpSertComponent,
    OpcionDetailsComponent
  ],
  providers: [ OpcionService ]
})
export class OpcionModule { }
