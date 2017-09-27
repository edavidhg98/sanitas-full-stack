import { PypProcedimientoPrograma } from '../pyp-procedimiento-programa/pyp-procedimiento-programa.model';

export interface PypProgramas {
  _id?: string;
  codPrograma: Number;
  descripcion: String;
  idAdmision: Number;
  itemListaEstadoscyf: Number;
  fechaRegistro: Date;
  loginRegistro: String;
  observaciones: String;


  /** One-To-Many Relationships */
  pypProcedimientoProgramas?: PypProcedimientoPrograma[];
}
