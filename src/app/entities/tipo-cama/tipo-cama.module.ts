import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { TipoCamaSharedModule } from '../tipo-cama/tipo-cama-shared.module';

import { CamaSharedModule } from '../cama/cama-shared.module';

import { TipoCamaComponent } from './tipo-cama.component';
import { TipoCamaUpSertComponent } from './tipo-cama-upsert.component';
import { TipoCamaDetailsComponent } from './tipo-cama-details.component';
import { TipoCamaService } from './tipo-cama.service';

import { tipoCamaRoutes } from './tipo-cama.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(tipoCamaRoutes),
    EntitiesSharedModule,
    TipoCamaSharedModule,    
    CamaSharedModule    
  ],
  declarations: [
    TipoCamaComponent,
    TipoCamaUpSertComponent,
    TipoCamaDetailsComponent
  ],
  providers: [ TipoCamaService ]
})
export class TipoCamaModule { }
