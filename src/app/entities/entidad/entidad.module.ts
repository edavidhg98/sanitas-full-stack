import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { EntidadSharedModule } from '../entidad/entidad-shared.module';

import { AnticipoSharedModule } from '../anticipo/anticipo-shared.module';
import { AuditoriaContratoSharedModule } from '../auditoria-contrato/auditoria-contrato-shared.module';
import { CamaPlanSharedModule } from '../cama-plan/cama-plan-shared.module';
import { CargoAutomaticoSharedModule } from '../cargo-automatico/cargo-automatico-shared.module';
import { CargosPendientesSharedModule } from '../cargos-pendientes/cargos-pendientes-shared.module';
import { CitaRetrasoSharedModule } from '../cita-retraso/cita-retraso-shared.module';
import { CiudadSharedModule } from '../ciudad/ciudad-shared.module';
import { DetalleCargosPendientesSharedModule } from '../detalle-cargos-pendientes/detalle-cargos-pendientes-shared.module';
import { EntidadUvrSharedModule } from '../entidad-uvr/entidad-uvr-shared.module';
import { EpsRecobrableSharedModule } from '../eps-recobrable/eps-recobrable-shared.module';
import { ExcepcionRegargoSharedModule } from '../excepcion-regargo/excepcion-regargo-shared.module';
import { HomologacionServiciosAgfaSharedModule } from '../homologacion-servicios-agfa/homologacion-servicios-agfa-shared.module';
import { PacienteInconsistenciasSharedModule } from '../paciente-inconsistencias/paciente-inconsistencias-shared.module';
import { ProcedimientoEntidadSharedModule } from '../procedimiento-entidad/procedimiento-entidad-shared.module';
import { RecalculoAutomaticoSharedModule } from '../recalculo-automatico/recalculo-automatico-shared.module';
import { SucursalSharedModule } from '../sucursal/sucursal-shared.module';
import { SucursalEntidadSharedModule } from '../sucursal-entidad/sucursal-entidad-shared.module';
import { TipoCirugiaSharedModule } from '../tipo-cirugia/tipo-cirugia-shared.module';
import { TipoPlanSharedModule } from '../tipo-plan/tipo-plan-shared.module';
import { EntidadAdmisionSharedModule } from '../entidad-admision/entidad-admision-shared.module';
import { ExcepcionProductoSharedModule } from '../excepcion-producto/excepcion-producto-shared.module';
import { GrupoEtareoSharedModule } from '../grupo-etareo/grupo-etareo-shared.module';
import { HomologacionEntidadSharedModule } from '../homologacion-entidad/homologacion-entidad-shared.module';
import { MedicamentoAltoCostoSharedModule } from '../medicamento-alto-costo/medicamento-alto-costo-shared.module';
import { PlanesSharedModule } from '../planes/planes-shared.module';
import { RecargoAutomaticoSharedModule } from '../recargo-automatico/recargo-automatico-shared.module';
import { TiposDocumentoEntidadSharedModule } from '../tipos-documento-entidad/tipos-documento-entidad-shared.module';
import { TriageSharedModule } from '../triage/triage-shared.module';

import { EntidadComponent } from './entidad.component';
import { EntidadUpSertComponent } from './entidad-upsert.component';
import { EntidadDetailsComponent } from './entidad-details.component';
import { EntidadService } from './entidad.service';

import { entidadRoutes } from './entidad.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(entidadRoutes),
    EntitiesSharedModule,
    EntidadSharedModule,    
    AnticipoSharedModule,    
    AuditoriaContratoSharedModule,    
    CamaPlanSharedModule,    
    CargoAutomaticoSharedModule,    
    CargosPendientesSharedModule,    
    CitaRetrasoSharedModule,    
    CiudadSharedModule,    
    DetalleCargosPendientesSharedModule,    
    EntidadUvrSharedModule,    
    EpsRecobrableSharedModule,    
    ExcepcionRegargoSharedModule,    
    HomologacionServiciosAgfaSharedModule,    
    PacienteInconsistenciasSharedModule,    
    ProcedimientoEntidadSharedModule,    
    RecalculoAutomaticoSharedModule,    
    SucursalSharedModule,    
    SucursalEntidadSharedModule,    
    TipoCirugiaSharedModule,    
    TipoPlanSharedModule,    
    EntidadAdmisionSharedModule,    
    ExcepcionProductoSharedModule,    
    GrupoEtareoSharedModule,    
    HomologacionEntidadSharedModule,    
    MedicamentoAltoCostoSharedModule,    
    PlanesSharedModule,    
    RecargoAutomaticoSharedModule,    
    TiposDocumentoEntidadSharedModule,    
    TriageSharedModule    
  ],
  declarations: [
    EntidadComponent,
    EntidadUpSertComponent,
    EntidadDetailsComponent
  ],
  providers: [ EntidadService ]
})
export class EntidadModule { }
