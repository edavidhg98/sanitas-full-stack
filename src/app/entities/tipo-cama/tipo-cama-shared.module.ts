import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { TipoCamaListComponent } from './tipo-cama-list.component';
import { TipoCamaService } from './tipo-cama.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    TipoCamaListComponent
  ],
  declarations: [
    TipoCamaListComponent
  ],
  providers: [TipoCamaService]
})
export class TipoCamaSharedModule { }
