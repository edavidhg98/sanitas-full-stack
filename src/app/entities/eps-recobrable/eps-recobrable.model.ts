import { Entidad } from '../entidad/entidad.model';

export interface EpsRecobrable {
  _id?: string;
  epsRecobrable: String;
  fechaRegistro: Date;
  loginRegistro: String;
  observaciones: String;

  /** Many-To-One Relationships */
  
  idEntidad?: String;
  entidad?: Entidad;

}
