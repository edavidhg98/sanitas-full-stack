import { Procedimiento } from '../procedimiento/procedimiento.model';

export interface ProcedimientoFinalidad {
  _id?: string;
  finalidad: String;

  /** Many-To-One Relationships */
  
  idProcedimiento?: String;
  procedimiento?: Procedimiento;

}
