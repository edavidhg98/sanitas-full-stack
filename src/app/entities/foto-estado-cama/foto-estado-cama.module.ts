import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { FotoEstadoCamaSharedModule } from '../foto-estado-cama/foto-estado-cama-shared.module';

import { CamaSharedModule } from '../cama/cama-shared.module';

import { FotoEstadoCamaComponent } from './foto-estado-cama.component';
import { FotoEstadoCamaUpSertComponent } from './foto-estado-cama-upsert.component';
import { FotoEstadoCamaDetailsComponent } from './foto-estado-cama-details.component';
import { FotoEstadoCamaService } from './foto-estado-cama.service';

import { fotoEstadoCamaRoutes } from './foto-estado-cama.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(fotoEstadoCamaRoutes),
    EntitiesSharedModule,
    FotoEstadoCamaSharedModule,    
    CamaSharedModule    
  ],
  declarations: [
    FotoEstadoCamaComponent,
    FotoEstadoCamaUpSertComponent,
    FotoEstadoCamaDetailsComponent
  ],
  providers: [ FotoEstadoCamaService ]
})
export class FotoEstadoCamaModule { }
