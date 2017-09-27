import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { NivelCargoListComponent } from './nivel-cargo-list.component';
import { NivelCargoService } from './nivel-cargo.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    NivelCargoListComponent
  ],
  declarations: [
    NivelCargoListComponent
  ],
  providers: [NivelCargoService]
})
export class NivelCargoSharedModule { }
