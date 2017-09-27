const repository = require('./concatena-concepto-por-centro-costo.repository');

function getAll(req, res) {
  repository.get()
    .then((concatenaConceptoPorCentroCostos) => {
      res.json(concatenaConceptoPorCentroCostos);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((concatenaConceptoPorCentroCosto) => {
      if (!concatenaConceptoPorCentroCosto) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(concatenaConceptoPorCentroCosto);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _concatenaConceptoPorCentroCosto = extractData(req);

  repository.add(_concatenaConceptoPorCentroCosto)
    .then((concatenaConceptoPorCentroCosto) => {
      res.status(201).json(concatenaConceptoPorCentroCosto);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _concatenaConceptoPorCentroCosto = extractData(req);

  repository.update(id, _concatenaConceptoPorCentroCosto)
    .then((concatenaConceptoPorCentroCosto) => {
      if (!concatenaConceptoPorCentroCosto) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(concatenaConceptoPorCentroCosto);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      idPrestador: req.body.idPrestador,
      idCentroCosto: req.body.idCentroCosto,
      idConcepto: req.body.idConcepto,
      itemListaEstadoConCptoCentroCosto: req.body.itemListaEstadoConCptoCentroCosto,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
      idSucursal: req.body.idSucursal,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((concatenaConceptoPorCentroCosto) => {
      if (!concatenaConceptoPorCentroCosto) {
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
