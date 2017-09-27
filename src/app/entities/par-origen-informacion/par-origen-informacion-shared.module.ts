import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { ParOrigenInformacionListComponent } from './par-origen-informacion-list.component';
import { ParOrigenInformacionService } from './par-origen-informacion.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    ParOrigenInformacionListComponent
  ],
  declarations: [
    ParOrigenInformacionListComponent
  ],
  providers: [ParOrigenInformacionService]
})
export class ParOrigenInformacionSharedModule { }
