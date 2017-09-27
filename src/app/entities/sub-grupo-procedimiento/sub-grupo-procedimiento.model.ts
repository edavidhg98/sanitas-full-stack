import { GrupoProcedimiento } from '../grupo-procedimiento/grupo-procedimiento.model';
import { MedicoGrupoProcedimiento } from '../medico-grupo-procedimiento/medico-grupo-procedimiento.model';
import { Procedimiento } from '../procedimiento/procedimiento.model';

export interface SubGrupoProcedimiento {
  _id?: string;
  subProced: String;
  descripcion: String;
  fechaRegistro: Date;
  loginRegistro: String;
  observaciones: String;

  /** Many-To-One Relationships */
  
  idGrupoProcedimiento?: String;
  grupoProcedimiento?: GrupoProcedimiento;

  /** One-To-Many Relationships */
  medicoGrupoProcedimientos?: MedicoGrupoProcedimiento[];
  procedimientos?: Procedimiento[];
}
