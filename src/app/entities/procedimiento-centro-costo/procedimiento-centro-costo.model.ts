import { Prestador } from '../prestador/prestador.model';
import { Sucursal } from '../sucursal/sucursal.model';
import { Procedimiento } from '../procedimiento/procedimiento.model';

export interface ProcedimientoCentroCosto {
  _id?: string;
  idCentroCosto: Number;
  loginRegistro: String;
  observaciones: String;
  tiempoDuracion: Number;
  idConcepto: Number;
  fechaRegistro: Date;
  manejaHcresultado: String;
  honorariosR: String;
  itemListaTiempoLimpieza: Number;
  itemListaTipoEncabezado: Number;
  tiempoAdecuacion: Number;
  tiempoLimpieza: String;

  /** Many-To-One Relationships */
  
  idPrestador?: String;
  prestador?: Prestador;

  idSucursal?: String;
  sucursal?: Sucursal;

  idProcedimiento?: String;
  procedimiento?: Procedimiento;

}
