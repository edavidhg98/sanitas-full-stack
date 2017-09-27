import { Entidad } from '../entidad/entidad.model';

export interface AuditoriaContrato {
  _id?: string;
  idAdmision: Number;
  carnet: String;
  fechaRegistro: Date;
  loginRegistro: String;
  observaciones: String;

  /** Many-To-One Relationships */
  
  idEntidad?: String;
  entidad?: Entidad;

}
