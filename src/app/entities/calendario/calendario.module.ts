import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { CalendarioSharedModule } from '../calendario/calendario-shared.module';


import { CalendarioComponent } from './calendario.component';
import { CalendarioUpSertComponent } from './calendario-upsert.component';
import { CalendarioDetailsComponent } from './calendario-details.component';
import { CalendarioService } from './calendario.service';

import { calendarioRoutes } from './calendario.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(calendarioRoutes),
    EntitiesSharedModule,
    CalendarioSharedModule    
  ],
  declarations: [
    CalendarioComponent,
    CalendarioUpSertComponent,
    CalendarioDetailsComponent
  ],
  providers: [ CalendarioService ]
})
export class CalendarioModule { }
