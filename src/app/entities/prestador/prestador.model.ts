import { CentroCostoValido } from '../centro-costo-valido/centro-costo-valido.model';
import { Ciudad } from '../ciudad/ciudad.model';
import { MedicamentoAltoCosto } from '../medicamento-alto-costo/medicamento-alto-costo.model';
import { Sucursal } from '../sucursal/sucursal.model';
import { Sustitutos } from '../sustitutos/sustitutos.model';
import { ProcedimientoCentroCosto } from '../procedimiento-centro-costo/procedimiento-centro-costo.model';
import { ExcepcionProducto } from '../excepcion-producto/excepcion-producto.model';
import { PrestadorCentroCostoUnico } from '../prestador-centro-costo-unico/prestador-centro-costo-unico.model';
import { Recargo } from '../recargo/recargo.model';

export interface Prestador {
  _id?: string;
  codPreSgs: String;
  consecutivoMenorEdad: Number;
  manRips: String;
  manConAutMenedad: String;
  comportamiento: Number;
  tipDocdefec: String;
  proceanalitica: String;
  telefono: String;
  imagen: String;
  direccion: String;
  manVolantes: String;
  consecutivoNn: Number;
  descripcion: String;
  auditoria: String;
  concconcepcc: String;
  tieConUrg: Number;
  codInterno: String;
  manInterContab: String;
  manPines: String;
  tagDocumento: String;
  numDoc: String;
  manAnticipoManual: String;
  maxintentosPines: Number;
  conAnticipo: Number;
  itemListaUnidadMedidaTiempo: Number;
  observaciones: String;
  codProgIfco: Number;
  fax: String;
  moneda: String;
  fechaRegistro: Date;
  codOrigen: String;
  manConLocNn: String;
  itemListaTipoDocumento: Number;
  manConLocMenedad: String;
  controlaversion: String;
  director: String;
  loginRegistro: String;
  manHisCli: String;

  /** Many-To-One Relationships */
  
  idCiudad?: String;
  ciudad?: Ciudad;

  /** One-To-Many Relationships */
  centroCostoValidos?: CentroCostoValido[];
  medicamentoAltoCostos?: MedicamentoAltoCosto[];
  sucursals?: Sucursal[];
  sustitutoss?: Sustitutos[];
  procedimientoCentroCostos?: ProcedimientoCentroCosto[];
  excepcionProductos?: ExcepcionProducto[];
  prestadorCentroCostoUnicos?: PrestadorCentroCostoUnico[];
  recargos?: Recargo[];
}
