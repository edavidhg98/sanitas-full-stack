import { Sucursal } from '../sucursal/sucursal.model';
import { TipoAdmision } from '../tipo-admision/tipo-admision.model';
import { TrazabilidadAdmisionListaEsperaHistoriaClinica } from '../trazabilidad-admision-lista-espera-historia-clinica/trazabilidad-admision-lista-espera-historia-clinica.model';
import { Consultorio } from '../consultorio/consultorio.model';
import { Motivo } from '../motivo/motivo.model';
import { TrazabilidadAdmisionCargos } from '../trazabilidad-admision-cargos/trazabilidad-admision-cargos.model';

export interface TrazabilidadAdmision {
  _id?: string;
  idAdmision: Number;
  itemListaDestinoListaEspera: Number;
  horaIngreso: Number;
  ipRegistro: String;
  minutoIngreso: Number;
  flagInconsistencia: String;
  idMedicoHospitaliza: Number;
  consultaProgramada: String;
  idMedicoEgreso: Number;
  consecutivoFur: Number;
  ingresoconcita: String;
  idMedicoTratante: Number;
  fechaEgreso: Date;
  codigoCita: String;
  diasEstancia: Number;
  idEspecialidad: Number;
  itemListaDestinoFinal: Number;
  consecutivoAtencion: Number;
  loginEgreso: String;
  fechaRegistro: Date;
  loginCreacion: String;
  anoAdm: Number;
  itemListaViaIngreso: Number;
  login: String;
  horaEgreso: Number;
  numAdm: Number;
  itemListaFlagFacturado: Number;
  observaciones: String;
  conPriVez: String;
  leyProteccionDatos: String;
  minutoEgreso: Number;
  itemListaEstadoAdmision: Number;
  fechaIngreso: Date;

  /** Many-To-One Relationships */
  
  idSucursal?: String;
  sucursal?: Sucursal;

  idTipoAdmision?: String;
  tipoAdmision?: TipoAdmision;

  idConsultorio?: String;
  consultorio?: Consultorio;

  idMotivo?: String;
  motivo?: Motivo;

  idMotivo1?: String;
  motivo1?: Motivo;

  idMotivo2?: String;
  motivo2?: Motivo;

  /** One-To-Many Relationships */
  trazabilidadAdmisionListaEsperaHistoriaClinicas?: TrazabilidadAdmisionListaEsperaHistoriaClinica[];
  trazabilidadAdmisionCargoss?: TrazabilidadAdmisionCargos[];
}
