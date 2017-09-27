import { Cama } from '../cama/cama.model';
import { Motivo } from '../motivo/motivo.model';

export interface AdmisionObservaciones {
  _id?: string;
  idAdmision: Number;
  horaDefinicion: Number;
  minutoDefinicion: Number;
  horaIngreso: Number;
  horaEgreso: Number;
  fechaDefinicion: Date;
  destino: Number;
  fechaRegistro: Date;
  loginRegistro: String;
  fechaIngreso: Date;
  observaciones: String;
  minutoIngreso: Number;
  fechaEgreso: Date;
  minutoEgreso: Number;

  /** Many-To-One Relationships */
  
  idCama?: String;
  cama?: Cama;

  idMotivo?: String;
  motivo?: Motivo;

}
