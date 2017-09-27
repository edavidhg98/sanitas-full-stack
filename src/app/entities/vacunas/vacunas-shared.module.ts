import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { VacunasListComponent } from './vacunas-list.component';
import { VacunasService } from './vacunas.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    VacunasListComponent
  ],
  declarations: [
    VacunasListComponent
  ],
  providers: [VacunasService]
})
export class VacunasSharedModule { }
