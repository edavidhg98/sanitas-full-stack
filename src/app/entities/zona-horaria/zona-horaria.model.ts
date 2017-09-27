import { Sucursal } from '../sucursal/sucursal.model';

export interface ZonaHoraria {
  _id?: string;
  utc: Number;
  fechaRegistro: Date;
  loginRegistro: String;
  observaciones: String;

  /** Many-To-One Relationships */
  
  idSucursal?: String;
  sucursal?: Sucursal;

}
