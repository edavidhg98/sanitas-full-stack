const repository = require('./pyp-procedimiento-programa.repository');

function getAll(req, res) {
  repository.get()
    .then((pypProcedimientoProgramas) => {
      res.json(pypProcedimientoProgramas);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((pypProcedimientoPrograma) => {
      if (!pypProcedimientoPrograma) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(pypProcedimientoPrograma);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _pypProcedimientoPrograma = extractData(req);

  repository.add(_pypProcedimientoPrograma)
    .then((pypProcedimientoPrograma) => {
      res.status(201).json(pypProcedimientoPrograma);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _pypProcedimientoPrograma = extractData(req);

  repository.update(id, _pypProcedimientoPrograma)
    .then((pypProcedimientoPrograma) => {
      if (!pypProcedimientoPrograma) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(pypProcedimientoPrograma);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      idAdmision: req.body.idAdmision,
      edadini: req.body.edadini,
      edadfin: req.body.edadfin,
      uniMedEdad: req.body.uniMedEdad,
      itemListaSexo: req.body.itemListaSexo,
      frecuencia: req.body.frecuencia,
      cantidad: req.body.cantidad,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
      idMotivo: req.body.idMotivo,
      idProcedimiento: req.body.idProcedimiento,
      idPypProgramas: req.body.idPypProgramas,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((pypProcedimientoPrograma) => {
      if (!pypProcedimientoPrograma) {
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
