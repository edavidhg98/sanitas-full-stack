import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { PrestadorListComponent } from './prestador-list.component';
import { PrestadorService } from './prestador.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    PrestadorListComponent
  ],
  declarations: [
    PrestadorListComponent
  ],
  providers: [PrestadorService]
})
export class PrestadorSharedModule { }
