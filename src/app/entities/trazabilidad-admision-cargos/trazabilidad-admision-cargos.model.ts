import { TrazabilidadAdmision } from '../trazabilidad-admision/trazabilidad-admision.model';

export interface TrazabilidadAdmisionCargos {
  _id?: string;
  idCargosAdmision: Number;
  fechaRegistro: Date;
  loginRegistro: String;
  observaciones: String;

  /** Many-To-One Relationships */
  
  idTrazabilidadAdmision?: String;
  trazabilidadAdmision?: TrazabilidadAdmision;

}
