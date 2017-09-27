import { Prestador } from '../prestador/prestador.model';

export interface Recargo {
  _id?: string;
  recargo: String;
  descripcion: String;
  porcentaje: Number;
  fechaRegistro: Date;
  loginRegistro: String;
  observaciones: String;
  itemListaEstadoRecargo: Number;

  /** Many-To-One Relationships */
  
  idPrestador?: String;
  prestador?: Prestador;

}
