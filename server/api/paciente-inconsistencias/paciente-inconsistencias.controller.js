const repository = require('./paciente-inconsistencias.repository');

function getAll(req, res) {
  repository.get()
    .then((pacienteInconsistenciass) => {
      res.json(pacienteInconsistenciass);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((pacienteInconsistencias) => {
      if (!pacienteInconsistencias) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(pacienteInconsistencias);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _pacienteInconsistencias = extractData(req);

  repository.add(_pacienteInconsistencias)
    .then((pacienteInconsistencias) => {
      res.status(201).json(pacienteInconsistencias);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _pacienteInconsistencias = extractData(req);

  repository.update(id, _pacienteInconsistencias)
    .then((pacienteInconsistencias) => {
      if (!pacienteInconsistencias) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(pacienteInconsistencias);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      numDoc: req.body.numDoc,
      numDocExterno: req.body.numDocExterno,
      tipDoc: req.body.tipDoc,
      nom1Externo: req.body.nom1Externo,
      nombre: req.body.nombre,
      nombreExterno: req.body.nombreExterno,
      sexoExterno: req.body.sexoExterno,
      fecNacExterno: req.body.fecNacExterno,
      tipoFecnac: req.body.tipoFecnac,
      tipDocExterno: req.body.tipDocExterno,
      contrato: req.body.contrato,
      appInterna: req.body.appInterna,
      appExterna: req.body.appExterna,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      tipoTipdoc: req.body.tipoTipdoc,
      nom1: req.body.nom1,
      tipoApel2: req.body.tipoApel2,
      nom2Externo: req.body.nom2Externo,
      apel2: req.body.apel2,
      nom2: req.body.nom2,
      observaciones: req.body.observaciones,
      apel1Externo: req.body.apel1Externo,
      apel2Externo: req.body.apel2Externo,
      numInfo: req.body.numInfo,
      idSucursal: req.body.idSucursal,
      fecNac: req.body.fecNac,
      sexo: req.body.sexo,
      tipoNumdoc: req.body.tipoNumdoc,
      tipoNom1: req.body.tipoNom1,
      apel1: req.body.apel1,
      tipoApel1: req.body.tipoApel1,
      tipoInconsistencia: req.body.tipoInconsistencia,
      tipoNom: req.body.tipoNom,
      idEntidad: req.body.idEntidad,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((pacienteInconsistencias) => {
      if (!pacienteInconsistencias) {
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
