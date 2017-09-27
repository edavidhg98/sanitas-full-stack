import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { TipoAfiliadoSharedModule } from '../tipo-afiliado/tipo-afiliado-shared.module';


import { TipoAfiliadoComponent } from './tipo-afiliado.component';
import { TipoAfiliadoUpSertComponent } from './tipo-afiliado-upsert.component';
import { TipoAfiliadoDetailsComponent } from './tipo-afiliado-details.component';
import { TipoAfiliadoService } from './tipo-afiliado.service';

import { tipoAfiliadoRoutes } from './tipo-afiliado.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(tipoAfiliadoRoutes),
    EntitiesSharedModule,
    TipoAfiliadoSharedModule    
  ],
  declarations: [
    TipoAfiliadoComponent,
    TipoAfiliadoUpSertComponent,
    TipoAfiliadoDetailsComponent
  ],
  providers: [ TipoAfiliadoService ]
})
export class TipoAfiliadoModule { }
