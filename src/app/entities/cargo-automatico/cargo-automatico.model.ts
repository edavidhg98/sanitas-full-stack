import { Sucursal } from '../sucursal/sucursal.model';
import { Entidad } from '../entidad/entidad.model';
import { Procedimiento } from '../procedimiento/procedimiento.model';

export interface CargoAutomatico {
  _id?: string;
  codigoInteligente: String;
  fechaRegistro: Date;
  loginRegistro: String;
  observaciones: String;
  itemListaEstadoCargo: Number;
  idPrestador: Number;

  /** Many-To-One Relationships */
  
  idSucursal?: String;
  sucursal?: Sucursal;

  idEntidad?: String;
  entidad?: Entidad;

  idProcedimiento?: String;
  procedimiento?: Procedimiento;

}
