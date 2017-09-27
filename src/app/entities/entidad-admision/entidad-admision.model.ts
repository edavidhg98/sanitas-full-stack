import { Sucursal } from '../sucursal/sucursal.model';
import { Entidad } from '../entidad/entidad.model';

export interface EntidadAdmision {
  _id?: string;
  idTipoAdmision: Number;
  itemListaAbreAdmision: Number;
  fechaRegistro: Date;
  loginRegistro: String;
  observaciones: String;
  manAnticipo: String;

  /** Many-To-One Relationships */
  
  idSucursal?: String;
  sucursal?: Sucursal;

  idEntidad?: String;
  entidad?: Entidad;

}
