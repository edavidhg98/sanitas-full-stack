import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { SalasSharedModule } from '../salas/salas-shared.module';

import { SucursalSharedModule } from '../sucursal/sucursal-shared.module';

import { SalasComponent } from './salas.component';
import { SalasUpSertComponent } from './salas-upsert.component';
import { SalasDetailsComponent } from './salas-details.component';
import { SalasService } from './salas.service';

import { salasRoutes } from './salas.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(salasRoutes),
    EntitiesSharedModule,
    SalasSharedModule,    
    SucursalSharedModule    
  ],
  declarations: [
    SalasComponent,
    SalasUpSertComponent,
    SalasDetailsComponent
  ],
  providers: [ SalasService ]
})
export class SalasModule { }
