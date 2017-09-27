import { Cama } from '../cama/cama.model';
import { Sucursal } from '../sucursal/sucursal.model';

export interface Seccion {
  _id?: string;
  seccion: String;
  idCentroCosto: Number;
  descripcion: String;
  fechaRegistro: Date;
  loginRegistro: String;
  observaciones: String;
  manejaCenso: String;

  /** Many-To-One Relationships */
  
  idSucursal?: String;
  sucursal?: Sucursal;

  /** One-To-Many Relationships */
  camas?: Cama[];
}
