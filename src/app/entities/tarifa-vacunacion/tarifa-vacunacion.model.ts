import { SucursalEntidad } from '../sucursal-entidad/sucursal-entidad.model';
import { TipoTarifaVacunacion } from '../tipo-tarifa-vacunacion/tipo-tarifa-vacunacion.model';
import { Vacunas } from '../vacunas/vacunas.model';

export interface TarifaVacunacion {
  _id?: string;
  valor: Number;
  fechaRegistro: Date;
  loginRegistro: String;
  observaciones: String;

  /** Many-To-One Relationships */
  
  idSucursalEntidad?: String;
  sucursalEntidad?: SucursalEntidad;

  idTipoTarifaVacunacion?: String;
  tipoTarifaVacunacion?: TipoTarifaVacunacion;

  idVacunas?: String;
  vacunas?: Vacunas;

}
