import { Ciudad } from '../ciudad/ciudad.model';

export interface Localidad {
  _id?: string;
  codigo: String;
  nombreLocalidad: String;
  fechaRegistro: Date;
  loginRegistro: String;
  observaciones: String;

  /** Many-To-One Relationships */
  
  idCiudad?: String;
  ciudad?: Ciudad;

}
