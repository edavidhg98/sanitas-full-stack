const repository = require('./consumo-soat-otra-ips.repository');

function getAll(req, res) {
  repository.get()
    .then((consumoSoatOtraIpss) => {
      res.json(consumoSoatOtraIpss);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((consumoSoatOtraIps) => {
      if (!consumoSoatOtraIps) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(consumoSoatOtraIps);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _consumoSoatOtraIps = extractData(req);

  repository.add(_consumoSoatOtraIps)
    .then((consumoSoatOtraIps) => {
      res.status(201).json(consumoSoatOtraIps);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _consumoSoatOtraIps = extractData(req);

  repository.update(id, _consumoSoatOtraIps)
    .then((consumoSoatOtraIps) => {
      if (!consumoSoatOtraIps) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(consumoSoatOtraIps);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      idAdmision: req.body.idAdmision,
      idEntidad: req.body.idEntidad,
      poliza: req.body.poliza,
      idPaciente: req.body.idPaciente,
      fechaAtencion: req.body.fechaAtencion,
      nombreIps: req.body.nombreIps,
      monto: req.body.monto,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
      observacionesSoporte: req.body.observacionesSoporte,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((consumoSoatOtraIps) => {
      if (!consumoSoatOtraIps) {
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
