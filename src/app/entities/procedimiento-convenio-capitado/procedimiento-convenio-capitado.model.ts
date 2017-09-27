import { SucursalEntidad } from '../sucursal-entidad/sucursal-entidad.model';
import { TipoAdmision } from '../tipo-admision/tipo-admision.model';
import { Procedimiento } from '../procedimiento/procedimiento.model';

export interface ProcedimientoConvenioCapitado {
  _id?: string;
  fechaInicial: Date;
  fechaFinal: Date;
  itemListaTipoCargo: Number;
  descripcion: String;
  valor: Number;
  alias: String;
  excedente: String;
  fechaRegistro: Date;
  loginRegistro: String;
  observaciones: String;

  /** Many-To-One Relationships */
  
  idSucursalEntidad?: String;
  sucursalEntidad?: SucursalEntidad;

  idTipoAdmision?: String;
  tipoAdmision?: TipoAdmision;

  idProcedimiento?: String;
  procedimiento?: Procedimiento;

}
