import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { OcupacionListComponent } from './ocupacion-list.component';
import { OcupacionService } from './ocupacion.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    OcupacionListComponent
  ],
  declarations: [
    OcupacionListComponent
  ],
  providers: [OcupacionService]
})
export class OcupacionSharedModule { }
