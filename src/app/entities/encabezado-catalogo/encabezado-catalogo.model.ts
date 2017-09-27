import { SucursalEntidad } from '../sucursal-entidad/sucursal-entidad.model';

export interface EncabezadoCatalogo {
  _id?: string;
  idEncabezado: Number;
  descripcion: String;
  itemListaEstado: Number;
  observacion: String;
  fechaRegistro: Date;
  loginRegistro: String;
  fechaModificacion: Date;
  loginModificacion: String;
  activo: Boolean;


  /** One-To-Many Relationships */
  sucursalEntidads?: SucursalEntidad[];
}
