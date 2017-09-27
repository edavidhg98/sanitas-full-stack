import { Ciudad } from '../ciudad/ciudad.model';
import { LoginSucursal } from '../login-sucursal/login-sucursal.model';
import { Sucursal } from '../sucursal/sucursal.model';

export interface Login {
  _id?: string;
  login: String;
  claveAgfa: String;
  itemListaCargo: Number;
  itemListaEstadoLogin: Number;
  numeroDocumento: String;
  fechaRegistro: Date;
  itemListaTipoUsuarioLogin: Number;
  usuarioLdap: String;
  idCentroCosto: Number;
  fechaUltimoCambio: Date;
  apellido: String;
  callCenter: String;
  consultaHistoria: String;
  password: String;
  nombre: String;
  observaciones: String;
  fechaUltimoAcceso: Date;
  loginRegistro: String;
  usuarioAgfa: String;
  itemListaTipoDocumento: Number;

  /** Many-To-One Relationships */
  
  idCiudad?: String;
  ciudad?: Ciudad;

  idSucursal?: String;
  sucursal?: Sucursal;

  /** One-To-Many Relationships */
  loginSucursals?: LoginSucursal[];
}
