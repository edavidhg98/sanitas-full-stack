import { CamaPlan } from '../cama-plan/cama-plan.model';
import { Entidad } from '../entidad/entidad.model';
import { TiposDocumentoEntidad } from '../tipos-documento-entidad/tipos-documento-entidad.model';

export interface TipoPlan {
  _id?: string;
  tipPlan: String;
  descripcion: String;
  valModerado: Number;
  valCopago: Number;
  fechaRegistro: Date;
  loginRegistro: String;
  observaciones: String;

  /** Many-To-One Relationships */
  
  idEntidad?: String;
  entidad?: Entidad;

  /** One-To-Many Relationships */
  camaPlans?: CamaPlan[];
  tiposDocumentoEntidads?: TiposDocumentoEntidad[];
}
