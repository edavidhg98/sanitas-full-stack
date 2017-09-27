import { Entidad } from '../entidad/entidad.model';
import { Procedimiento } from '../procedimiento/procedimiento.model';

export interface ProcedimientoEntidad {
  _id?: string;
  autoriza: String;
  autorizaConsultaexterna: String;
  loginRegistro: String;
  autorizaCirugia: String;
  autorizaProcedimientos: String;
  autorizaUrgencias: String;
  idPrestador: Number;
  itemListaEstadoProcxent: Number;
  fechaRegistro: Date;
  flagUvr: String;
  aplicaValorUvr: String;
  flagEgresa: String;
  itemListaAutorizaProcxent: Number;
  observaciones: String;
  autorizaHospitalizacion: String;
  atributoBh: Number;

  /** Many-To-One Relationships */
  
  idEntidad?: String;
  entidad?: Entidad;

  idProcedimiento?: String;
  procedimiento?: Procedimiento;

}
