import { Entidad } from '../entidad/entidad.model';
import { Sucursal } from '../sucursal/sucursal.model';

export interface GrupoEtareo {
  _id?: string;
  codigo: String;
  descripcion: String;
  edadDesde: Number;
  edadHasta: Number;
  fechaRegistro: Date;
  loginRegistro: String;
  observaciones: String;

  /** Many-To-One Relationships */
  
  idEntidad?: String;
  entidad?: Entidad;

  idSucursal?: String;
  sucursal?: Sucursal;

}
