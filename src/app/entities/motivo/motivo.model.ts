import { AdmisionObservaciones } from '../admision-observaciones/admision-observaciones.model';
import { CensoTraslado } from '../censo-traslado/censo-traslado.model';
import { DetalleCargosPendientes } from '../detalle-cargos-pendientes/detalle-cargos-pendientes.model';
import { TrazabilidadAdmision } from '../trazabilidad-admision/trazabilidad-admision.model';
import { Triage } from '../triage/triage.model';
import { TipoMotivo } from '../tipo-motivo/tipo-motivo.model';
import { Subconcepto } from '../subconcepto/subconcepto.model';
import { PypProcedimientoPrograma } from '../pyp-procedimiento-programa/pyp-procedimiento-programa.model';

export interface Motivo {
  _id?: string;
  motivo: String;
  descripcion: String;
  fechaRegistro: Date;
  loginRegistro: String;
  observaciones: String;

  /** Many-To-One Relationships */
  
  idTipoMotivo?: String;
  tipoMotivo?: TipoMotivo;

  /** One-To-Many Relationships */
  admisionObservacioness?: AdmisionObservaciones[];
  censoTraslados?: CensoTraslado[];
  detalleCargosPendientess?: DetalleCargosPendientes[];
  trazabilidadAdmisions?: TrazabilidadAdmision[];
  trazabilidadAdmision1s?: TrazabilidadAdmision[];
  trazabilidadAdmision2s?: TrazabilidadAdmision[];
  triages?: Triage[];
  subconceptos?: Subconcepto[];
  pypProcedimientoProgramas?: PypProcedimientoPrograma[];
}
