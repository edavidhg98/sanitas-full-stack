const repository = require('./tipo-admision.repository');

function getAll(req, res) {
  repository.get()
    .then((tipoAdmisions) => {
      res.json(tipoAdmisions);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((tipoAdmision) => {
      if (!tipoAdmision) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(tipoAdmision);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _tipoAdmision = extractData(req);

  repository.add(_tipoAdmision)
    .then((tipoAdmision) => {
      res.status(201).json(tipoAdmision);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _tipoAdmision = extractData(req);

  repository.update(id, _tipoAdmision)
    .then((tipoAdmision) => {
      if (!tipoAdmision) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(tipoAdmision);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      tipAdmision: req.body.tipAdmision,
      descripcion: req.body.descripcion,
      manResponsa: req.body.manResponsa,
      manLisespe: req.body.manLisespe,
      manCargo: req.body.manCargo,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((tipoAdmision) => {
      if (!tipoAdmision) {
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
