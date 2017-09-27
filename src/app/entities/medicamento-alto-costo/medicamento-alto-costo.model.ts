import { Prestador } from '../prestador/prestador.model';
import { Producto } from '../producto/producto.model';
import { Sucursal } from '../sucursal/sucursal.model';
import { Entidad } from '../entidad/entidad.model';

export interface MedicamentoAltoCosto {
  _id?: string;
  itemListaTipoAltoCosto: Number;
  itemListaEstadoMedAltoCosto: Number;
  observaciones: String;
  loginRegistro: String;
  fechaRegistro: Date;
  loginModificacion: String;
  fechaModificacion: Date;

  /** Many-To-One Relationships */
  
  idPrestador?: String;
  prestador?: Prestador;

  idProducto?: String;
  producto?: Producto;

  idSucursal?: String;
  sucursal?: Sucursal;

  idEntidad?: String;
  entidad?: Entidad;

}
