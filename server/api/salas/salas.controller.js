const repository = require('./salas.repository');

function getAll(req, res) {
  repository.get()
    .then((salass) => {
      res.json(salass);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((salas) => {
      if (!salas) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(salas);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _salas = extractData(req);

  repository.add(_salas)
    .then((salas) => {
      res.status(201).json(salas);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _salas = extractData(req);

  repository.update(id, _salas)
    .then((salas) => {
      if (!salas) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(salas);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      sala: req.body.sala,
      descripcion: req.body.descripcion,
      itemListaTipoSala: req.body.itemListaTipoSala,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
      idSucursal: req.body.idSucursal,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((salas) => {
      if (!salas) {
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
