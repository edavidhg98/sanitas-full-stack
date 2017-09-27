const repository = require('./tiempo-recargo.repository');

function getAll(req, res) {
  repository.get()
    .then((tiempoRecargos) => {
      res.json(tiempoRecargos);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((tiempoRecargo) => {
      if (!tiempoRecargo) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(tiempoRecargo);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _tiempoRecargo = extractData(req);

  repository.add(_tiempoRecargo)
    .then((tiempoRecargo) => {
      res.status(201).json(tiempoRecargo);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _tiempoRecargo = extractData(req);

  repository.update(id, _tiempoRecargo)
    .then((tiempoRecargo) => {
      if (!tiempoRecargo) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(tiempoRecargo);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      codigo: req.body.codigo,
      descripcion: req.body.descripcion,
      horaDesde: req.body.horaDesde,
      minutoDesde: req.body.minutoDesde,
      horaFinal: req.body.horaFinal,
      minutoFinal: req.body.minutoFinal,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
      itemListaEstadoMttoRecAuto: req.body.itemListaEstadoMttoRecAuto,
      idSucursalEntidad: req.body.idSucursalEntidad,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((tiempoRecargo) => {
      if (!tiempoRecargo) {
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
