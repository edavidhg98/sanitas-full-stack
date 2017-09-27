import { Entidad } from '../entidad/entidad.model';
import { Prestador } from '../prestador/prestador.model';
import { Producto } from '../producto/producto.model';

export interface ExcepcionProducto {
  _id?: string;
  itemListaEstadoExcepcionProducto: Number;
  particular: String;
  observaciones: String;
  loginRegistro: String;
  fechaRegistro: Date;

  /** Many-To-One Relationships */
  
  idEntidad?: String;
  entidad?: Entidad;

  idPrestador?: String;
  prestador?: Prestador;

  idProducto?: String;
  producto?: Producto;

}
