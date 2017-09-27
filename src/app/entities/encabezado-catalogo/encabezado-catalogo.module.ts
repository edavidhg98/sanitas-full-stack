import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { EncabezadoCatalogoSharedModule } from '../encabezado-catalogo/encabezado-catalogo-shared.module';

import { SucursalEntidadSharedModule } from '../sucursal-entidad/sucursal-entidad-shared.module';

import { EncabezadoCatalogoComponent } from './encabezado-catalogo.component';
import { EncabezadoCatalogoUpSertComponent } from './encabezado-catalogo-upsert.component';
import { EncabezadoCatalogoDetailsComponent } from './encabezado-catalogo-details.component';
import { EncabezadoCatalogoService } from './encabezado-catalogo.service';

import { encabezadoCatalogoRoutes } from './encabezado-catalogo.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(encabezadoCatalogoRoutes),
    EntitiesSharedModule,
    EncabezadoCatalogoSharedModule,    
    SucursalEntidadSharedModule    
  ],
  declarations: [
    EncabezadoCatalogoComponent,
    EncabezadoCatalogoUpSertComponent,
    EncabezadoCatalogoDetailsComponent
  ],
  providers: [ EncabezadoCatalogoService ]
})
export class EncabezadoCatalogoModule { }
