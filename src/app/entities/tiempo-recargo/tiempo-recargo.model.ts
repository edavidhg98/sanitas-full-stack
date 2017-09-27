import { SucursalEntidad } from '../sucursal-entidad/sucursal-entidad.model';

export interface TiempoRecargo {
  _id?: string;
  codigo: String;
  descripcion: String;
  horaDesde: Number;
  minutoDesde: Number;
  horaFinal: Number;
  minutoFinal: Number;
  fechaRegistro: Date;
  loginRegistro: String;
  observaciones: String;
  itemListaEstadoMttoRecAuto: Number;

  /** Many-To-One Relationships */
  
  idSucursalEntidad?: String;
  sucursalEntidad?: SucursalEntidad;

}
