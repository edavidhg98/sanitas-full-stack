import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { CentroCostoValidoListComponent } from './centro-costo-valido-list.component';
import { CentroCostoValidoService } from './centro-costo-valido.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    CentroCostoValidoListComponent
  ],
  declarations: [
    CentroCostoValidoListComponent
  ],
  providers: [CentroCostoValidoService]
})
export class CentroCostoValidoSharedModule { }
