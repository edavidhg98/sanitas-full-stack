const repository = require('./centro-costo-valido.repository');

function getAll(req, res) {
  repository.get()
    .then((centroCostoValidos) => {
      res.json(centroCostoValidos);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((centroCostoValido) => {
      if (!centroCostoValido) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(centroCostoValido);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _centroCostoValido = extractData(req);

  repository.add(_centroCostoValido)
    .then((centroCostoValido) => {
      res.status(201).json(centroCostoValido);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _centroCostoValido = extractData(req);

  repository.update(id, _centroCostoValido)
    .then((centroCostoValido) => {
      if (!centroCostoValido) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(centroCostoValido);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      idCentroCostoGenera: req.body.idCentroCostoGenera,
      idCentroCostoValido: req.body.idCentroCostoValido,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
      farmacia: req.body.farmacia,
      estadoItemLista: req.body.estadoItemLista,
      idCentroCostoValido1: req.body.idCentroCostoValido,
      idCentroCostoValido2: req.body.idCentroCostoValido,
      idPrestador: req.body.idPrestador,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((centroCostoValido) => {
      if (!centroCostoValido) {
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
