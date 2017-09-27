import { Prioridad } from '../prioridad/prioridad.model';
import { Sucursal } from '../sucursal/sucursal.model';
import { DetalleCargosPendientes } from '../detalle-cargos-pendientes/detalle-cargos-pendientes.model';
import { Entidad } from '../entidad/entidad.model';

export interface CargosPendientes {
  _id?: string;
  idAdmision: Number;
  fechaDespacho: Date;
  horaDespacho: Number;
  minutoDespacho: Number;
  fechaRegistro: Date;
  idMedicoTiene: Number;
  idMedico: Number;
  loginDespacho: String;
  conSolicitu: Number;
  observaciones: String;
  idCentroCostoDestino: Number;
  minutoPedido: Number;
  manual: Boolean;
  horaPedido: Number;
  idCentroCosto: Number;
  fechaPedido: Date;
  consecutivoManual: Number;
  itemListaTipoPedido: Number;
  itemListaEstado: Number;
  loginPedido: String;

  /** Many-To-One Relationships */
  
  idPrioridad?: String;
  prioridad?: Prioridad;

  idSucursal?: String;
  sucursal?: Sucursal;

  idEntidad?: String;
  entidad?: Entidad;

  /** One-To-Many Relationships */
  detalleCargosPendientess?: DetalleCargosPendientes[];
}
