import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { ParTipoCampoSharedModule } from '../par-tipo-campo/par-tipo-campo-shared.module';


import { ParTipoCampoComponent } from './par-tipo-campo.component';
import { ParTipoCampoUpSertComponent } from './par-tipo-campo-upsert.component';
import { ParTipoCampoDetailsComponent } from './par-tipo-campo-details.component';
import { ParTipoCampoService } from './par-tipo-campo.service';

import { parTipoCampoRoutes } from './par-tipo-campo.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(parTipoCampoRoutes),
    EntitiesSharedModule,
    ParTipoCampoSharedModule    
  ],
  declarations: [
    ParTipoCampoComponent,
    ParTipoCampoUpSertComponent,
    ParTipoCampoDetailsComponent
  ],
  providers: [ ParTipoCampoService ]
})
export class ParTipoCampoModule { }
