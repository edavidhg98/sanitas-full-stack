const repository = require('./auditoria-contrato.repository');

function getAll(req, res) {
  repository.get()
    .then((auditoriaContratos) => {
      res.json(auditoriaContratos);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((auditoriaContrato) => {
      if (!auditoriaContrato) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(auditoriaContrato);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _auditoriaContrato = extractData(req);

  repository.add(_auditoriaContrato)
    .then((auditoriaContrato) => {
      res.status(201).json(auditoriaContrato);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _auditoriaContrato = extractData(req);

  repository.update(id, _auditoriaContrato)
    .then((auditoriaContrato) => {
      if (!auditoriaContrato) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(auditoriaContrato);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      idAdmision: req.body.idAdmision,
      carnet: req.body.carnet,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
      idEntidad: req.body.idEntidad,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((auditoriaContrato) => {
      if (!auditoriaContrato) {
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
