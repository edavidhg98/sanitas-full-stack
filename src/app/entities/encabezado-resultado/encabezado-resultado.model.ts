import { Sucursal } from '../sucursal/sucursal.model';
import { Procedimiento } from '../procedimiento/procedimiento.model';

export interface EncabezadoResultado {
  _id?: string;
  idAdmision: Number;
  idMedicoOrdena: Number;
  idMedicoPractica: Number;
  consecutivoSolicitud: Number;
  loginRegistro: String;
  procedencia: String;
  itemListaEstado: Number;
  idCentroCostoSolicita: Number;
  fechaCargo: Date;
  idCentroCosto: Number;
  numMuestras: Number;
  secuencia: Number;
  fechaRegistro: Date;
  observaciones: String;

  /** Many-To-One Relationships */
  
  idSucursal?: String;
  sucursal?: Sucursal;

  idProcedimiento?: String;
  procedimiento?: Procedimiento;

}
