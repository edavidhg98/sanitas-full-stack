import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { MedicamentoAltoCostoSharedModule } from '../medicamento-alto-costo/medicamento-alto-costo-shared.module';

import { PrestadorSharedModule } from '../prestador/prestador-shared.module';
import { ProductoSharedModule } from '../producto/producto-shared.module';
import { SucursalSharedModule } from '../sucursal/sucursal-shared.module';
import { EntidadSharedModule } from '../entidad/entidad-shared.module';

import { MedicamentoAltoCostoComponent } from './medicamento-alto-costo.component';
import { MedicamentoAltoCostoUpSertComponent } from './medicamento-alto-costo-upsert.component';
import { MedicamentoAltoCostoDetailsComponent } from './medicamento-alto-costo-details.component';
import { MedicamentoAltoCostoService } from './medicamento-alto-costo.service';

import { medicamentoAltoCostoRoutes } from './medicamento-alto-costo.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(medicamentoAltoCostoRoutes),
    EntitiesSharedModule,
    MedicamentoAltoCostoSharedModule,    
    PrestadorSharedModule,    
    ProductoSharedModule,    
    SucursalSharedModule,    
    EntidadSharedModule    
  ],
  declarations: [
    MedicamentoAltoCostoComponent,
    MedicamentoAltoCostoUpSertComponent,
    MedicamentoAltoCostoDetailsComponent
  ],
  providers: [ MedicamentoAltoCostoService ]
})
export class MedicamentoAltoCostoModule { }
