import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { AliasTipoDocumentoListComponent } from './alias-tipo-documento-list.component';
import { AliasTipoDocumentoService } from './alias-tipo-documento.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    AliasTipoDocumentoListComponent
  ],
  declarations: [
    AliasTipoDocumentoListComponent
  ],
  providers: [AliasTipoDocumentoService]
})
export class AliasTipoDocumentoSharedModule { }
