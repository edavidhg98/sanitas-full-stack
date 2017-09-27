const repository = require('./medicamento-alto-costo.repository');

function getAll(req, res) {
  repository.get()
    .then((medicamentoAltoCostos) => {
      res.json(medicamentoAltoCostos);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((medicamentoAltoCosto) => {
      if (!medicamentoAltoCosto) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(medicamentoAltoCosto);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _medicamentoAltoCosto = extractData(req);

  repository.add(_medicamentoAltoCosto)
    .then((medicamentoAltoCosto) => {
      res.status(201).json(medicamentoAltoCosto);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _medicamentoAltoCosto = extractData(req);

  repository.update(id, _medicamentoAltoCosto)
    .then((medicamentoAltoCosto) => {
      if (!medicamentoAltoCosto) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(medicamentoAltoCosto);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      itemListaTipoAltoCosto: req.body.itemListaTipoAltoCosto,
      itemListaEstadoMedAltoCosto: req.body.itemListaEstadoMedAltoCosto,
      observaciones: req.body.observaciones,
      loginRegistro: req.body.loginRegistro,
      fechaRegistro: req.body.fechaRegistro,
      loginModificacion: req.body.loginModificacion,
      fechaModificacion: req.body.fechaModificacion,
      idPrestador: req.body.idPrestador,
      idProducto: req.body.idProducto,
      idSucursal: req.body.idSucursal,
      idEntidad: req.body.idEntidad,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((medicamentoAltoCosto) => {
      if (!medicamentoAltoCosto) {
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
