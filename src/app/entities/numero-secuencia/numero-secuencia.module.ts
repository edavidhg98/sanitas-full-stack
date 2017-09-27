import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { NumeroSecuenciaSharedModule } from '../numero-secuencia/numero-secuencia-shared.module';

import { SucursalSharedModule } from '../sucursal/sucursal-shared.module';

import { NumeroSecuenciaComponent } from './numero-secuencia.component';
import { NumeroSecuenciaUpSertComponent } from './numero-secuencia-upsert.component';
import { NumeroSecuenciaDetailsComponent } from './numero-secuencia-details.component';
import { NumeroSecuenciaService } from './numero-secuencia.service';

import { numeroSecuenciaRoutes } from './numero-secuencia.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(numeroSecuenciaRoutes),
    EntitiesSharedModule,
    NumeroSecuenciaSharedModule,    
    SucursalSharedModule    
  ],
  declarations: [
    NumeroSecuenciaComponent,
    NumeroSecuenciaUpSertComponent,
    NumeroSecuenciaDetailsComponent
  ],
  providers: [ NumeroSecuenciaService ]
})
export class NumeroSecuenciaModule { }
