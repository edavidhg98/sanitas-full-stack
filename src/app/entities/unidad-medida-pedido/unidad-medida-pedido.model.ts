import { Producto } from '../producto/producto.model';

export interface UnidadMedidaPedido {
  _id?: string;
  unidadMedidaPedido: String;
  descripcion: String;
  fechaRegistro: Date;
  loginRegistro: String;
  observaciones: String;
  aliasUnidadMedidaPedido: String;


  /** One-To-Many Relationships */
  productos?: Producto[];
  producto1s?: Producto[];
  producto2s?: Producto[];
}
