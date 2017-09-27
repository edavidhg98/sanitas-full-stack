import { TarifaVacunacion } from '../tarifa-vacunacion/tarifa-vacunacion.model';

export interface TipoTarifaVacunacion {
  _id?: string;
  tarifa: String;
  descripcion: String;
  fechaRegistro: Date;
  loginRegistro: String;
  observaciones: String;


  /** One-To-Many Relationships */
  tarifaVacunacions?: TarifaVacunacion[];
}
