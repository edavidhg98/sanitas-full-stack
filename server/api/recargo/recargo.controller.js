const repository = require('./recargo.repository');

function getAll(req, res) {
  repository.get()
    .then((recargos) => {
      res.json(recargos);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((recargo) => {
      if (!recargo) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(recargo);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _recargo = extractData(req);

  repository.add(_recargo)
    .then((recargo) => {
      res.status(201).json(recargo);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _recargo = extractData(req);

  repository.update(id, _recargo)
    .then((recargo) => {
      if (!recargo) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(recargo);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      recargo: req.body.recargo,
      descripcion: req.body.descripcion,
      porcentaje: req.body.porcentaje,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
      itemListaEstadoRecargo: req.body.itemListaEstadoRecargo,
      idPrestador: req.body.idPrestador,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((recargo) => {
      if (!recargo) {
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
