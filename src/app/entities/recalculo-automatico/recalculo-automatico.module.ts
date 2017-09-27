import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { RecalculoAutomaticoSharedModule } from '../recalculo-automatico/recalculo-automatico-shared.module';

import { SucursalSharedModule } from '../sucursal/sucursal-shared.module';
import { EntidadSharedModule } from '../entidad/entidad-shared.module';

import { RecalculoAutomaticoComponent } from './recalculo-automatico.component';
import { RecalculoAutomaticoUpSertComponent } from './recalculo-automatico-upsert.component';
import { RecalculoAutomaticoDetailsComponent } from './recalculo-automatico-details.component';
import { RecalculoAutomaticoService } from './recalculo-automatico.service';

import { recalculoAutomaticoRoutes } from './recalculo-automatico.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(recalculoAutomaticoRoutes),
    EntitiesSharedModule,
    RecalculoAutomaticoSharedModule,    
    SucursalSharedModule,    
    EntidadSharedModule    
  ],
  declarations: [
    RecalculoAutomaticoComponent,
    RecalculoAutomaticoUpSertComponent,
    RecalculoAutomaticoDetailsComponent
  ],
  providers: [ RecalculoAutomaticoService ]
})
export class RecalculoAutomaticoModule { }
