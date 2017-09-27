import { Procedimiento } from '../procedimiento/procedimiento.model';

export interface ProcedimientosRis {
  _id?: string;
  idSucursal: Number;
  rownum: Number;
  itemListaIdEstado: Number;
  qpqdQpExamkey: String;
  qpqdQpExsdkey: String;
  petAotomaticaSiEsUrgente: String;
  fechaRegistro: Date;
  loginRegistro: String;
  nombreExamen: String;
  observaciones: String;
  codigoRis: String;
  petAutomatica: String;
  activo: Boolean;
  codigoHis: String;
  exKey: Number;
  exService: Number;

  /** Many-To-One Relationships */
  
  idProcedimiento?: String;
  procedimiento?: Procedimiento;

}
