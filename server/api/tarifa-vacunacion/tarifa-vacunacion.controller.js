const repository = require('./tarifa-vacunacion.repository');

function getAll(req, res) {
  repository.get()
    .then((tarifaVacunacions) => {
      res.json(tarifaVacunacions);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((tarifaVacunacion) => {
      if (!tarifaVacunacion) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(tarifaVacunacion);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _tarifaVacunacion = extractData(req);

  repository.add(_tarifaVacunacion)
    .then((tarifaVacunacion) => {
      res.status(201).json(tarifaVacunacion);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _tarifaVacunacion = extractData(req);

  repository.update(id, _tarifaVacunacion)
    .then((tarifaVacunacion) => {
      if (!tarifaVacunacion) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(tarifaVacunacion);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      valor: req.body.valor,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
      idSucursalEntidad: req.body.idSucursalEntidad,
      idTipoTarifaVacunacion: req.body.idTipoTarifaVacunacion,
      idVacunas: req.body.idVacunas,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((tarifaVacunacion) => {
      if (!tarifaVacunacion) {
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
