import { Procedimiento } from '../procedimiento/procedimiento.model';

export interface ConsultaExternaPyp {
  _id?: string;
  codigoPyp: String;
  descripcion: String;
  codigoPypcyd: String;
  fechaRegistro: Date;
  loginRegistro: String;
  observaciones: String;

  /** Many-To-One Relationships */
  
  idProcedimiento?: String;
  procedimiento?: Procedimiento;

}
