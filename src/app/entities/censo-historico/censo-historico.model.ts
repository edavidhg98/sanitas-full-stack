import { Cama } from '../cama/cama.model';
import { Sucursal } from '../sucursal/sucursal.model';

export interface CensoHistorico {
  _id?: string;
  fecha: Date;
  itemListaEstadoCamaCensoHistorico: Number;
  fechaRegistro: Date;
  loginRegistro: String;
  observaciones: String;

  /** Many-To-One Relationships */
  
  idCama?: String;
  cama?: Cama;

  idSucursal?: String;
  sucursal?: Sucursal;

}
