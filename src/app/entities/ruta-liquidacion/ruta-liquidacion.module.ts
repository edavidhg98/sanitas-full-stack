import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { RutaLiquidacionSharedModule } from '../ruta-liquidacion/ruta-liquidacion-shared.module';


import { RutaLiquidacionComponent } from './ruta-liquidacion.component';
import { RutaLiquidacionUpSertComponent } from './ruta-liquidacion-upsert.component';
import { RutaLiquidacionDetailsComponent } from './ruta-liquidacion-details.component';
import { RutaLiquidacionService } from './ruta-liquidacion.service';

import { rutaLiquidacionRoutes } from './ruta-liquidacion.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(rutaLiquidacionRoutes),
    EntitiesSharedModule,
    RutaLiquidacionSharedModule    
  ],
  declarations: [
    RutaLiquidacionComponent,
    RutaLiquidacionUpSertComponent,
    RutaLiquidacionDetailsComponent
  ],
  providers: [ RutaLiquidacionService ]
})
export class RutaLiquidacionModule { }
