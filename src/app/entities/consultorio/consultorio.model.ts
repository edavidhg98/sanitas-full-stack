import { TrazabilidadAdmision } from '../trazabilidad-admision/trazabilidad-admision.model';
import { Sucursal } from '../sucursal/sucursal.model';
import { Triage } from '../triage/triage.model';

export interface Consultorio {
  _id?: string;
  itemListaTipoConsultorio: Number;
  consultorio: String;
  descripcion: String;
  turno: Number;
  dirIp: String;
  conUrgencia: String;
  fechaRegistro: Date;
  loginRegistro: String;
  observaciones: String;
  itemListaEstadoConsultorio: Number;

  /** Many-To-One Relationships */
  
  idSucursal?: String;
  sucursal?: Sucursal;

  /** One-To-Many Relationships */
  trazabilidadAdmisions?: TrazabilidadAdmision[];
  triages?: Triage[];
}
