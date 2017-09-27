import { CargosPendientes } from '../cargos-pendientes/cargos-pendientes.model';
import { Entidad } from '../entidad/entidad.model';
import { Motivo } from '../motivo/motivo.model';
import { Procedimiento } from '../procedimiento/procedimiento.model';

export interface DetalleCargosPendientes {
  _id?: string;
  secuencia: Number;
  confirmacionManual: String;
  numeroAutorizacion: String;
  atcSolicitado: String;
  itemListaMedidaMedicamento: Number;
  valCompra: Number;
  cantidadAplicada: Number;
  porPocentaje: Number;
  cantidadEntregada: Number;
  medMollier: String;
  cantidadRecibida: Number;
  cantidadDespachada: Number;
  observaciones: String;
  itemListaEstado: Number;
  loginCancel: String;
  cantidadSolicita: Number;
  loginRegistro: String;
  porIncremento: Number;
  fechaRegistro: Date;
  idProducto: Number;
  presentacion: String;
  numPeddevuelto: Number;
  horaDespacho: Number;
  itemListaTipoCargo: Number;
  fechaDespacho: Date;
  itemListaEstadoEnvio: Number;
  durante: Number;
  minutoDespacho: Number;
  cantidadSuministrada: Number;

  /** Many-To-One Relationships */
  
  idCargosPendientes?: String;
  cargosPendientes?: CargosPendientes;

  idEntidad?: String;
  entidad?: Entidad;

  idMotivo?: String;
  motivo?: Motivo;

  idProcedimiento?: String;
  procedimiento?: Procedimiento;

}
