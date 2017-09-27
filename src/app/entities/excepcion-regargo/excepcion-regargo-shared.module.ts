import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { ExcepcionRegargoListComponent } from './excepcion-regargo-list.component';
import { ExcepcionRegargoService } from './excepcion-regargo.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    ExcepcionRegargoListComponent
  ],
  declarations: [
    ExcepcionRegargoListComponent
  ],
  providers: [ExcepcionRegargoService]
})
export class ExcepcionRegargoSharedModule { }
