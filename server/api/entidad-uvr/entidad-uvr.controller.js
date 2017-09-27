const repository = require('./entidad-uvr.repository');

function getAll(req, res) {
  repository.get()
    .then((entidadUvrs) => {
      res.json(entidadUvrs);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((entidadUvr) => {
      if (!entidadUvr) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(entidadUvr);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _entidadUvr = extractData(req);

  repository.add(_entidadUvr)
    .then((entidadUvr) => {
      res.status(201).json(entidadUvr);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _entidadUvr = extractData(req);

  repository.update(id, _entidadUvr)
    .then((entidadUvr) => {
      if (!entidadUvr) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(entidadUvr);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      itemListaPersonalMedico: req.body.itemListaPersonalMedico,
      fechaInicioConvenio: req.body.fechaInicioConvenio,
      fecFinConvenio: req.body.fecFinConvenio,
      valor: req.body.valor,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
      itemListaEstadoEntidadUvr: req.body.itemListaEstadoEntidadUvr,
      idEntidad: req.body.idEntidad,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((entidadUvr) => {
      if (!entidadUvr) {
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
