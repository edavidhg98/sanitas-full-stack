import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { TipoAnestesiaListComponent } from './tipo-anestesia-list.component';
import { TipoAnestesiaService } from './tipo-anestesia.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    TipoAnestesiaListComponent
  ],
  declarations: [
    TipoAnestesiaListComponent
  ],
  providers: [TipoAnestesiaService]
})
export class TipoAnestesiaSharedModule { }
