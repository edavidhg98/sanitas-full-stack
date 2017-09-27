const repository = require('./anticipo.repository');

function getAll(req, res) {
  repository.get()
    .then((anticipos) => {
      res.json(anticipos);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((anticipo) => {
      if (!anticipo) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(anticipo);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _anticipo = extractData(req);

  repository.add(_anticipo)
    .then((anticipo) => {
      res.status(201).json(anticipo);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _anticipo = extractData(req);

  repository.update(id, _anticipo)
    .then((anticipo) => {
      if (!anticipo) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(anticipo);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      valorAnticipo: req.body.valorAnticipo,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
      estadoItemLista: req.body.estadoItemLista,
      idSucursal: req.body.idSucursal,
      idEntidad: req.body.idEntidad,
      idProcedimiento: req.body.idProcedimiento,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((anticipo) => {
      if (!anticipo) {
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
