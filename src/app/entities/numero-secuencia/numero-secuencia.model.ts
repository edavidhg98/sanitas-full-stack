import { Sucursal } from '../sucursal/sucursal.model';

export interface NumeroSecuencia {
  _id?: string;
  type: String;
  prefix: String;
  lastnumber: Number;
  length: Number;
  year: Boolean;
  month: Boolean;
  lastyear: Number;
  lastmonth: Number;
  tablename: String;

  /** Many-To-One Relationships */
  
  idSucursal?: String;
  sucursal?: Sucursal;

}
