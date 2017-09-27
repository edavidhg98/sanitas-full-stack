import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { TipoAnestesiaSharedModule } from '../tipo-anestesia/tipo-anestesia-shared.module';

import { ProcedimientoSharedModule } from '../procedimiento/procedimiento-shared.module';

import { TipoAnestesiaComponent } from './tipo-anestesia.component';
import { TipoAnestesiaUpSertComponent } from './tipo-anestesia-upsert.component';
import { TipoAnestesiaDetailsComponent } from './tipo-anestesia-details.component';
import { TipoAnestesiaService } from './tipo-anestesia.service';

import { tipoAnestesiaRoutes } from './tipo-anestesia.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(tipoAnestesiaRoutes),
    EntitiesSharedModule,
    TipoAnestesiaSharedModule,    
    ProcedimientoSharedModule    
  ],
  declarations: [
    TipoAnestesiaComponent,
    TipoAnestesiaUpSertComponent,
    TipoAnestesiaDetailsComponent
  ],
  providers: [ TipoAnestesiaService ]
})
export class TipoAnestesiaModule { }
