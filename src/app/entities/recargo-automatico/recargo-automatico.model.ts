import { Entidad } from '../entidad/entidad.model';

export interface RecargoAutomatico {
  _id?: string;
  idSucursal: Number;
  codigoInteligente: String;
  porcentaje: Number;
  valor: Number;
  fechaRegistro: Date;
  loginRegistro: String;
  observaciones: String;
  activo: Boolean;

  /** Many-To-One Relationships */
  
  idEntidad?: String;
  entidad?: Entidad;

}
