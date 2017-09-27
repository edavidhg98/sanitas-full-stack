import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { FotoEstadoCamaListComponent } from './foto-estado-cama-list.component';
import { FotoEstadoCamaService } from './foto-estado-cama.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    FotoEstadoCamaListComponent
  ],
  declarations: [
    FotoEstadoCamaListComponent
  ],
  providers: [FotoEstadoCamaService]
})
export class FotoEstadoCamaSharedModule { }
