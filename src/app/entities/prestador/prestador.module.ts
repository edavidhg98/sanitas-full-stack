import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { PrestadorSharedModule } from '../prestador/prestador-shared.module';

import { CentroCostoValidoSharedModule } from '../centro-costo-valido/centro-costo-valido-shared.module';
import { CiudadSharedModule } from '../ciudad/ciudad-shared.module';
import { MedicamentoAltoCostoSharedModule } from '../medicamento-alto-costo/medicamento-alto-costo-shared.module';
import { SucursalSharedModule } from '../sucursal/sucursal-shared.module';
import { SustitutosSharedModule } from '../sustitutos/sustitutos-shared.module';
import { ProcedimientoCentroCostoSharedModule } from '../procedimiento-centro-costo/procedimiento-centro-costo-shared.module';
import { ExcepcionProductoSharedModule } from '../excepcion-producto/excepcion-producto-shared.module';
import { PrestadorCentroCostoUnicoSharedModule } from '../prestador-centro-costo-unico/prestador-centro-costo-unico-shared.module';
import { RecargoSharedModule } from '../recargo/recargo-shared.module';

import { PrestadorComponent } from './prestador.component';
import { PrestadorUpSertComponent } from './prestador-upsert.component';
import { PrestadorDetailsComponent } from './prestador-details.component';
import { PrestadorService } from './prestador.service';

import { prestadorRoutes } from './prestador.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(prestadorRoutes),
    EntitiesSharedModule,
    PrestadorSharedModule,    
    CentroCostoValidoSharedModule,    
    CiudadSharedModule,    
    MedicamentoAltoCostoSharedModule,    
    SucursalSharedModule,    
    SustitutosSharedModule,    
    ProcedimientoCentroCostoSharedModule,    
    ExcepcionProductoSharedModule,    
    PrestadorCentroCostoUnicoSharedModule,    
    RecargoSharedModule    
  ],
  declarations: [
    PrestadorComponent,
    PrestadorUpSertComponent,
    PrestadorDetailsComponent
  ],
  providers: [ PrestadorService ]
})
export class PrestadorModule { }
