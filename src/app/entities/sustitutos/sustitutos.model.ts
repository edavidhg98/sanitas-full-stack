import { Prestador } from '../prestador/prestador.model';
import { Producto } from '../producto/producto.model';

export interface Sustitutos {
  _id?: string;
  observaciones: String;

  /** Many-To-One Relationships */
  
  idPrestador?: String;
  prestador?: Prestador;

  idProducto?: String;
  producto?: Producto;

  idProducto1?: String;
  producto1?: Producto;

}
