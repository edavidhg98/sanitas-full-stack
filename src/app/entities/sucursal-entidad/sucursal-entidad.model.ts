import { EncabezadoCatalogo } from '../encabezado-catalogo/encabezado-catalogo.model';
import { Moneda } from '../moneda/moneda.model';
import { NivelCargo } from '../nivel-cargo/nivel-cargo.model';
import { ProcedimientoConvenioCapitado } from '../procedimiento-convenio-capitado/procedimiento-convenio-capitado.model';
import { Sucursal } from '../sucursal/sucursal.model';
import { TiempoRecargo } from '../tiempo-recargo/tiempo-recargo.model';
import { Entidad } from '../entidad/entidad.model';
import { TarifaVacunacion } from '../tarifa-vacunacion/tarifa-vacunacion.model';

export interface SucursalEntidad {
  _id?: string;
  porcentajeMinAnticipo: Number;
  manejaPenalizaCancelacion: String;
  minejaTiempoCancelaCita: Number;
  manejaPaqueteUrgencia: String;
  restringeAdmision: String;
  manejaPenalizaInasistencia: String;
  idItemListaEstadocyfCatalogo: Number;
  verificaFoto: String;
  manejaDecimales: String;
  verificaEstadoPac: String;
  fechaRegistro: Date;
  email: String;
  valorRedondeo: Number;
  itemListaTipoUsuario: Number;
  loginRegistro: String;
  itemListaTipoManejoHoraObs: Number;
  manejaRedondeo: String;
  itemListaTipoVale: Number;
  observaciones: String;
  manejaPyp: String;
  porcentajeAdicionalAnticipo: Number;
  cantidadMinutosObservacion: Number;
  idItemListaEstadocyf: Number;
  cantidadHorasObservacion: Number;
  usaAfirma: String;
  horaGeneraReporte: Number;

  /** Many-To-One Relationships */
  
  idEncabezadoCatalogo?: String;
  encabezadoCatalogo?: EncabezadoCatalogo;

  idMoneda?: String;
  moneda?: Moneda;

  idSucursal?: String;
  sucursal?: Sucursal;

  idEntidad?: String;
  entidad?: Entidad;

  /** One-To-Many Relationships */
  nivelCargos?: NivelCargo[];
  procedimientoConvenioCapitados?: ProcedimientoConvenioCapitado[];
  tiempoRecargos?: TiempoRecargo[];
  tarifaVacunacions?: TarifaVacunacion[];
}
