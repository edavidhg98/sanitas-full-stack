import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { TipoCirugiaListComponent } from './tipo-cirugia-list.component';
import { TipoCirugiaService } from './tipo-cirugia.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    TipoCirugiaListComponent
  ],
  declarations: [
    TipoCirugiaListComponent
  ],
  providers: [TipoCirugiaService]
})
export class TipoCirugiaSharedModule { }
