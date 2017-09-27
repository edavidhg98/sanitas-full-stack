import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { CarnetListComponent } from './carnet-list.component';
import { CarnetService } from './carnet.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    CarnetListComponent
  ],
  declarations: [
    CarnetListComponent
  ],
  providers: [CarnetService]
})
export class CarnetSharedModule { }
