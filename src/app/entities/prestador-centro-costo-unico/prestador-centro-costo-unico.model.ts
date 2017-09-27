import { Prestador } from '../prestador/prestador.model';

export interface PrestadorCentroCostoUnico {
  _id?: string;
  centroCosto: String;
  itemListaTipoCentroCostoUnico: Number;
  fechaRegistro: Date;
  loginRegistro: String;
  observaciones: String;

  /** Many-To-One Relationships */
  
  idPrestador?: String;
  prestador?: Prestador;

}
