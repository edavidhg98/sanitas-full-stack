import { Procedimiento } from '../procedimiento/procedimiento.model';

export interface AutorizacionBh {
  _id?: string;
  idAdmision: Number;
  codigoPlan: String;
  codigoContrato: String;
  numeroAutorizacion: String;
  codigoInternoEntidad: String;
  fechaRegistro: Date;
  loginRegistro: String;
  observaciones: String;
  procedimientoServicio: String;
  codigoFamilia: String;
  codigoUsuario: String;

  /** Many-To-One Relationships */
  
  idProcedimiento?: String;
  procedimiento?: Procedimiento;

}
