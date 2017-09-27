import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { CensoTrasladoListComponent } from './censo-traslado-list.component';
import { CensoTrasladoService } from './censo-traslado.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    CensoTrasladoListComponent
  ],
  declarations: [
    CensoTrasladoListComponent
  ],
  providers: [CensoTrasladoService]
})
export class CensoTrasladoSharedModule { }
