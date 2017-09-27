import { Sucursal } from '../sucursal/sucursal.model';

export interface ConcatenaConceptoPorCentroCosto {
  _id?: string;
  idPrestador: Number;
  idCentroCosto: Number;
  idConcepto: Number;
  itemListaEstadoConCptoCentroCosto: Number;
  fechaRegistro: Date;
  loginRegistro: String;
  observaciones: String;

  /** Many-To-One Relationships */
  
  idSucursal?: String;
  sucursal?: Sucursal;

}
