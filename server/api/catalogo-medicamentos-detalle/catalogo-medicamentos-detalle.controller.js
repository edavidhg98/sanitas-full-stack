const repository = require('./catalogo-medicamentos-detalle.repository');

function getAll(req, res) {
  repository.get()
    .then((catalogoMedicamentosDetalles) => {
      res.json(catalogoMedicamentosDetalles);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((catalogoMedicamentosDetalle) => {
      if (!catalogoMedicamentosDetalle) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(catalogoMedicamentosDetalle);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _catalogoMedicamentosDetalle = extractData(req);

  repository.add(_catalogoMedicamentosDetalle)
    .then((catalogoMedicamentosDetalle) => {
      res.status(201).json(catalogoMedicamentosDetalle);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _catalogoMedicamentosDetalle = extractData(req);

  repository.update(id, _catalogoMedicamentosDetalle)
    .then((catalogoMedicamentosDetalle) => {
      if (!catalogoMedicamentosDetalle) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(catalogoMedicamentosDetalle);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      idEncabezado: req.body.idEncabezado,
      fechaInicial: req.body.fechaInicial,
      valorCompra: req.body.valorCompra,
      valorMn: req.body.valorMn,
      idItemListaEstado: req.body.idItemListaEstado,
      porcentajeRegulado: req.body.porcentajeRegulado,
      loginRegistro: req.body.loginRegistro,
      loginModificacion: req.body.loginModificacion,
      idItemListaRegulado: req.body.idItemListaRegulado,
      fechaModificacion: req.body.fechaModificacion,
      idProducto: req.body.idProducto,
      porcentajeMaterial: req.body.porcentajeMaterial,
      observaciones: req.body.observaciones,
      valorVentaPublico: req.body.valorVentaPublico,
      fechaFinal: req.body.fechaFinal,
      fechaRegistro: req.body.fechaRegistro,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((catalogoMedicamentosDetalle) => {
      if (!catalogoMedicamentosDetalle) {
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
