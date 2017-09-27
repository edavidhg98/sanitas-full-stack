import { Prioridad } from '../prioridad/prioridad.model';
import { Sucursal } from '../sucursal/sucursal.model';

export interface Pedidos {
  _id?: string;
  idAdmision: Number;
  minutoDespacho: Number;
  pedidoManual: String;
  consecutivoManual: Number;
  horaDespacho: Number;
  idMedicoAtiende: Number;
  loginDespacho: String;
  consecutivoSolicitud: Number;
  observaciones: String;
  idCentroCostoDestino: Number;
  itemListaEstadoPedido: Number;
  itemListaTipoPedido: Number;
  minutoPedido: Number;
  idCentroCosto: Number;
  horaPedido: Number;
  fechaRegistro: Date;
  fechaPedido: Date;
  fechaDespacho: Date;
  loginPedido: String;

  /** Many-To-One Relationships */
  
  idPrioridad?: String;
  prioridad?: Prioridad;

  idSucursal?: String;
  sucursal?: Sucursal;

}
