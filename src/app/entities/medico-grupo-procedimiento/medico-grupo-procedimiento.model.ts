import { SubGrupoProcedimiento } from '../sub-grupo-procedimiento/sub-grupo-procedimiento.model';
import { Sucursal } from '../sucursal/sucursal.model';

export interface MedicoGrupoProcedimiento {
  _id?: string;
  idMedico: Number;
  idEspecialidad: Number;
  fechaRegistro: Date;
  loginRegistro: String;
  observaciones: String;

  /** Many-To-One Relationships */
  
  idSubGrupoProcedimiento?: String;
  subGrupoProcedimiento?: SubGrupoProcedimiento;

  idSucursal?: String;
  sucursal?: Sucursal;

}
