import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { CensoTrasladoSharedModule } from '../censo-traslado/censo-traslado-shared.module';

import { CamaSharedModule } from '../cama/cama-shared.module';
import { MotivoSharedModule } from '../motivo/motivo-shared.module';

import { CensoTrasladoComponent } from './censo-traslado.component';
import { CensoTrasladoUpSertComponent } from './censo-traslado-upsert.component';
import { CensoTrasladoDetailsComponent } from './censo-traslado-details.component';
import { CensoTrasladoService } from './censo-traslado.service';

import { censoTrasladoRoutes } from './censo-traslado.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(censoTrasladoRoutes),
    EntitiesSharedModule,
    CensoTrasladoSharedModule,    
    CamaSharedModule,    
    MotivoSharedModule    
  ],
  declarations: [
    CensoTrasladoComponent,
    CensoTrasladoUpSertComponent,
    CensoTrasladoDetailsComponent
  ],
  providers: [ CensoTrasladoService ]
})
export class CensoTrasladoModule { }
