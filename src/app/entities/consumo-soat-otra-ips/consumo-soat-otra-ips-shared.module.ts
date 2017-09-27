import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { ConsumoSoatOtraIpsListComponent } from './consumo-soat-otra-ips-list.component';
import { ConsumoSoatOtraIpsService } from './consumo-soat-otra-ips.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    ConsumoSoatOtraIpsListComponent
  ],
  declarations: [
    ConsumoSoatOtraIpsListComponent
  ],
  providers: [ConsumoSoatOtraIpsService]
})
export class ConsumoSoatOtraIpsSharedModule { }
