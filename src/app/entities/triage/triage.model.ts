import { Consultorio } from '../consultorio/consultorio.model';
import { Entidad } from '../entidad/entidad.model';
import { Motivo } from '../motivo/motivo.model';
import { Sucursal } from '../sucursal/sucursal.model';

export interface Triage {
  _id?: string;
  idPaciente: Number;
  fup: Date;
  observaciones: String;
  fur: Date;
  loginRegistro: String;
  alerta: String;
  clasificacionManual: String;
  escDolor: String;
  clasificacionCalculada: String;
  descripcionMotivoConsulta: String;
  fechaRegistro: Date;
  idAdmision: Number;
  remitidoa: String;
  minutoIngreso: Number;
  cesarias: Number;
  itemListaEstadoTriage: Number;
  muertos: Number;
  horaIngreso: Number;
  gestacion: String;
  estadoAlarma: String;
  abortos: Number;
  fechaIngreso: Date;
  partos: Number;
  encabezadoCuestionario: Number;
  tiempoaprox: Number;
  vivos: Number;
  especialidad: String;

  /** Many-To-One Relationships */
  
  idConsultorio?: String;
  consultorio?: Consultorio;

  idEntidad?: String;
  entidad?: Entidad;

  idMotivo?: String;
  motivo?: Motivo;

  idSucursal?: String;
  sucursal?: Sucursal;

}
