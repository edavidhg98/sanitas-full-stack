import { TrazabilidadAdmision } from '../trazabilidad-admision/trazabilidad-admision.model';

export interface TrazabilidadAdmisionListaEsperaHistoriaClinica {
  _id?: string;
  idListaEsperaHistoriaClinica: Number;
  fechaRegistro: Date;
  loginRegistro: String;
  observaciones: String;

  /** Many-To-One Relationships */
  
  idTrazabilidadAdmision?: String;
  trazabilidadAdmision?: TrazabilidadAdmision;

}
