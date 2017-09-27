import { Cama } from '../cama/cama.model';

export interface TipoCama {
  _id?: string;
  tipCama: String;
  itemListaTipoEstancia: Number;
  descripcion: String;
  fechaRegistro: Date;
  loginRegistro: String;
  observaciones: String;


  /** One-To-Many Relationships */
  camas?: Cama[];
}
