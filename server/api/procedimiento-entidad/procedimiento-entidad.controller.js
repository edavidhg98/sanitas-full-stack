const repository = require('./procedimiento-entidad.repository');

function getAll(req, res) {
  repository.get()
    .then((procedimientoEntidads) => {
      res.json(procedimientoEntidads);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((procedimientoEntidad) => {
      if (!procedimientoEntidad) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(procedimientoEntidad);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _procedimientoEntidad = extractData(req);

  repository.add(_procedimientoEntidad)
    .then((procedimientoEntidad) => {
      res.status(201).json(procedimientoEntidad);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _procedimientoEntidad = extractData(req);

  repository.update(id, _procedimientoEntidad)
    .then((procedimientoEntidad) => {
      if (!procedimientoEntidad) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(procedimientoEntidad);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      autoriza: req.body.autoriza,
      autorizaConsultaexterna: req.body.autorizaConsultaexterna,
      loginRegistro: req.body.loginRegistro,
      autorizaCirugia: req.body.autorizaCirugia,
      autorizaProcedimientos: req.body.autorizaProcedimientos,
      autorizaUrgencias: req.body.autorizaUrgencias,
      idPrestador: req.body.idPrestador,
      itemListaEstadoProcxent: req.body.itemListaEstadoProcxent,
      fechaRegistro: req.body.fechaRegistro,
      flagUvr: req.body.flagUvr,
      aplicaValorUvr: req.body.aplicaValorUvr,
      flagEgresa: req.body.flagEgresa,
      itemListaAutorizaProcxent: req.body.itemListaAutorizaProcxent,
      observaciones: req.body.observaciones,
      autorizaHospitalizacion: req.body.autorizaHospitalizacion,
      atributoBh: req.body.atributoBh,
      idEntidad: req.body.idEntidad,
      idProcedimiento: req.body.idProcedimiento,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((procedimientoEntidad) => {
      if (!procedimientoEntidad) {
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
