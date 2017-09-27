const repository = require('./sustitutos.repository');

function getAll(req, res) {
  repository.get()
    .then((sustitutoss) => {
      res.json(sustitutoss);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((sustitutos) => {
      if (!sustitutos) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(sustitutos);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _sustitutos = extractData(req);

  repository.add(_sustitutos)
    .then((sustitutos) => {
      res.status(201).json(sustitutos);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _sustitutos = extractData(req);

  repository.update(id, _sustitutos)
    .then((sustitutos) => {
      if (!sustitutos) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(sustitutos);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      observaciones: req.body.observaciones,
      idPrestador: req.body.idPrestador,
      idProducto: req.body.idProducto,
      idProducto1: req.body.idProducto,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((sustitutos) => {
      if (!sustitutos) {
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
