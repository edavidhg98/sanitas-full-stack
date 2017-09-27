import { Entidad } from '../entidad/entidad.model';

export interface Planes {
  _id?: string;
  codCompania: Number;
  codPlan: Number;
  descripcion: String;
  fechaRegistro: Date;
  loginRegistro: String;
  observaciones: String;

  /** Many-To-One Relationships */
  
  idEntidad?: String;
  entidad?: Entidad;

}
