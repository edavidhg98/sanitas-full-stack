import { Anticipo } from '../anticipo/anticipo.model';
import { AuditoriaSolicitud } from '../auditoria-solicitud/auditoria-solicitud.model';
import { AutorizacionBh } from '../autorizacion-bh/autorizacion-bh.model';
import { Cama } from '../cama/cama.model';
import { CargoAutomatico } from '../cargo-automatico/cargo-automatico.model';
import { ConsultaExternaPyp } from '../consulta-externa-pyp/consulta-externa-pyp.model';
import { DetalleCargosPendientes } from '../detalle-cargos-pendientes/detalle-cargos-pendientes.model';
import { EncabezadoResultado } from '../encabezado-resultado/encabezado-resultado.model';
import { ExcepcionRegargo } from '../excepcion-regargo/excepcion-regargo.model';
import { ProcedimientoConvenioCapitado } from '../procedimiento-convenio-capitado/procedimiento-convenio-capitado.model';
import { ProcedimientoEntidad } from '../procedimiento-entidad/procedimiento-entidad.model';
import { SubGrupoProcedimiento } from '../sub-grupo-procedimiento/sub-grupo-procedimiento.model';
import { TipoAnestesia } from '../tipo-anestesia/tipo-anestesia.model';
import { ProcedimientoCentroCosto } from '../procedimiento-centro-costo/procedimiento-centro-costo.model';
import { ProcedimientoNivel } from '../procedimiento-nivel/procedimiento-nivel.model';
import { ProcedimientosRis } from '../procedimientos-ris/procedimientos-ris.model';
import { PypProcedimientoPrograma } from '../pyp-procedimiento-programa/pyp-procedimiento-programa.model';
import { ProcedimientoFinalidad } from '../procedimiento-finalidad/procedimiento-finalidad.model';

export interface Procedimiento {
  _id?: string;
  procedim: String;
  aliasIss: String;
  idEspecialidadInterconsulta: Number;
  aliasCups: String;
  osi: String;
  alias: String;
  codigoOsi: String;
  autPaciente: String;
  flagPos: String;
  nivProced: String;
  categoria: String;
  codSispro: String;
  obsSis: String;
  porCopago: Number;
  clase: String;
  desSispro: String;
  finalidad: String;
  manCopago: String;
  uvr: Number;
  biopsia: String;
  obsConsent: String;
  edadFin: Number;
  forConsent: Number;
  factores: String;
  itemListaTipoProcedimiento: Number;
  edadIni: Number;
  observaciones: String;
  injertos: String;
  loginRegistro: String;
  descripcion: String;
  bilateral: String;
  itemListaTipoBilateralidad: Number;
  tieLimpieza: String;
  itemListaSexo: Number;
  tieAdecuacion: Number;
  patologia: String;
  tieDuracion: Number;
  fechaRegistro: Date;
  ordenahc: String;

  /** Many-To-One Relationships */
  
  idSubGrupoProcedimiento?: String;
  subGrupoProcedimiento?: SubGrupoProcedimiento;

  /** One-To-Many Relationships */
  anticipos?: Anticipo[];
  auditoriaSolicituds?: AuditoriaSolicitud[];
  autorizacionBhs?: AutorizacionBh[];
  camas?: Cama[];
  cama1s?: Cama[];
  cargoAutomaticos?: CargoAutomatico[];
  consultaExternaPyps?: ConsultaExternaPyp[];
  detalleCargosPendientess?: DetalleCargosPendientes[];
  encabezadoResultados?: EncabezadoResultado[];
  excepcionRegargos?: ExcepcionRegargo[];
  procedimientoConvenioCapitados?: ProcedimientoConvenioCapitado[];
  procedimientoEntidads?: ProcedimientoEntidad[];
  tipoAnestesias?: TipoAnestesia[];
  procedimientoCentroCostos?: ProcedimientoCentroCosto[];
  procedimientoNivels?: ProcedimientoNivel[];
  procedimientoNivel1s?: ProcedimientoNivel[];
  procedimientosRiss?: ProcedimientosRis[];
  pypProcedimientoProgramas?: PypProcedimientoPrograma[];
  procedimientoFinalidads?: ProcedimientoFinalidad[];
}
