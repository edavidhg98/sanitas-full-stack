import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { SustitutosListComponent } from './sustitutos-list.component';
import { SustitutosService } from './sustitutos.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    SustitutosListComponent
  ],
  declarations: [
    SustitutosListComponent
  ],
  providers: [SustitutosService]
})
export class SustitutosSharedModule { }
