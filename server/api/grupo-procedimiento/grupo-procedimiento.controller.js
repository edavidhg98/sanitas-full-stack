const repository = require('./grupo-procedimiento.repository');

function getAll(req, res) {
  repository.get()
    .then((grupoProcedimientos) => {
      res.json(grupoProcedimientos);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((grupoProcedimiento) => {
      if (!grupoProcedimiento) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(grupoProcedimiento);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _grupoProcedimiento = extractData(req);

  repository.add(_grupoProcedimiento)
    .then((grupoProcedimiento) => {
      res.status(201).json(grupoProcedimiento);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _grupoProcedimiento = extractData(req);

  repository.update(id, _grupoProcedimiento)
    .then((grupoProcedimiento) => {
      if (!grupoProcedimiento) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(grupoProcedimiento);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      itemListaTipoProcedimiento: req.body.itemListaTipoProcedimiento,
      gruProced: req.body.gruProced,
      descripcion: req.body.descripcion,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
      idPrestador: req.body.idPrestador,
      itemListaEstadoEntidadUvr: req.body.itemListaEstadoEntidadUvr,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((grupoProcedimiento) => {
      if (!grupoProcedimiento) {
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
