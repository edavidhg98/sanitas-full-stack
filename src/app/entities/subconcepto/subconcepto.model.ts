import { Motivo } from '../motivo/motivo.model';
import { TipoAdmision } from '../tipo-admision/tipo-admision.model';

export interface Subconcepto {
  _id?: string;
  idConcepto: Number;
  idSubConcepto: Number;
  fechaRegistro: Date;
  loginRegistro: String;
  observaciones: String;
  idPrestador: Number;

  /** Many-To-One Relationships */
  
  idMotivo?: String;
  motivo?: Motivo;

  idTipoAdmision?: String;
  tipoAdmision?: TipoAdmision;

}
