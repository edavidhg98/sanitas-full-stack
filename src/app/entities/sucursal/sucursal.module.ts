import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { SucursalSharedModule } from '../sucursal/sucursal-shared.module';

import { AnticipoSharedModule } from '../anticipo/anticipo-shared.module';
import { CamaSharedModule } from '../cama/cama-shared.module';
import { CargoAutomaticoSharedModule } from '../cargo-automatico/cargo-automatico-shared.module';
import { CargosPendientesSharedModule } from '../cargos-pendientes/cargos-pendientes-shared.module';
import { CensoHistoricoSharedModule } from '../censo-historico/censo-historico-shared.module';
import { CiudadSharedModule } from '../ciudad/ciudad-shared.module';
import { ConcatenaConceptoPorCentroCostoSharedModule } from '../concatena-concepto-por-centro-costo/concatena-concepto-por-centro-costo-shared.module';
import { EncabezadoResultadoSharedModule } from '../encabezado-resultado/encabezado-resultado-shared.module';
import { EntidadAdmisionSharedModule } from '../entidad-admision/entidad-admision-shared.module';
import { ExcepcionRegargoSharedModule } from '../excepcion-regargo/excepcion-regargo-shared.module';
import { HomologacionServiciosAgfaSharedModule } from '../homologacion-servicios-agfa/homologacion-servicios-agfa-shared.module';
import { LoginSucursalSharedModule } from '../login-sucursal/login-sucursal-shared.module';
import { MedicamentoAltoCostoSharedModule } from '../medicamento-alto-costo/medicamento-alto-costo-shared.module';
import { MedicoGrupoProcedimientoSharedModule } from '../medico-grupo-procedimiento/medico-grupo-procedimiento-shared.module';
import { NumeroSecuenciaSharedModule } from '../numero-secuencia/numero-secuencia-shared.module';
import { PrestadorSharedModule } from '../prestador/prestador-shared.module';
import { ProcedimientoCentroCostoSharedModule } from '../procedimiento-centro-costo/procedimiento-centro-costo-shared.module';
import { RecalculoAutomaticoSharedModule } from '../recalculo-automatico/recalculo-automatico-shared.module';
import { SalasSharedModule } from '../salas/salas-shared.module';
import { SucursalEntidadSharedModule } from '../sucursal-entidad/sucursal-entidad-shared.module';
import { TrazabilidadAdmisionSharedModule } from '../trazabilidad-admision/trazabilidad-admision-shared.module';
import { ZonaHorariaVeranoSharedModule } from '../zona-horaria-verano/zona-horaria-verano-shared.module';
import { CensoServicioSharedModule } from '../censo-servicio/censo-servicio-shared.module';
import { CitaRetrasoSharedModule } from '../cita-retraso/cita-retraso-shared.module';
import { ConsultorioSharedModule } from '../consultorio/consultorio-shared.module';
import { EntidadSharedModule } from '../entidad/entidad-shared.module';
import { GrupoEtareoSharedModule } from '../grupo-etareo/grupo-etareo-shared.module';
import { LoginSharedModule } from '../login/login-shared.module';
import { PedidosSharedModule } from '../pedidos/pedidos-shared.module';
import { ProcedimientoNivelSharedModule } from '../procedimiento-nivel/procedimiento-nivel-shared.module';
import { SeccionSharedModule } from '../seccion/seccion-shared.module';
import { TriageSharedModule } from '../triage/triage-shared.module';
import { ZonaHorariaSharedModule } from '../zona-horaria/zona-horaria-shared.module';

import { SucursalComponent } from './sucursal.component';
import { SucursalUpSertComponent } from './sucursal-upsert.component';
import { SucursalDetailsComponent } from './sucursal-details.component';
import { SucursalService } from './sucursal.service';

import { sucursalRoutes } from './sucursal.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(sucursalRoutes),
    EntitiesSharedModule,
    SucursalSharedModule,    
    AnticipoSharedModule,    
    CamaSharedModule,    
    CargoAutomaticoSharedModule,    
    CargosPendientesSharedModule,    
    CensoHistoricoSharedModule,    
    CiudadSharedModule,    
    ConcatenaConceptoPorCentroCostoSharedModule,    
    EncabezadoResultadoSharedModule,    
    EntidadAdmisionSharedModule,    
    ExcepcionRegargoSharedModule,    
    HomologacionServiciosAgfaSharedModule,    
    LoginSucursalSharedModule,    
    MedicamentoAltoCostoSharedModule,    
    MedicoGrupoProcedimientoSharedModule,    
    NumeroSecuenciaSharedModule,    
    PrestadorSharedModule,    
    ProcedimientoCentroCostoSharedModule,    
    RecalculoAutomaticoSharedModule,    
    SalasSharedModule,    
    SucursalEntidadSharedModule,    
    TrazabilidadAdmisionSharedModule,    
    ZonaHorariaVeranoSharedModule,    
    CensoServicioSharedModule,    
    CitaRetrasoSharedModule,    
    ConsultorioSharedModule,    
    EntidadSharedModule,    
    GrupoEtareoSharedModule,    
    LoginSharedModule,    
    PedidosSharedModule,    
    ProcedimientoNivelSharedModule,    
    SeccionSharedModule,    
    TriageSharedModule,    
    ZonaHorariaSharedModule    
  ],
  declarations: [
    SucursalComponent,
    SucursalUpSertComponent,
    SucursalDetailsComponent
  ],
  providers: [ SucursalService ]
})
export class SucursalModule { }
