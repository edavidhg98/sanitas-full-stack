const repository = require('./trazabilidad-admision.repository');

function getAll(req, res) {
  repository.get()
    .then((trazabilidadAdmisions) => {
      res.json(trazabilidadAdmisions);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((trazabilidadAdmision) => {
      if (!trazabilidadAdmision) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(trazabilidadAdmision);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _trazabilidadAdmision = extractData(req);

  repository.add(_trazabilidadAdmision)
    .then((trazabilidadAdmision) => {
      res.status(201).json(trazabilidadAdmision);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _trazabilidadAdmision = extractData(req);

  repository.update(id, _trazabilidadAdmision)
    .then((trazabilidadAdmision) => {
      if (!trazabilidadAdmision) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(trazabilidadAdmision);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      idAdmision: req.body.idAdmision,
      itemListaDestinoListaEspera: req.body.itemListaDestinoListaEspera,
      horaIngreso: req.body.horaIngreso,
      numAdm: req.body.numAdm,
      fechaIngreso: req.body.fechaIngreso,
      loginEgreso: req.body.loginEgreso,
      ingresoconcita: req.body.ingresoconcita,
      itemListaViaIngreso: req.body.itemListaViaIngreso,
      minutoIngreso: req.body.minutoIngreso,
      consecutivoFur: req.body.consecutivoFur,
      idMedicoEgreso: req.body.idMedicoEgreso,
      loginCreacion: req.body.loginCreacion,
      itemListaDestinoFinal: req.body.itemListaDestinoFinal,
      codigoCita: req.body.codigoCita,
      diasEstancia: req.body.diasEstancia,
      leyProteccionDatos: req.body.leyProteccionDatos,
      horaEgreso: req.body.horaEgreso,
      consultaProgramada: req.body.consultaProgramada,
      idMedicoTratante: req.body.idMedicoTratante,
      flagInconsistencia: req.body.flagInconsistencia,
      fechaEgreso: req.body.fechaEgreso,
      anoAdm: req.body.anoAdm,
      idMedicoHospitaliza: req.body.idMedicoHospitaliza,
      login: req.body.login,
      itemListaEstadoAdmision: req.body.itemListaEstadoAdmision,
      fechaRegistro: req.body.fechaRegistro,
      consecutivoAtencion: req.body.consecutivoAtencion,
      observaciones: req.body.observaciones,
      conPriVez: req.body.conPriVez,
      itemListaFlagFacturado: req.body.itemListaFlagFacturado,
      minutoEgreso: req.body.minutoEgreso,
      ipRegistro: req.body.ipRegistro,
      idEspecialidad: req.body.idEspecialidad,
      idSucursal: req.body.idSucursal,
      idTipoAdmision: req.body.idTipoAdmision,
      idConsultorio: req.body.idConsultorio,
      idMotivo: req.body.idMotivo,
      idMotivo1: req.body.idMotivo,
      idMotivo2: req.body.idMotivo,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((trazabilidadAdmision) => {
      if (!trazabilidadAdmision) {
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
