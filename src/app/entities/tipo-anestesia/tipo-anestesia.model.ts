import { Procedimiento } from '../procedimiento/procedimiento.model';

export interface TipoAnestesia {
  _id?: string;
  tipoAnestesia: String;
  descripcion: String;
  fechaRegistro: Date;
  loginRegistro: String;
  observaciones: String;
  idPrestador: Number;

  /** Many-To-One Relationships */
  
  idProcedimiento?: String;
  procedimiento?: Procedimiento;

}
