import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { ParFormatoCampoListComponent } from './par-formato-campo-list.component';
import { ParFormatoCampoService } from './par-formato-campo.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    ParFormatoCampoListComponent
  ],
  declarations: [
    ParFormatoCampoListComponent
  ],
  providers: [ParFormatoCampoService]
})
export class ParFormatoCampoSharedModule { }
