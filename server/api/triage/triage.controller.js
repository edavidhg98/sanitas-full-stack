const repository = require('./triage.repository');

function getAll(req, res) {
  repository.get()
    .then((triages) => {
      res.json(triages);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((triage) => {
      if (!triage) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(triage);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _triage = extractData(req);

  repository.add(_triage)
    .then((triage) => {
      res.status(201).json(triage);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _triage = extractData(req);

  repository.update(id, _triage)
    .then((triage) => {
      if (!triage) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(triage);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      idPaciente: req.body.idPaciente,
      especialidad: req.body.especialidad,
      escDolor: req.body.escDolor,
      fup: req.body.fup,
      descripcionMotivoConsulta: req.body.descripcionMotivoConsulta,
      partos: req.body.partos,
      idAdmision: req.body.idAdmision,
      clasificacionCalculada: req.body.clasificacionCalculada,
      abortos: req.body.abortos,
      gestacion: req.body.gestacion,
      minutoIngreso: req.body.minutoIngreso,
      muertos: req.body.muertos,
      fechaRegistro: req.body.fechaRegistro,
      fechaIngreso: req.body.fechaIngreso,
      observaciones: req.body.observaciones,
      estadoAlarma: req.body.estadoAlarma,
      horaIngreso: req.body.horaIngreso,
      fur: req.body.fur,
      loginRegistro: req.body.loginRegistro,
      alerta: req.body.alerta,
      tiempoaprox: req.body.tiempoaprox,
      encabezadoCuestionario: req.body.encabezadoCuestionario,
      remitidoa: req.body.remitidoa,
      cesarias: req.body.cesarias,
      vivos: req.body.vivos,
      clasificacionManual: req.body.clasificacionManual,
      itemListaEstadoTriage: req.body.itemListaEstadoTriage,
      idConsultorio: req.body.idConsultorio,
      idEntidad: req.body.idEntidad,
      idMotivo: req.body.idMotivo,
      idSucursal: req.body.idSucursal,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((triage) => {
      if (!triage) {
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
