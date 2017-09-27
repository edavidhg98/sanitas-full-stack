import { Entidad } from '../entidad/entidad.model';
import { Sucursal } from '../sucursal/sucursal.model';

export interface CitaRetraso {
  _id?: string;
  idEspecialidad: Number;
  excepcionRetraso: String;
  minPenalizacionRetraso: Number;
  fechaRegistro: Date;
  loginRegistro: String;
  observaciones: String;

  /** Many-To-One Relationships */
  
  idEntidad?: String;
  entidad?: Entidad;

  idSucursal?: String;
  sucursal?: Sucursal;

}
