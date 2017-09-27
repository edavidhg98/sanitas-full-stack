import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { PrestadorCentroCostoUnicoSharedModule } from '../prestador-centro-costo-unico/prestador-centro-costo-unico-shared.module';

import { PrestadorSharedModule } from '../prestador/prestador-shared.module';

import { PrestadorCentroCostoUnicoComponent } from './prestador-centro-costo-unico.component';
import { PrestadorCentroCostoUnicoUpSertComponent } from './prestador-centro-costo-unico-upsert.component';
import { PrestadorCentroCostoUnicoDetailsComponent } from './prestador-centro-costo-unico-details.component';
import { PrestadorCentroCostoUnicoService } from './prestador-centro-costo-unico.service';

import { prestadorCentroCostoUnicoRoutes } from './prestador-centro-costo-unico.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(prestadorCentroCostoUnicoRoutes),
    EntitiesSharedModule,
    PrestadorCentroCostoUnicoSharedModule,    
    PrestadorSharedModule    
  ],
  declarations: [
    PrestadorCentroCostoUnicoComponent,
    PrestadorCentroCostoUnicoUpSertComponent,
    PrestadorCentroCostoUnicoDetailsComponent
  ],
  providers: [ PrestadorCentroCostoUnicoService ]
})
export class PrestadorCentroCostoUnicoModule { }
