const repository = require('./procedimiento-convenio-capitado.repository');

function getAll(req, res) {
  repository.get()
    .then((procedimientoConvenioCapitados) => {
      res.json(procedimientoConvenioCapitados);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((procedimientoConvenioCapitado) => {
      if (!procedimientoConvenioCapitado) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(procedimientoConvenioCapitado);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _procedimientoConvenioCapitado = extractData(req);

  repository.add(_procedimientoConvenioCapitado)
    .then((procedimientoConvenioCapitado) => {
      res.status(201).json(procedimientoConvenioCapitado);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _procedimientoConvenioCapitado = extractData(req);

  repository.update(id, _procedimientoConvenioCapitado)
    .then((procedimientoConvenioCapitado) => {
      if (!procedimientoConvenioCapitado) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(procedimientoConvenioCapitado);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      fechaInicial: req.body.fechaInicial,
      fechaFinal: req.body.fechaFinal,
      itemListaTipoCargo: req.body.itemListaTipoCargo,
      descripcion: req.body.descripcion,
      valor: req.body.valor,
      alias: req.body.alias,
      excedente: req.body.excedente,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
      idSucursalEntidad: req.body.idSucursalEntidad,
      idTipoAdmision: req.body.idTipoAdmision,
      idProcedimiento: req.body.idProcedimiento,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((procedimientoConvenioCapitado) => {
      if (!procedimientoConvenioCapitado) {
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
