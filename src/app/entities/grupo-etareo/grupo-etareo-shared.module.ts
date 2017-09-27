import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { GrupoEtareoListComponent } from './grupo-etareo-list.component';
import { GrupoEtareoService } from './grupo-etareo.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    GrupoEtareoListComponent
  ],
  declarations: [
    GrupoEtareoListComponent
  ],
  providers: [GrupoEtareoService]
})
export class GrupoEtareoSharedModule { }
