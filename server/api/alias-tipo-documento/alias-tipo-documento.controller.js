const repository = require('./alias-tipo-documento.repository');

function getAll(req, res) {
  repository.get()
    .then((aliasTipoDocumentos) => {
      res.json(aliasTipoDocumentos);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((aliasTipoDocumento) => {
      if (!aliasTipoDocumento) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(aliasTipoDocumento);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _aliasTipoDocumento = extractData(req);

  repository.add(_aliasTipoDocumento)
    .then((aliasTipoDocumento) => {
      res.status(201).json(aliasTipoDocumento);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _aliasTipoDocumento = extractData(req);

  repository.update(id, _aliasTipoDocumento)
    .then((aliasTipoDocumento) => {
      if (!aliasTipoDocumento) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(aliasTipoDocumento);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      itemListaTipoDocumento: req.body.itemListaTipoDocumento,
      aliasBukeala: req.body.aliasBukeala,
      aliasContabilidad: req.body.aliasContabilidad,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
      aliasCe: req.body.aliasCe,
      aliasbh: req.body.aliasbh,
      jerarquia: req.body.jerarquia,
      aliasDispen: req.body.aliasDispen,
      aliasValidador: req.body.aliasValidador,
      nuevo: req.body.nuevo,
      aliasPines: req.body.aliasPines,
      aliasCliente: req.body.aliasCliente,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((aliasTipoDocumento) => {
      if (!aliasTipoDocumento) {
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
