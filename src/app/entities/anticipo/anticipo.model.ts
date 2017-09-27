import { Sucursal } from '../sucursal/sucursal.model';
import { Entidad } from '../entidad/entidad.model';
import { Procedimiento } from '../procedimiento/procedimiento.model';

export interface Anticipo {
  _id?: string;
  valorAnticipo: Number;
  fechaRegistro: Date;
  loginRegistro: String;
  observaciones: String;
  estadoItemLista: Number;

  /** Many-To-One Relationships */
  
  idSucursal?: String;
  sucursal?: Sucursal;

  idEntidad?: String;
  entidad?: Entidad;

  idProcedimiento?: String;
  procedimiento?: Procedimiento;

}
