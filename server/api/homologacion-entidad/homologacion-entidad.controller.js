const repository = require('./homologacion-entidad.repository');

function getAll(req, res) {
  repository.get()
    .then((homologacionEntidads) => {
      res.json(homologacionEntidads);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((homologacionEntidad) => {
      if (!homologacionEntidad) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(homologacionEntidad);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _homologacionEntidad = extractData(req);

  repository.add(_homologacionEntidad)
    .then((homologacionEntidad) => {
      res.status(201).json(homologacionEntidad);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _homologacionEntidad = extractData(req);

  repository.update(id, _homologacionEntidad)
    .then((homologacionEntidad) => {
      if (!homologacionEntidad) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(homologacionEntidad);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      estado: req.body.estado,
      observaciones: req.body.observaciones,
      idEntidad: req.body.idEntidad,
      idEntidad1: req.body.idEntidad,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((homologacionEntidad) => {
      if (!homologacionEntidad) {
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
