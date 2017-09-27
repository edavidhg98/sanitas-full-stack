const repository = require('./institucion.repository');

function getAll(req, res) {
  repository.get()
    .then((institucions) => {
      res.json(institucions);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((institucion) => {
      if (!institucion) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(institucion);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _institucion = extractData(req);

  repository.add(_institucion)
    .then((institucion) => {
      res.status(201).json(institucion);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _institucion = extractData(req);

  repository.update(id, _institucion)
    .then((institucion) => {
      if (!institucion) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(institucion);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      codigoInstitucion: req.body.codigoInstitucion,
      descripcion: req.body.descripcion,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((institucion) => {
      if (!institucion) {
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
