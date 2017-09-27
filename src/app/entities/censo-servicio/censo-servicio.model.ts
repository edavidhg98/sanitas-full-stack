import { Sucursal } from '../sucursal/sucursal.model';

export interface CensoServicio {
  _id?: string;
  idAdmision: Number;
  codigoError: Number;
  mensajeError: String;
  fechaRegistro: Date;
  itemListaEstadoRegistro: Number;
  idTrazabilidadAdmision: Number;

  /** Many-To-One Relationships */
  
  idSucursal?: String;
  sucursal?: Sucursal;

}
