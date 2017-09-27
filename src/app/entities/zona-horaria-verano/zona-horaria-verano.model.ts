import { Sucursal } from '../sucursal/sucursal.model';

export interface ZonaHorariaVerano {
  _id?: string;
  fechaInicio: Date;
  fechaFin: Date;
  utc: Number;
  fechaRegistro: Date;
  loginRegistro: String;
  observaciones: String;

  /** Many-To-One Relationships */
  
  idSucursal?: String;
  sucursal?: Sucursal;

}
