const repository = require('./par-dependencia-campo.repository');

function getAll(req, res) {
  repository.get()
    .then((parDependenciaCampos) => {
      res.json(parDependenciaCampos);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((parDependenciaCampo) => {
      if (!parDependenciaCampo) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(parDependenciaCampo);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _parDependenciaCampo = extractData(req);

  repository.add(_parDependenciaCampo)
    .then((parDependenciaCampo) => {
      res.status(201).json(parDependenciaCampo);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _parDependenciaCampo = extractData(req);

  repository.update(id, _parDependenciaCampo)
    .then((parDependenciaCampo) => {
      if (!parDependenciaCampo) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(parDependenciaCampo);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      idParCampoPrincipal: req.body.idParCampoPrincipal,
      idParCampoDependiente: req.body.idParCampoDependiente,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((parDependenciaCampo) => {
      if (!parDependenciaCampo) {
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
