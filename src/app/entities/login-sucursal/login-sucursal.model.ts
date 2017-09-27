import { Sucursal } from '../sucursal/sucursal.model';
import { Login } from '../login/login.model';

export interface LoginSucursal {
  _id?: string;
  fechaRegistro: Date;
  loginRegistro: String;
  observaciones: String;

  /** Many-To-One Relationships */
  
  idSucursal?: String;
  sucursal?: Sucursal;

  idLogin?: String;
  login?: Login;

}
