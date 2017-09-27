import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { ProcedimientoSharedModule } from '../procedimiento/procedimiento-shared.module';

import { AnticipoSharedModule } from '../anticipo/anticipo-shared.module';
import { AuditoriaSolicitudSharedModule } from '../auditoria-solicitud/auditoria-solicitud-shared.module';
import { AutorizacionBhSharedModule } from '../autorizacion-bh/autorizacion-bh-shared.module';
import { CamaSharedModule } from '../cama/cama-shared.module';
import { CargoAutomaticoSharedModule } from '../cargo-automatico/cargo-automatico-shared.module';
import { ConsultaExternaPypSharedModule } from '../consulta-externa-pyp/consulta-externa-pyp-shared.module';
import { DetalleCargosPendientesSharedModule } from '../detalle-cargos-pendientes/detalle-cargos-pendientes-shared.module';
import { EncabezadoResultadoSharedModule } from '../encabezado-resultado/encabezado-resultado-shared.module';
import { ExcepcionRegargoSharedModule } from '../excepcion-regargo/excepcion-regargo-shared.module';
import { ProcedimientoConvenioCapitadoSharedModule } from '../procedimiento-convenio-capitado/procedimiento-convenio-capitado-shared.module';
import { ProcedimientoEntidadSharedModule } from '../procedimiento-entidad/procedimiento-entidad-shared.module';
import { SubGrupoProcedimientoSharedModule } from '../sub-grupo-procedimiento/sub-grupo-procedimiento-shared.module';
import { TipoAnestesiaSharedModule } from '../tipo-anestesia/tipo-anestesia-shared.module';
import { ProcedimientoCentroCostoSharedModule } from '../procedimiento-centro-costo/procedimiento-centro-costo-shared.module';
import { ProcedimientoNivelSharedModule } from '../procedimiento-nivel/procedimiento-nivel-shared.module';
import { ProcedimientosRisSharedModule } from '../procedimientos-ris/procedimientos-ris-shared.module';
import { PypProcedimientoProgramaSharedModule } from '../pyp-procedimiento-programa/pyp-procedimiento-programa-shared.module';
import { ProcedimientoFinalidadSharedModule } from '../procedimiento-finalidad/procedimiento-finalidad-shared.module';

import { ProcedimientoComponent } from './procedimiento.component';
import { ProcedimientoUpSertComponent } from './procedimiento-upsert.component';
import { ProcedimientoDetailsComponent } from './procedimiento-details.component';
import { ProcedimientoService } from './procedimiento.service';

import { procedimientoRoutes } from './procedimiento.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(procedimientoRoutes),
    EntitiesSharedModule,
    ProcedimientoSharedModule,    
    AnticipoSharedModule,    
    AuditoriaSolicitudSharedModule,    
    AutorizacionBhSharedModule,    
    CamaSharedModule,    
    CargoAutomaticoSharedModule,    
    ConsultaExternaPypSharedModule,    
    DetalleCargosPendientesSharedModule,    
    EncabezadoResultadoSharedModule,    
    ExcepcionRegargoSharedModule,    
    ProcedimientoConvenioCapitadoSharedModule,    
    ProcedimientoEntidadSharedModule,    
    SubGrupoProcedimientoSharedModule,    
    TipoAnestesiaSharedModule,    
    ProcedimientoCentroCostoSharedModule,    
    ProcedimientoNivelSharedModule,    
    ProcedimientosRisSharedModule,    
    PypProcedimientoProgramaSharedModule,    
    ProcedimientoFinalidadSharedModule    
  ],
  declarations: [
    ProcedimientoComponent,
    ProcedimientoUpSertComponent,
    ProcedimientoDetailsComponent
  ],
  providers: [ ProcedimientoService ]
})
export class ProcedimientoModule { }
