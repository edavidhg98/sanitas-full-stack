import { Sucursal } from '../sucursal/sucursal.model';
import { Entidad } from '../entidad/entidad.model';

export interface HomologacionServiciosAgfa {
  _id?: string;
  codigoSophia: String;
  codigoGrabacionAgfa: String;
  fechaRegistro: Date;
  loginRegistro: String;
  itemListaEstadoHomologaServicioAgfa: Number;
  observaciones: String;

  /** Many-To-One Relationships */
  
  idSucursal?: String;
  sucursal?: Sucursal;

  idEntidad?: String;
  entidad?: Entidad;

}
