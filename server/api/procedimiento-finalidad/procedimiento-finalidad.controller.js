const repository = require('./procedimiento-finalidad.repository');

function getAll(req, res) {
  repository.get()
    .then((procedimientoFinalidads) => {
      res.json(procedimientoFinalidads);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((procedimientoFinalidad) => {
      if (!procedimientoFinalidad) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(procedimientoFinalidad);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _procedimientoFinalidad = extractData(req);

  repository.add(_procedimientoFinalidad)
    .then((procedimientoFinalidad) => {
      res.status(201).json(procedimientoFinalidad);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _procedimientoFinalidad = extractData(req);

  repository.update(id, _procedimientoFinalidad)
    .then((procedimientoFinalidad) => {
      if (!procedimientoFinalidad) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(procedimientoFinalidad);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      finalidad: req.body.finalidad,
      idProcedimiento: req.body.idProcedimiento,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((procedimientoFinalidad) => {
      if (!procedimientoFinalidad) {
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
