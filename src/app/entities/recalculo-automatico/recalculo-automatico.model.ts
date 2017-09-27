import { Sucursal } from '../sucursal/sucursal.model';
import { Entidad } from '../entidad/entidad.model';

export interface RecalculoAutomatico {
  _id?: string;
  codigoInteligente: String;
  porcentaje: Number;
  valor: Number;
  fechaRegistro: Date;
  loginRegistro: String;
  observaciones: String;
  idPrestador: Number;
  itemListaEstadoRecalculo: Number;

  /** Many-To-One Relationships */
  
  idSucursal?: String;
  sucursal?: Sucursal;

  idEntidad?: String;
  entidad?: Entidad;

}
