import { Entidad } from '../entidad/entidad.model';
import { TipoPlan } from '../tipo-plan/tipo-plan.model';

export interface TiposDocumentoEntidad {
  _id?: string;
  idTipoAdmision: Number;
  itemListaTipoAfiliado: Number;
  documento: String;
  pideNumeroDocumento: String;
  fechaRegistro: Date;
  loginRegistro: String;
  observaciones: String;

  /** Many-To-One Relationships */
  
  idEntidad?: String;
  entidad?: Entidad;

  idTipoPlan?: String;
  tipoPlan?: TipoPlan;

}
