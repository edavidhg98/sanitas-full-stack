import { AdmisionObservaciones } from '../admision-observaciones/admision-observaciones.model';
import { FotoEstadoCama } from '../foto-estado-cama/foto-estado-cama.model';
import { Sucursal } from '../sucursal/sucursal.model';
import { CensoHistorico } from '../censo-historico/censo-historico.model';
import { CensoTraslado } from '../censo-traslado/censo-traslado.model';
import { Procedimiento } from '../procedimiento/procedimiento.model';
import { Seccion } from '../seccion/seccion.model';
import { TipoCama } from '../tipo-cama/tipo-cama.model';
import { CamaPlan } from '../cama-plan/cama-plan.model';

export interface Cama {
  _id?: string;
  cama: String;
  numExt: Number;
  fecPosEgr: Date;
  itemListaEstadoCama: Number;
  descripcion: String;
  carHab: String;
  fecRegistro: Date;
  loginRegistro: String;
  observaciones: String;
  horPosEgr: Number;
  minPosEgr: Number;

  /** Many-To-One Relationships */
  
  idFotoEstadoCama?: String;
  fotoEstadoCama?: FotoEstadoCama;

  idSucursal?: String;
  sucursal?: Sucursal;

  idProcedimiento?: String;
  procedimiento?: Procedimiento;

  idProcedimiento1?: String;
  procedimiento1?: Procedimiento;

  idSeccion?: String;
  seccion?: Seccion;

  idTipoCama?: String;
  tipoCama?: TipoCama;

  /** One-To-Many Relationships */
  admisionObservacioness?: AdmisionObservaciones[];
  censoHistoricos?: CensoHistorico[];
  censoTraslados?: CensoTraslado[];
  censoTraslado1s?: CensoTraslado[];
  camaPlans?: CamaPlan[];
}
