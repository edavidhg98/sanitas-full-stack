import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { MonedaListComponent } from './moneda-list.component';
import { MonedaService } from './moneda.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    MonedaListComponent
  ],
  declarations: [
    MonedaListComponent
  ],
  providers: [MonedaService]
})
export class MonedaSharedModule { }
