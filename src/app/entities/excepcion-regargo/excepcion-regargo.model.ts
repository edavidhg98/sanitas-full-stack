import { Sucursal } from '../sucursal/sucursal.model';
import { TipoAdmision } from '../tipo-admision/tipo-admision.model';
import { Entidad } from '../entidad/entidad.model';
import { Procedimiento } from '../procedimiento/procedimiento.model';

export interface ExcepcionRegargo {
  _id?: string;
  porcentaje: Number;
  valor: Number;
  fechaRegistro: Date;
  loginRegistro: String;
  observaciones: String;
  itemListaEstado: Boolean;
  idPrestador: Number;

  /** Many-To-One Relationships */
  
  idSucursal?: String;
  sucursal?: Sucursal;

  idTipoAdmision?: String;
  tipoAdmision?: TipoAdmision;

  idEntidad?: String;
  entidad?: Entidad;

  idProcedimiento?: String;
  procedimiento?: Procedimiento;

}
