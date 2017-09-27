const repository = require('./admision-observaciones.repository');

function getAll(req, res) {
  repository.get()
    .then((admisionObservacioness) => {
      res.json(admisionObservacioness);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((admisionObservaciones) => {
      if (!admisionObservaciones) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(admisionObservaciones);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _admisionObservaciones = extractData(req);

  repository.add(_admisionObservaciones)
    .then((admisionObservaciones) => {
      res.status(201).json(admisionObservaciones);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _admisionObservaciones = extractData(req);

  repository.update(id, _admisionObservaciones)
    .then((admisionObservaciones) => {
      if (!admisionObservaciones) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(admisionObservaciones);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      idAdmision: req.body.idAdmision,
      fechaRegistro: req.body.fechaRegistro,
      horaDefinicion: req.body.horaDefinicion,
      fechaIngreso: req.body.fechaIngreso,
      horaIngreso: req.body.horaIngreso,
      minutoIngreso: req.body.minutoIngreso,
      fechaDefinicion: req.body.fechaDefinicion,
      observaciones: req.body.observaciones,
      minutoDefinicion: req.body.minutoDefinicion,
      fechaEgreso: req.body.fechaEgreso,
      horaEgreso: req.body.horaEgreso,
      minutoEgreso: req.body.minutoEgreso,
      destino: req.body.destino,
      loginRegistro: req.body.loginRegistro,
      idCama: req.body.idCama,
      idMotivo: req.body.idMotivo,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((admisionObservaciones) => {
      if (!admisionObservaciones) {
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
