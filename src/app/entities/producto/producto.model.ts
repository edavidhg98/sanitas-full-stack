import { MedicamentoAltoCosto } from '../medicamento-alto-costo/medicamento-alto-costo.model';
import { UnidadMedidaPedido } from '../unidad-medida-pedido/unidad-medida-pedido.model';
import { Sustitutos } from '../sustitutos/sustitutos.model';
import { ExcepcionProducto } from '../excepcion-producto/excepcion-producto.model';

export interface Producto {
  _id?: string;
  codCorto: String;
  itemListaFlagPos: Number;
  itemListaMedicamentoControlado: Number;
  desGenerico: String;
  itemListaEstado: Number;
  codPos: String;
  nivelMedicam: String;
  itemListaFormaFarmaceutica: Number;
  itemListaFlagGenerico: Number;
  codHijo: String;
  descripcion: String;
  observaciones: String;
  desCorta: String;
  loginRegistro: String;
  codAlea: String;
  fechaRegistro: Date;
  descripcionPa: String;
  idPresentacionProducto: Number;
  codBarras: String;
  idConcepto: Number;
  codCums: String;
  itemListaModoDespacho: Number;
  codInteligente: String;
  contenido: Number;
  idConceptoNoPos: Number;
  itemListaReutilizable: Number;
  itemListaMedicamentoMater: Number;
  concentracion: String;

  /** Many-To-One Relationships */
  
  idUnidadMedidaPedido?: String;
  unidadMedidaPedido?: UnidadMedidaPedido;

  idUnidadMedidaPedido1?: String;
  unidadMedidaPedido1?: UnidadMedidaPedido;

  idUnidadMedidaPedido2?: String;
  unidadMedidaPedido2?: UnidadMedidaPedido;

  /** One-To-Many Relationships */
  medicamentoAltoCostos?: MedicamentoAltoCosto[];
  sustitutoss?: Sustitutos[];
  sustitutos1s?: Sustitutos[];
  excepcionProductos?: ExcepcionProducto[];
}
