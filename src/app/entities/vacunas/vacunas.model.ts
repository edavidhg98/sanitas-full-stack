import { TarifaVacunacion } from '../tarifa-vacunacion/tarifa-vacunacion.model';

export interface Vacunas {
  _id?: string;
  vacuna: String;
  descripcion: String;
  fechaRegistro: Date;
  loginRegistro: String;
  observaciones: String;


  /** One-To-Many Relationships */
  tarifaVacunacions?: TarifaVacunacion[];
}
