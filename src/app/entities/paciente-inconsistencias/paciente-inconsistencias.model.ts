import { Entidad } from '../entidad/entidad.model';

export interface PacienteInconsistencias {
  _id?: string;
  numDoc: String;
  contrato: String;
  numInfo: Number;
  sexoExterno: String;
  idSucursal: Number;
  apel2Externo: String;
  tipoInconsistencia: String;
  fecNacExterno: Date;
  tipoTipdoc: String;
  fecNac: Date;
  tipoNumdoc: String;
  appInterna: String;
  nombreExterno: String;
  apel1Externo: String;
  tipoNom1: String;
  nom2Externo: String;
  nombre: String;
  nom1Externo: String;
  tipoNom: String;
  apel2: String;
  tipDocExterno: String;
  apel1: String;
  tipoApel1: String;
  appExterna: String;
  tipDoc: String;
  nom1: String;
  tipoApel2: String;
  observaciones: String;
  numDocExterno: String;
  loginRegistro: String;
  tipoFecnac: String;
  fechaRegistro: Date;
  nom2: String;
  sexo: String;

  /** Many-To-One Relationships */
  
  idEntidad?: String;
  entidad?: Entidad;

}
