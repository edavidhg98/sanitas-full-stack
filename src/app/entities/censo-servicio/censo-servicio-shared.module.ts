import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { CensoServicioListComponent } from './censo-servicio-list.component';
import { CensoServicioService } from './censo-servicio.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    CensoServicioListComponent
  ],
  declarations: [
    CensoServicioListComponent
  ],
  providers: [CensoServicioService]
})
export class CensoServicioSharedModule { }
