import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { SubconceptoListComponent } from './subconcepto-list.component';
import { SubconceptoService } from './subconcepto.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    SubconceptoListComponent
  ],
  declarations: [
    SubconceptoListComponent
  ],
  providers: [SubconceptoService]
})
export class SubconceptoSharedModule { }
