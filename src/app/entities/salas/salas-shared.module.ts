import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { SalasListComponent } from './salas-list.component';
import { SalasService } from './salas.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    SalasListComponent
  ],
  declarations: [
    SalasListComponent
  ],
  providers: [SalasService]
})
export class SalasSharedModule { }
