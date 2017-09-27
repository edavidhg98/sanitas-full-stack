const repository = require('./localidad.repository');

function getAll(req, res) {
  repository.get()
    .then((localidads) => {
      res.json(localidads);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((localidad) => {
      if (!localidad) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(localidad);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _localidad = extractData(req);

  repository.add(_localidad)
    .then((localidad) => {
      res.status(201).json(localidad);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _localidad = extractData(req);

  repository.update(id, _localidad)
    .then((localidad) => {
      if (!localidad) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(localidad);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      codigo: req.body.codigo,
      nombreLocalidad: req.body.nombreLocalidad,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
      idCiudad: req.body.idCiudad,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((localidad) => {
      if (!localidad) {
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
