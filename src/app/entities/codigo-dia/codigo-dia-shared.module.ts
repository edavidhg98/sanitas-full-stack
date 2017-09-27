import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { CodigoDiaListComponent } from './codigo-dia-list.component';
import { CodigoDiaService } from './codigo-dia.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    CodigoDiaListComponent
  ],
  declarations: [
    CodigoDiaListComponent
  ],
  providers: [CodigoDiaService]
})
export class CodigoDiaSharedModule { }
