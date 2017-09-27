import { Motivo } from '../motivo/motivo.model';

export interface TipoMotivo {
  _id?: string;
  itemListaClaseMotivo: Number;
  descripcion: String;
  fechaRegistro: Date;
  loginRegistro: String;
  observaciones: String;
  codigo: Number;


  /** One-To-Many Relationships */
  motivos?: Motivo[];
}
