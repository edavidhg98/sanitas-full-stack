import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { CiudadListComponent } from './ciudad-list.component';
import { CiudadService } from './ciudad.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    CiudadListComponent
  ],
  declarations: [
    CiudadListComponent
  ],
  providers: [CiudadService]
})
export class CiudadSharedModule { }
