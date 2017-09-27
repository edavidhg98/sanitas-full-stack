import { SucursalEntidad } from '../sucursal-entidad/sucursal-entidad.model';
import { TipoAdmision } from '../tipo-admision/tipo-admision.model';

export interface NivelCargo {
  _id?: string;
  itemListaNivel1: Number;
  itemListaNivel2: Number;
  itemListaNivel3: Number;
  itemListaNivel4: Number;
  itemListaNivel5: Number;
  fechaRegistro: Date;
  loginRegistro: String;
  observaciones: String;

  /** Many-To-One Relationships */
  
  idSucursalEntidad?: String;
  sucursalEntidad?: SucursalEntidad;

  idTipoAdmision?: String;
  tipoAdmision?: TipoAdmision;

}
