const repository = require('./tipo-tarifa-vacunacion.repository');

function getAll(req, res) {
  repository.get()
    .then((tipoTarifaVacunacions) => {
      res.json(tipoTarifaVacunacions);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((tipoTarifaVacunacion) => {
      if (!tipoTarifaVacunacion) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(tipoTarifaVacunacion);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _tipoTarifaVacunacion = extractData(req);

  repository.add(_tipoTarifaVacunacion)
    .then((tipoTarifaVacunacion) => {
      res.status(201).json(tipoTarifaVacunacion);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _tipoTarifaVacunacion = extractData(req);

  repository.update(id, _tipoTarifaVacunacion)
    .then((tipoTarifaVacunacion) => {
      if (!tipoTarifaVacunacion) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(tipoTarifaVacunacion);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      tarifa: req.body.tarifa,
      descripcion: req.body.descripcion,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((tipoTarifaVacunacion) => {
      if (!tipoTarifaVacunacion) {
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
