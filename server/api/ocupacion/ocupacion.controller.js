const repository = require('./ocupacion.repository');

function getAll(req, res) {
  repository.get()
    .then((ocupacions) => {
      res.json(ocupacions);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((ocupacion) => {
      if (!ocupacion) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(ocupacion);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _ocupacion = extractData(req);

  repository.add(_ocupacion)
    .then((ocupacion) => {
      res.status(201).json(ocupacion);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _ocupacion = extractData(req);

  repository.update(id, _ocupacion)
    .then((ocupacion) => {
      if (!ocupacion) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(ocupacion);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      codigoOcupacion: req.body.codigoOcupacion,
      descripcion: req.body.descripcion,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
      itemListaEstadoOcupacion: req.body.itemListaEstadoOcupacion,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((ocupacion) => {
      if (!ocupacion) {
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
