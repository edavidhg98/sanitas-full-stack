import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { MonedaSharedModule } from '../moneda/moneda-shared.module';

import { SucursalEntidadSharedModule } from '../sucursal-entidad/sucursal-entidad-shared.module';

import { MonedaComponent } from './moneda.component';
import { MonedaUpSertComponent } from './moneda-upsert.component';
import { MonedaDetailsComponent } from './moneda-details.component';
import { MonedaService } from './moneda.service';

import { monedaRoutes } from './moneda.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(monedaRoutes),
    EntitiesSharedModule,
    MonedaSharedModule,    
    SucursalEntidadSharedModule    
  ],
  declarations: [
    MonedaComponent,
    MonedaUpSertComponent,
    MonedaDetailsComponent
  ],
  providers: [ MonedaService ]
})
export class MonedaModule { }
