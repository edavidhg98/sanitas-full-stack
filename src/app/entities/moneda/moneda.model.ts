import { SucursalEntidad } from '../sucursal-entidad/sucursal-entidad.model';

export interface Moneda {
  _id?: string;
  moneda: String;
  abreviaturaPaisMoneda: String;
  descripcion: String;
  fechaRegistro: Date;
  loginRegistro: String;
  observaciones: String;


  /** One-To-Many Relationships */
  sucursalEntidads?: SucursalEntidad[];
}
