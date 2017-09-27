import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { RecargoSharedModule } from '../recargo/recargo-shared.module';

import { PrestadorSharedModule } from '../prestador/prestador-shared.module';

import { RecargoComponent } from './recargo.component';
import { RecargoUpSertComponent } from './recargo-upsert.component';
import { RecargoDetailsComponent } from './recargo-details.component';
import { RecargoService } from './recargo.service';

import { recargoRoutes } from './recargo.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(recargoRoutes),
    EntitiesSharedModule,
    RecargoSharedModule,    
    PrestadorSharedModule    
  ],
  declarations: [
    RecargoComponent,
    RecargoUpSertComponent,
    RecargoDetailsComponent
  ],
  providers: [ RecargoService ]
})
export class RecargoModule { }
