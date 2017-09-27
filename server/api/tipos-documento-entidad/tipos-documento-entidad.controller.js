const repository = require('./tipos-documento-entidad.repository');

function getAll(req, res) {
  repository.get()
    .then((tiposDocumentoEntidads) => {
      res.json(tiposDocumentoEntidads);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((tiposDocumentoEntidad) => {
      if (!tiposDocumentoEntidad) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(tiposDocumentoEntidad);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _tiposDocumentoEntidad = extractData(req);

  repository.add(_tiposDocumentoEntidad)
    .then((tiposDocumentoEntidad) => {
      res.status(201).json(tiposDocumentoEntidad);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _tiposDocumentoEntidad = extractData(req);

  repository.update(id, _tiposDocumentoEntidad)
    .then((tiposDocumentoEntidad) => {
      if (!tiposDocumentoEntidad) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(tiposDocumentoEntidad);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      idTipoAdmision: req.body.idTipoAdmision,
      itemListaTipoAfiliado: req.body.itemListaTipoAfiliado,
      documento: req.body.documento,
      pideNumeroDocumento: req.body.pideNumeroDocumento,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
      idEntidad: req.body.idEntidad,
      idTipoPlan: req.body.idTipoPlan,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((tiposDocumentoEntidad) => {
      if (!tiposDocumentoEntidad) {
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
