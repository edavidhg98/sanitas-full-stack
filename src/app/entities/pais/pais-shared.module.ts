import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { PaisListComponent } from './pais-list.component';
import { PaisService } from './pais.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    PaisListComponent
  ],
  declarations: [
    PaisListComponent
  ],
  providers: [PaisService]
})
export class PaisSharedModule { }
