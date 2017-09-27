import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { CarnetSharedModule } from '../carnet/carnet-shared.module';


import { CarnetComponent } from './carnet.component';
import { CarnetUpSertComponent } from './carnet-upsert.component';
import { CarnetDetailsComponent } from './carnet-details.component';
import { CarnetService } from './carnet.service';

import { carnetRoutes } from './carnet.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(carnetRoutes),
    EntitiesSharedModule,
    CarnetSharedModule    
  ],
  declarations: [
    CarnetComponent,
    CarnetUpSertComponent,
    CarnetDetailsComponent
  ],
  providers: [ CarnetService ]
})
export class CarnetModule { }
