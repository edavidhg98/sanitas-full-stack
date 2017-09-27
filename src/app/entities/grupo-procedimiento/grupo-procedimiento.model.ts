import { SubGrupoProcedimiento } from '../sub-grupo-procedimiento/sub-grupo-procedimiento.model';

export interface GrupoProcedimiento {
  _id?: string;
  itemListaTipoProcedimiento: Number;
  gruProced: String;
  descripcion: String;
  fechaRegistro: Date;
  loginRegistro: String;
  observaciones: String;
  idPrestador: Number;
  itemListaEstadoEntidadUvr: Number;


  /** One-To-Many Relationships */
  subGrupoProcedimientos?: SubGrupoProcedimiento[];
}
