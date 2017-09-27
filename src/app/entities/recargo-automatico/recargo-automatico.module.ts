import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { RecargoAutomaticoSharedModule } from '../recargo-automatico/recargo-automatico-shared.module';

import { EntidadSharedModule } from '../entidad/entidad-shared.module';

import { RecargoAutomaticoComponent } from './recargo-automatico.component';
import { RecargoAutomaticoUpSertComponent } from './recargo-automatico-upsert.component';
import { RecargoAutomaticoDetailsComponent } from './recargo-automatico-details.component';
import { RecargoAutomaticoService } from './recargo-automatico.service';

import { recargoAutomaticoRoutes } from './recargo-automatico.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(recargoAutomaticoRoutes),
    EntitiesSharedModule,
    RecargoAutomaticoSharedModule,    
    EntidadSharedModule    
  ],
  declarations: [
    RecargoAutomaticoComponent,
    RecargoAutomaticoUpSertComponent,
    RecargoAutomaticoDetailsComponent
  ],
  providers: [ RecargoAutomaticoService ]
})
export class RecargoAutomaticoModule { }
