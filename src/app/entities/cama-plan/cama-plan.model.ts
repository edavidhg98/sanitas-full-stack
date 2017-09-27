import { Cama } from '../cama/cama.model';
import { Entidad } from '../entidad/entidad.model';
import { TipoPlan } from '../tipo-plan/tipo-plan.model';

export interface CamaPlan {
  _id?: string;
  fechaRegistro: Date;
  loginRegistro: String;
  observaciones: String;

  /** Many-To-One Relationships */
  
  idCama?: String;
  cama?: Cama;

  idEntidad?: String;
  entidad?: Entidad;

  idTipoPlan?: String;
  tipoPlan?: TipoPlan;

}
