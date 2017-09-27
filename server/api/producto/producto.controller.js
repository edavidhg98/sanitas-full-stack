const repository = require('./producto.repository');

function getAll(req, res) {
  repository.get()
    .then((productos) => {
      res.json(productos);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((producto) => {
      if (!producto) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(producto);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _producto = extractData(req);

  repository.add(_producto)
    .then((producto) => {
      res.status(201).json(producto);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _producto = extractData(req);

  repository.update(id, _producto)
    .then((producto) => {
      if (!producto) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(producto);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      codCorto: req.body.codCorto,
      descripcion: req.body.descripcion,
      itemListaFlagGenerico: req.body.itemListaFlagGenerico,
      codCums: req.body.codCums,
      loginRegistro: req.body.loginRegistro,
      codBarras: req.body.codBarras,
      nivelMedicam: req.body.nivelMedicam,
      descripcionPa: req.body.descripcionPa,
      codPos: req.body.codPos,
      contenido: req.body.contenido,
      idConcepto: req.body.idConcepto,
      idPresentacionProducto: req.body.idPresentacionProducto,
      idConceptoNoPos: req.body.idConceptoNoPos,
      itemListaFormaFarmaceutica: req.body.itemListaFormaFarmaceutica,
      desGenerico: req.body.desGenerico,
      fechaRegistro: req.body.fechaRegistro,
      codInteligente: req.body.codInteligente,
      codHijo: req.body.codHijo,
      itemListaMedicamentoControlado: req.body.itemListaMedicamentoControlado,
      itemListaEstado: req.body.itemListaEstado,
      itemListaMedicamentoMater: req.body.itemListaMedicamentoMater,
      desCorta: req.body.desCorta,
      itemListaReutilizable: req.body.itemListaReutilizable,
      observaciones: req.body.observaciones,
      concentracion: req.body.concentracion,
      itemListaFlagPos: req.body.itemListaFlagPos,
      codAlea: req.body.codAlea,
      itemListaModoDespacho: req.body.itemListaModoDespacho,
      idUnidadMedidaPedido: req.body.idUnidadMedidaPedido,
      idUnidadMedidaPedido1: req.body.idUnidadMedidaPedido,
      idUnidadMedidaPedido2: req.body.idUnidadMedidaPedido,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((producto) => {
      if (!producto) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.status(204).json();
    })
    .catch(handleError(res));
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function (err) {
    if (err.name === 'ValidationError') {
      res.status(400).json({ msg: `Error al realizar la petición ${err}` });
    } else {
      res.status(statusCode).json({ msg: `Ocurrión un error en el servidor ${err}` });
    }
  };
}

module.exports = {
  getAll,
  getById,
  insert,
  update,
  remove
};
