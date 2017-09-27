import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { AliasTipoDocumentoSharedModule } from '../alias-tipo-documento/alias-tipo-documento-shared.module';


import { AliasTipoDocumentoComponent } from './alias-tipo-documento.component';
import { AliasTipoDocumentoUpSertComponent } from './alias-tipo-documento-upsert.component';
import { AliasTipoDocumentoDetailsComponent } from './alias-tipo-documento-details.component';
import { AliasTipoDocumentoService } from './alias-tipo-documento.service';

import { aliasTipoDocumentoRoutes } from './alias-tipo-documento.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(aliasTipoDocumentoRoutes),
    EntitiesSharedModule,
    AliasTipoDocumentoSharedModule    
  ],
  declarations: [
    AliasTipoDocumentoComponent,
    AliasTipoDocumentoUpSertComponent,
    AliasTipoDocumentoDetailsComponent
  ],
  providers: [ AliasTipoDocumentoService ]
})
export class AliasTipoDocumentoModule { }
