import { ExcepcionRegargo } from '../excepcion-regargo/excepcion-regargo.model';
import { NivelCargo } from '../nivel-cargo/nivel-cargo.model';
import { ProcedimientoConvenioCapitado } from '../procedimiento-convenio-capitado/procedimiento-convenio-capitado.model';
import { TrazabilidadAdmision } from '../trazabilidad-admision/trazabilidad-admision.model';
import { Subconcepto } from '../subconcepto/subconcepto.model';

export interface TipoAdmision {
  _id?: string;
  tipAdmision: String;
  descripcion: String;
  manResponsa: String;
  manLisespe: String;
  manCargo: String;
  fechaRegistro: Date;
  loginRegistro: String;
  observaciones: String;


  /** One-To-Many Relationships */
  excepcionRegargos?: ExcepcionRegargo[];
  nivelCargos?: NivelCargo[];
  procedimientoConvenioCapitados?: ProcedimientoConvenioCapitado[];
  trazabilidadAdmisions?: TrazabilidadAdmision[];
  subconceptos?: Subconcepto[];
}
