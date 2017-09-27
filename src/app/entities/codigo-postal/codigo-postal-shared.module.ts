import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { CodigoPostalListComponent } from './codigo-postal-list.component';
import { CodigoPostalService } from './codigo-postal.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    CodigoPostalListComponent
  ],
  declarations: [
    CodigoPostalListComponent
  ],
  providers: [CodigoPostalService]
})
export class CodigoPostalSharedModule { }
