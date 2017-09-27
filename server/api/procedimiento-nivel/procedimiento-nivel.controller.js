const repository = require('./procedimiento-nivel.repository');

function getAll(req, res) {
  repository.get()
    .then((procedimientoNivels) => {
      res.json(procedimientoNivels);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((procedimientoNivel) => {
      if (!procedimientoNivel) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(procedimientoNivel);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _procedimientoNivel = extractData(req);

  repository.add(_procedimientoNivel)
    .then((procedimientoNivel) => {
      res.status(201).json(procedimientoNivel);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _procedimientoNivel = extractData(req);

  repository.update(id, _procedimientoNivel)
    .then((procedimientoNivel) => {
      if (!procedimientoNivel) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(procedimientoNivel);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      fechaInicial: req.body.fechaInicial,
      fechaFinal: req.body.fechaFinal,
      nivel: req.body.nivel,
      idCentroCosto: req.body.idCentroCosto,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
      idProcedimiento: req.body.idProcedimiento,
      idProcedimiento1: req.body.idProcedimiento,
      idSucursal: req.body.idSucursal,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((procedimientoNivel) => {
      if (!procedimientoNivel) {
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
