const repository = require('./procedimientos-ris.repository');

function getAll(req, res) {
  repository.get()
    .then((procedimientosRiss) => {
      res.json(procedimientosRiss);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((procedimientosRis) => {
      if (!procedimientosRis) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(procedimientosRis);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _procedimientosRis = extractData(req);

  repository.add(_procedimientosRis)
    .then((procedimientosRis) => {
      res.status(201).json(procedimientosRis);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _procedimientosRis = extractData(req);

  repository.update(id, _procedimientosRis)
    .then((procedimientosRis) => {
      if (!procedimientosRis) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(procedimientosRis);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      idSucursal: req.body.idSucursal,
      rownum: req.body.rownum,
      itemListaIdEstado: req.body.itemListaIdEstado,
      qpqdQpExamkey: req.body.qpqdQpExamkey,
      qpqdQpExsdkey: req.body.qpqdQpExsdkey,
      petAotomaticaSiEsUrgente: req.body.petAotomaticaSiEsUrgente,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      nombreExamen: req.body.nombreExamen,
      observaciones: req.body.observaciones,
      codigoRis: req.body.codigoRis,
      petAutomatica: req.body.petAutomatica,
      activo: req.body.activo,
      codigoHis: req.body.codigoHis,
      exKey: req.body.exKey,
      exService: req.body.exService,
      idProcedimiento: req.body.idProcedimiento,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((procedimientosRis) => {
      if (!procedimientosRis) {
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
