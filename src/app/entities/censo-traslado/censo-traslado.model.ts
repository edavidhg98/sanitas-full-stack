import { Cama } from '../cama/cama.model';
import { Motivo } from '../motivo/motivo.model';

export interface CensoTraslado {
  _id?: string;
  idAdmision: Number;
  fecIngreso: Date;
  horIngreso: Number;
  minIngreso: Number;
  entidad: String;
  fechaRegistro: Date;
  loginRegistro: String;
  observaciones: String;

  /** Many-To-One Relationships */
  
  idCama?: String;
  cama?: Cama;

  idCama1?: String;
  cama1?: Cama;

  idMotivo?: String;
  motivo?: Motivo;

}
