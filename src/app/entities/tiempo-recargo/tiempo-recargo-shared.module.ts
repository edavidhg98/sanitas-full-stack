import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { TiempoRecargoListComponent } from './tiempo-recargo-list.component';
import { TiempoRecargoService } from './tiempo-recargo.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    TiempoRecargoListComponent
  ],
  declarations: [
    TiempoRecargoListComponent
  ],
  providers: [TiempoRecargoService]
})
export class TiempoRecargoSharedModule { }
