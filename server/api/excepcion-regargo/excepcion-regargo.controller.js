const repository = require('./excepcion-regargo.repository');

function getAll(req, res) {
  repository.get()
    .then((excepcionRegargos) => {
      res.json(excepcionRegargos);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((excepcionRegargo) => {
      if (!excepcionRegargo) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(excepcionRegargo);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _excepcionRegargo = extractData(req);

  repository.add(_excepcionRegargo)
    .then((excepcionRegargo) => {
      res.status(201).json(excepcionRegargo);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _excepcionRegargo = extractData(req);

  repository.update(id, _excepcionRegargo)
    .then((excepcionRegargo) => {
      if (!excepcionRegargo) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(excepcionRegargo);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      porcentaje: req.body.porcentaje,
      valor: req.body.valor,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
      itemListaEstado: req.body.itemListaEstado,
      idPrestador: req.body.idPrestador,
      idSucursal: req.body.idSucursal,
      idTipoAdmision: req.body.idTipoAdmision,
      idEntidad: req.body.idEntidad,
      idProcedimiento: req.body.idProcedimiento,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((excepcionRegargo) => {
      if (!excepcionRegargo) {
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
