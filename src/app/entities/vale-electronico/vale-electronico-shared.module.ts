import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { ValeElectronicoListComponent } from './vale-electronico-list.component';
import { ValeElectronicoService } from './vale-electronico.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    ValeElectronicoListComponent
  ],
  declarations: [
    ValeElectronicoListComponent
  ],
  providers: [ValeElectronicoService]
})
export class ValeElectronicoSharedModule { }
