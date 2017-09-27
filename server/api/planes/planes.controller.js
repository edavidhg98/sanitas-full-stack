const repository = require('./planes.repository');

function getAll(req, res) {
  repository.get()
    .then((planess) => {
      res.json(planess);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((planes) => {
      if (!planes) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(planes);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _planes = extractData(req);

  repository.add(_planes)
    .then((planes) => {
      res.status(201).json(planes);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _planes = extractData(req);

  repository.update(id, _planes)
    .then((planes) => {
      if (!planes) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(planes);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      codCompania: req.body.codCompania,
      codPlan: req.body.codPlan,
      descripcion: req.body.descripcion,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
      idEntidad: req.body.idEntidad,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((planes) => {
      if (!planes) {
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
