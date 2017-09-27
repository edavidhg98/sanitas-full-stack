import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { CalendarioListComponent } from './calendario-list.component';
import { CalendarioService } from './calendario.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    CalendarioListComponent
  ],
  declarations: [
    CalendarioListComponent
  ],
  providers: [CalendarioService]
})
export class CalendarioSharedModule { }
