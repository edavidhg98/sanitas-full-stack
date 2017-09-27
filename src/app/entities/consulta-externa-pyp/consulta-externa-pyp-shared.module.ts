import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { ConsultaExternaPypListComponent } from './consulta-externa-pyp-list.component';
import { ConsultaExternaPypService } from './consulta-externa-pyp.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    ConsultaExternaPypListComponent
  ],
  declarations: [
    ConsultaExternaPypListComponent
  ],
  providers: [ConsultaExternaPypService]
})
export class ConsultaExternaPypSharedModule { }
