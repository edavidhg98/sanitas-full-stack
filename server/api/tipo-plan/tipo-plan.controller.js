const repository = require('./tipo-plan.repository');

function getAll(req, res) {
  repository.get()
    .then((tipoPlans) => {
      res.json(tipoPlans);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((tipoPlan) => {
      if (!tipoPlan) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(tipoPlan);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _tipoPlan = extractData(req);

  repository.add(_tipoPlan)
    .then((tipoPlan) => {
      res.status(201).json(tipoPlan);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _tipoPlan = extractData(req);

  repository.update(id, _tipoPlan)
    .then((tipoPlan) => {
      if (!tipoPlan) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(tipoPlan);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      tipPlan: req.body.tipPlan,
      descripcion: req.body.descripcion,
      valModerado: req.body.valModerado,
      valCopago: req.body.valCopago,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
      idEntidad: req.body.idEntidad,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((tipoPlan) => {
      if (!tipoPlan) {
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
