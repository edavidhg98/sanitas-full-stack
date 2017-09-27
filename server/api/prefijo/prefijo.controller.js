const repository = require('./prefijo.repository');

function getAll(req, res) {
  repository.get()
    .then((prefijos) => {
      res.json(prefijos);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((prefijo) => {
      if (!prefijo) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(prefijo);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _prefijo = extractData(req);

  repository.add(_prefijo)
    .then((prefijo) => {
      res.status(201).json(prefijo);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _prefijo = extractData(req);

  repository.update(id, _prefijo)
    .then((prefijo) => {
      if (!prefijo) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(prefijo);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      prefijo: req.body.prefijo,
      descripcion: req.body.descripcion,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
      piePrefijo: req.body.piePrefijo,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((prefijo) => {
      if (!prefijo) {
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
