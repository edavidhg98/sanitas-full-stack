import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { CargoAutomaticoListComponent } from './cargo-automatico-list.component';
import { CargoAutomaticoService } from './cargo-automatico.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    CargoAutomaticoListComponent
  ],
  declarations: [
    CargoAutomaticoListComponent
  ],
  providers: [CargoAutomaticoService]
})
export class CargoAutomaticoSharedModule { }
