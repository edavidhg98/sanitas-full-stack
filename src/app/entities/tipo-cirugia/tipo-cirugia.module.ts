import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { TipoCirugiaSharedModule } from '../tipo-cirugia/tipo-cirugia-shared.module';

import { EntidadSharedModule } from '../entidad/entidad-shared.module';

import { TipoCirugiaComponent } from './tipo-cirugia.component';
import { TipoCirugiaUpSertComponent } from './tipo-cirugia-upsert.component';
import { TipoCirugiaDetailsComponent } from './tipo-cirugia-details.component';
import { TipoCirugiaService } from './tipo-cirugia.service';

import { tipoCirugiaRoutes } from './tipo-cirugia.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(tipoCirugiaRoutes),
    EntitiesSharedModule,
    TipoCirugiaSharedModule,    
    EntidadSharedModule    
  ],
  declarations: [
    TipoCirugiaComponent,
    TipoCirugiaUpSertComponent,
    TipoCirugiaDetailsComponent
  ],
  providers: [ TipoCirugiaService ]
})
export class TipoCirugiaModule { }
