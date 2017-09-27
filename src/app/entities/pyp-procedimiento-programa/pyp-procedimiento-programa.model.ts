import { Motivo } from '../motivo/motivo.model';
import { Procedimiento } from '../procedimiento/procedimiento.model';
import { PypProgramas } from '../pyp-programas/pyp-programas.model';

export interface PypProcedimientoPrograma {
  _id?: string;
  idAdmision: Number;
  edadini: Number;
  edadfin: Number;
  uniMedEdad: String;
  itemListaSexo: Number;
  frecuencia: Number;
  cantidad: Number;
  fechaRegistro: Date;
  loginRegistro: String;
  observaciones: String;

  /** Many-To-One Relationships */
  
  idMotivo?: String;
  motivo?: Motivo;

  idProcedimiento?: String;
  procedimiento?: Procedimiento;

  idPypProgramas?: String;
  pypProgramas?: PypProgramas;

}
