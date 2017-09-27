const repository = require('./cita-retraso.repository');

function getAll(req, res) {
  repository.get()
    .then((citaRetrasos) => {
      res.json(citaRetrasos);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((citaRetraso) => {
      if (!citaRetraso) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(citaRetraso);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _citaRetraso = extractData(req);

  repository.add(_citaRetraso)
    .then((citaRetraso) => {
      res.status(201).json(citaRetraso);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _citaRetraso = extractData(req);

  repository.update(id, _citaRetraso)
    .then((citaRetraso) => {
      if (!citaRetraso) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(citaRetraso);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      idEspecialidad: req.body.idEspecialidad,
      excepcionRetraso: req.body.excepcionRetraso,
      minPenalizacionRetraso: req.body.minPenalizacionRetraso,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
      idEntidad: req.body.idEntidad,
      idSucursal: req.body.idSucursal,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((citaRetraso) => {
      if (!citaRetraso) {
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
