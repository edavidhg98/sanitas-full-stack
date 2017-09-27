import { Prestador } from '../prestador/prestador.model';

export interface CentroCostoValido {
  _id?: string;
  idCentroCostoGenera: Number;
  idCentroCostoValido: Number;
  fechaRegistro: Date;
  loginRegistro: String;
  observaciones: String;
  farmacia: String;
  estadoItemLista: Number;

  /** Many-To-One Relationships */
  
  idCentroCostoValido1?: String;
  centroCostoValido1?: CentroCostoValido;

  idCentroCostoValido2?: String;
  centroCostoValido2?: CentroCostoValido;

  idPrestador?: String;
  prestador?: Prestador;

}
