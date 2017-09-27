import { Entidad } from '../entidad/entidad.model';

export interface EntidadUvr {
  _id?: string;
  itemListaPersonalMedico: Number;
  fechaInicioConvenio: Date;
  fecFinConvenio: Date;
  valor: Number;
  fechaRegistro: Date;
  loginRegistro: String;
  observaciones: String;
  itemListaEstadoEntidadUvr: Number;

  /** Many-To-One Relationships */
  
  idEntidad?: String;
  entidad?: Entidad;

}
