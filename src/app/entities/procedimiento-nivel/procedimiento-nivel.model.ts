import { Procedimiento } from '../procedimiento/procedimiento.model';
import { Sucursal } from '../sucursal/sucursal.model';

export interface ProcedimientoNivel {
  _id?: string;
  fechaInicial: Date;
  fechaFinal: Date;
  nivel: String;
  idCentroCosto: Number;
  fechaRegistro: Date;
  loginRegistro: String;
  observaciones: String;

  /** Many-To-One Relationships */
  
  idProcedimiento?: String;
  procedimiento?: Procedimiento;

  idProcedimiento1?: String;
  procedimiento1?: Procedimiento;

  idSucursal?: String;
  sucursal?: Sucursal;

}
