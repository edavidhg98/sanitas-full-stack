import { Localidad } from '../localidad/localidad.model';
import { Prestador } from '../prestador/prestador.model';
import { Sucursal } from '../sucursal/sucursal.model';
import { Entidad } from '../entidad/entidad.model';
import { Login } from '../login/login.model';

export interface Ciudad {
  _id?: string;
  idDepartamento: Number;
  nombreCiudad: String;
  fechaRegistro: Date;
  loginRegistro: String;
  observaciones: String;
  codigo: String;


  /** One-To-Many Relationships */
  localidads?: Localidad[];
  prestadors?: Prestador[];
  sucursals?: Sucursal[];
  entidads?: Entidad[];
  logins?: Login[];
}
