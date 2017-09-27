const repository = require('./encabezado-resultado.repository');

function getAll(req, res) {
  repository.get()
    .then((encabezadoResultados) => {
      res.json(encabezadoResultados);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((encabezadoResultado) => {
      if (!encabezadoResultado) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(encabezadoResultado);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _encabezadoResultado = extractData(req);

  repository.add(_encabezadoResultado)
    .then((encabezadoResultado) => {
      res.status(201).json(encabezadoResultado);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _encabezadoResultado = extractData(req);

  repository.update(id, _encabezadoResultado)
    .then((encabezadoResultado) => {
      if (!encabezadoResultado) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(encabezadoResultado);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      idAdmision: req.body.idAdmision,
      idCentroCostoSolicita: req.body.idCentroCostoSolicita,
      idMedicoOrdena: req.body.idMedicoOrdena,
      idCentroCosto: req.body.idCentroCosto,
      consecutivoSolicitud: req.body.consecutivoSolicitud,
      secuencia: req.body.secuencia,
      procedencia: req.body.procedencia,
      numMuestras: req.body.numMuestras,
      idMedicoPractica: req.body.idMedicoPractica,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
      itemListaEstado: req.body.itemListaEstado,
      fechaCargo: req.body.fechaCargo,
      idSucursal: req.body.idSucursal,
      idProcedimiento: req.body.idProcedimiento,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((encabezadoResultado) => {
      if (!encabezadoResultado) {
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
