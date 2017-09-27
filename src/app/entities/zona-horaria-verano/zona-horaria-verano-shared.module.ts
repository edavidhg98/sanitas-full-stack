import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { ZonaHorariaVeranoListComponent } from './zona-horaria-verano-list.component';
import { ZonaHorariaVeranoService } from './zona-horaria-verano.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    ZonaHorariaVeranoListComponent
  ],
  declarations: [
    ZonaHorariaVeranoListComponent
  ],
  providers: [ZonaHorariaVeranoService]
})
export class ZonaHorariaVeranoSharedModule { }
