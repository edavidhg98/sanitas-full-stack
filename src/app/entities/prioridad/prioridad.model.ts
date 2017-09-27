import { CargosPendientes } from '../cargos-pendientes/cargos-pendientes.model';
import { Pedidos } from '../pedidos/pedidos.model';

export interface Prioridad {
  _id?: string;
  descripcion: String;
  valPriorida: Number;
  fechaRegistro: Date;
  loginRegistro: String;
  observaciones: String;
  prioridad: String;


  /** One-To-Many Relationships */
  cargosPendientess?: CargosPendientes[];
  pedidoss?: Pedidos[];
}
