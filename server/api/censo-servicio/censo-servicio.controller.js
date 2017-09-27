const repository = require('./censo-servicio.repository');

function getAll(req, res) {
  repository.get()
    .then((censoServicios) => {
      res.json(censoServicios);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((censoServicio) => {
      if (!censoServicio) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(censoServicio);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _censoServicio = extractData(req);

  repository.add(_censoServicio)
    .then((censoServicio) => {
      res.status(201).json(censoServicio);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _censoServicio = extractData(req);

  repository.update(id, _censoServicio)
    .then((censoServicio) => {
      if (!censoServicio) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(censoServicio);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      idAdmision: req.body.idAdmision,
      codigoError: req.body.codigoError,
      mensajeError: req.body.mensajeError,
      fechaRegistro: req.body.fechaRegistro,
      itemListaEstadoRegistro: req.body.itemListaEstadoRegistro,
      idTrazabilidadAdmision: req.body.idTrazabilidadAdmision,
      idSucursal: req.body.idSucursal,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((censoServicio) => {
      if (!censoServicio) {
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
