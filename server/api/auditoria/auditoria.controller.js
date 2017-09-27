const repository = require('./auditoria.repository');

function getAll(req, res) {
  repository.get()
    .then((auditorias) => {
      res.json(auditorias);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((auditoria) => {
      if (!auditoria) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(auditoria);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _auditoria = extractData(req);

  repository.add(_auditoria)
    .then((auditoria) => {
      res.status(201).json(auditoria);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _auditoria = extractData(req);

  repository.update(id, _auditoria)
    .then((auditoria) => {
      if (!auditoria) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(auditoria);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      fichero: req.body.fichero,
      tipAcceso: req.body.tipAcceso,
      idPaciente: req.body.idPaciente,
      loginRegistro: req.body.loginRegistro,
      fechaRegistro: req.body.fechaRegistro,
      observaciones: req.body.observaciones,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((auditoria) => {
      if (!auditoria) {
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
