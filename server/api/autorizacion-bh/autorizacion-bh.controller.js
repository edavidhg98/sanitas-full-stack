const repository = require('./autorizacion-bh.repository');

function getAll(req, res) {
  repository.get()
    .then((autorizacionBhs) => {
      res.json(autorizacionBhs);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((autorizacionBh) => {
      if (!autorizacionBh) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(autorizacionBh);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _autorizacionBh = extractData(req);

  repository.add(_autorizacionBh)
    .then((autorizacionBh) => {
      res.status(201).json(autorizacionBh);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _autorizacionBh = extractData(req);

  repository.update(id, _autorizacionBh)
    .then((autorizacionBh) => {
      if (!autorizacionBh) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(autorizacionBh);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      idAdmision: req.body.idAdmision,
      numeroAutorizacion: req.body.numeroAutorizacion,
      codigoInternoEntidad: req.body.codigoInternoEntidad,
      codigoPlan: req.body.codigoPlan,
      codigoContrato: req.body.codigoContrato,
      codigoFamilia: req.body.codigoFamilia,
      codigoUsuario: req.body.codigoUsuario,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
      procedimientoServicio: req.body.procedimientoServicio,
      idProcedimiento: req.body.idProcedimiento,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((autorizacionBh) => {
      if (!autorizacionBh) {
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
