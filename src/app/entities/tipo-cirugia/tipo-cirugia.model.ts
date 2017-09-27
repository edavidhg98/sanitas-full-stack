import { Entidad } from '../entidad/entidad.model';

export interface TipoCirugia {
  _id?: string;
  tipoCirugia: String;
  descripcion: String;
  fechaRegistro: Date;
  loginRegistro: String;
  observaciones: String;
  itemListaEstadoCirugia: Number;

  /** Many-To-One Relationships */
  
  idEntidad?: String;
  entidad?: Entidad;

}
