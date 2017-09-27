import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { ZonaHorariaListComponent } from './zona-horaria-list.component';
import { ZonaHorariaService } from './zona-horaria.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    ZonaHorariaListComponent
  ],
  declarations: [
    ZonaHorariaListComponent
  ],
  providers: [ZonaHorariaService]
})
export class ZonaHorariaSharedModule { }
