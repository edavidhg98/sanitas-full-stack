const repository = require('./auditoria-estado-admision.repository');

function getAll(req, res) {
  repository.get()
    .then((auditoriaEstadoAdmisions) => {
      res.json(auditoriaEstadoAdmisions);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((auditoriaEstadoAdmision) => {
      if (!auditoriaEstadoAdmision) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(auditoriaEstadoAdmision);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _auditoriaEstadoAdmision = extractData(req);

  repository.add(_auditoriaEstadoAdmision)
    .then((auditoriaEstadoAdmision) => {
      res.status(201).json(auditoriaEstadoAdmision);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _auditoriaEstadoAdmision = extractData(req);

  repository.update(id, _auditoriaEstadoAdmision)
    .then((auditoriaEstadoAdmision) => {
      if (!auditoriaEstadoAdmision) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(auditoriaEstadoAdmision);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      idAdmision: req.body.idAdmision,
      itemListaEstadoAnterior: req.body.itemListaEstadoAnterior,
      itemListaEstadoNuevo: req.body.itemListaEstadoNuevo,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((auditoriaEstadoAdmision) => {
      if (!auditoriaEstadoAdmision) {
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
