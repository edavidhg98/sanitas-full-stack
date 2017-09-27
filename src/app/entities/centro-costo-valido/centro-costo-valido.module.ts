import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { CentroCostoValidoSharedModule } from '../centro-costo-valido/centro-costo-valido-shared.module';

import { PrestadorSharedModule } from '../prestador/prestador-shared.module';

import { CentroCostoValidoComponent } from './centro-costo-valido.component';
import { CentroCostoValidoUpSertComponent } from './centro-costo-valido-upsert.component';
import { CentroCostoValidoDetailsComponent } from './centro-costo-valido-details.component';
import { CentroCostoValidoService } from './centro-costo-valido.service';

import { centroCostoValidoRoutes } from './centro-costo-valido.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(centroCostoValidoRoutes),
    EntitiesSharedModule,
    CentroCostoValidoSharedModule,    
    PrestadorSharedModule    
  ],
  declarations: [
    CentroCostoValidoComponent,
    CentroCostoValidoUpSertComponent,
    CentroCostoValidoDetailsComponent
  ],
  providers: [ CentroCostoValidoService ]
})
export class CentroCostoValidoModule { }
