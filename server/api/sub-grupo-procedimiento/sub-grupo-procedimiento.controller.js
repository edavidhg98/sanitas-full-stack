const repository = require('./sub-grupo-procedimiento.repository');

function getAll(req, res) {
  repository.get()
    .then((subGrupoProcedimientos) => {
      res.json(subGrupoProcedimientos);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((subGrupoProcedimiento) => {
      if (!subGrupoProcedimiento) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(subGrupoProcedimiento);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _subGrupoProcedimiento = extractData(req);

  repository.add(_subGrupoProcedimiento)
    .then((subGrupoProcedimiento) => {
      res.status(201).json(subGrupoProcedimiento);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _subGrupoProcedimiento = extractData(req);

  repository.update(id, _subGrupoProcedimiento)
    .then((subGrupoProcedimiento) => {
      if (!subGrupoProcedimiento) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(subGrupoProcedimiento);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      subProced: req.body.subProced,
      descripcion: req.body.descripcion,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
      idGrupoProcedimiento: req.body.idGrupoProcedimiento,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((subGrupoProcedimiento) => {
      if (!subGrupoProcedimiento) {
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
