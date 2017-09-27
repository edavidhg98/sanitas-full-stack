import { Sucursal } from '../sucursal/sucursal.model';

export interface Salas {
  _id?: string;
  sala: String;
  descripcion: String;
  itemListaTipoSala: Number;
  fechaRegistro: Date;
  loginRegistro: String;
  observaciones: String;

  /** Many-To-One Relationships */
  
  idSucursal?: String;
  sucursal?: Sucursal;

}
