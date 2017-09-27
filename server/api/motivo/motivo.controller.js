const repository = require('./motivo.repository');

function getAll(req, res) {
  repository.get()
    .then((motivos) => {
      res.json(motivos);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((motivo) => {
      if (!motivo) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(motivo);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _motivo = extractData(req);

  repository.add(_motivo)
    .then((motivo) => {
      res.status(201).json(motivo);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _motivo = extractData(req);

  repository.update(id, _motivo)
    .then((motivo) => {
      if (!motivo) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(motivo);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      motivo: req.body.motivo,
      descripcion: req.body.descripcion,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
      idTipoMotivo: req.body.idTipoMotivo,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((motivo) => {
      if (!motivo) {
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
