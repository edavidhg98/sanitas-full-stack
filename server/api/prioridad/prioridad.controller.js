const repository = require('./prioridad.repository');

function getAll(req, res) {
  repository.get()
    .then((prioridads) => {
      res.json(prioridads);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((prioridad) => {
      if (!prioridad) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(prioridad);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _prioridad = extractData(req);

  repository.add(_prioridad)
    .then((prioridad) => {
      res.status(201).json(prioridad);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _prioridad = extractData(req);

  repository.update(id, _prioridad)
    .then((prioridad) => {
      if (!prioridad) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(prioridad);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      descripcion: req.body.descripcion,
      valPriorida: req.body.valPriorida,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
      prioridad: req.body.prioridad,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((prioridad) => {
      if (!prioridad) {
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
