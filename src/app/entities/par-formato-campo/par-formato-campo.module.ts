import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { ParFormatoCampoSharedModule } from '../par-formato-campo/par-formato-campo-shared.module';


import { ParFormatoCampoComponent } from './par-formato-campo.component';
import { ParFormatoCampoUpSertComponent } from './par-formato-campo-upsert.component';
import { ParFormatoCampoDetailsComponent } from './par-formato-campo-details.component';
import { ParFormatoCampoService } from './par-formato-campo.service';

import { parFormatoCampoRoutes } from './par-formato-campo.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(parFormatoCampoRoutes),
    EntitiesSharedModule,
    ParFormatoCampoSharedModule    
  ],
  declarations: [
    ParFormatoCampoComponent,
    ParFormatoCampoUpSertComponent,
    ParFormatoCampoDetailsComponent
  ],
  providers: [ ParFormatoCampoService ]
})
export class ParFormatoCampoModule { }
