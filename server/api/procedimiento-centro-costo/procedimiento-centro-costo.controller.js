const repository = require('./procedimiento-centro-costo.repository');

function getAll(req, res) {
  repository.get()
    .then((procedimientoCentroCostos) => {
      res.json(procedimientoCentroCostos);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((procedimientoCentroCosto) => {
      if (!procedimientoCentroCosto) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(procedimientoCentroCosto);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _procedimientoCentroCosto = extractData(req);

  repository.add(_procedimientoCentroCosto)
    .then((procedimientoCentroCosto) => {
      res.status(201).json(procedimientoCentroCosto);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _procedimientoCentroCosto = extractData(req);

  repository.update(id, _procedimientoCentroCosto)
    .then((procedimientoCentroCosto) => {
      if (!procedimientoCentroCosto) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(procedimientoCentroCosto);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      idCentroCosto: req.body.idCentroCosto,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
      tiempoDuracion: req.body.tiempoDuracion,
      idConcepto: req.body.idConcepto,
      fechaRegistro: req.body.fechaRegistro,
      tiempoAdecuacion: req.body.tiempoAdecuacion,
      tiempoLimpieza: req.body.tiempoLimpieza,
      manejaHcresultado: req.body.manejaHcresultado,
      honorariosR: req.body.honorariosR,
      itemListaTiempoLimpieza: req.body.itemListaTiempoLimpieza,
      itemListaTipoEncabezado: req.body.itemListaTipoEncabezado,
      idPrestador: req.body.idPrestador,
      idSucursal: req.body.idSucursal,
      idProcedimiento: req.body.idProcedimiento,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((procedimientoCentroCosto) => {
      if (!procedimientoCentroCosto) {
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
