import { Entidad } from '../entidad/entidad.model';

export interface HomologacionEntidad {
  _id?: string;
  fechaRegistro: Date;
  loginRegistro: String;
  estado: Boolean;
  observaciones: String;

  /** Many-To-One Relationships */
  
  idEntidad?: String;
  entidad?: Entidad;

  idEntidad1?: String;
  entidad1?: Entidad;

}
