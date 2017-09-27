import { Procedimiento } from '../procedimiento/procedimiento.model';

export interface AuditoriaSolicitud {
  _id?: string;
  idAdmision: Number;
  numeroSolicitud: String;
  idMedico: Number;
  fechaRegistro: Date;
  loginRegistro: String;
  observaciones: String;

  /** Many-To-One Relationships */
  
  idProcedimiento?: String;
  procedimiento?: Procedimiento;

}
