import { Cama } from '../cama/cama.model';

export interface FotoEstadoCama {
  _id?: string;
  idfoto: Number;
  itemListaEstadoCama: Number;
  fechaRegistro: Date;
  loginRegistro: String;


  /** One-To-Many Relationships */
  camas?: Cama[];
}
