import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { SucursalListComponent } from './sucursal-list.component';
import { SucursalService } from './sucursal.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    SucursalListComponent
  ],
  declarations: [
    SucursalListComponent
  ],
  providers: [SucursalService]
})
export class SucursalSharedModule { }
