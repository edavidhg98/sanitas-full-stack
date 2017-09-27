const repository = require('./cama-plan.repository');

function getAll(req, res) {
  repository.get()
    .then((camaPlans) => {
      res.json(camaPlans);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((camaPlan) => {
      if (!camaPlan) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(camaPlan);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _camaPlan = extractData(req);

  repository.add(_camaPlan)
    .then((camaPlan) => {
      res.status(201).json(camaPlan);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _camaPlan = extractData(req);

  repository.update(id, _camaPlan)
    .then((camaPlan) => {
      if (!camaPlan) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(camaPlan);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
      idCama: req.body.idCama,
      idEntidad: req.body.idEntidad,
      idTipoPlan: req.body.idTipoPlan,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((camaPlan) => {
      if (!camaPlan) {
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
