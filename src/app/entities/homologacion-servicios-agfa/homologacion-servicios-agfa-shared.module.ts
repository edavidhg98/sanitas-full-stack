import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { HomologacionServiciosAgfaListComponent } from './homologacion-servicios-agfa-list.component';
import { HomologacionServiciosAgfaService } from './homologacion-servicios-agfa.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    HomologacionServiciosAgfaListComponent
  ],
  declarations: [
    HomologacionServiciosAgfaListComponent
  ],
  providers: [HomologacionServiciosAgfaService]
})
export class HomologacionServiciosAgfaSharedModule { }
