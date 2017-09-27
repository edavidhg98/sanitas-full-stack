import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { VacunasSharedModule } from '../vacunas/vacunas-shared.module';

import { TarifaVacunacionSharedModule } from '../tarifa-vacunacion/tarifa-vacunacion-shared.module';

import { VacunasComponent } from './vacunas.component';
import { VacunasUpSertComponent } from './vacunas-upsert.component';
import { VacunasDetailsComponent } from './vacunas-details.component';
import { VacunasService } from './vacunas.service';

import { vacunasRoutes } from './vacunas.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(vacunasRoutes),
    EntitiesSharedModule,
    VacunasSharedModule,    
    TarifaVacunacionSharedModule    
  ],
  declarations: [
    VacunasComponent,
    VacunasUpSertComponent,
    VacunasDetailsComponent
  ],
  providers: [ VacunasService ]
})
export class VacunasModule { }
