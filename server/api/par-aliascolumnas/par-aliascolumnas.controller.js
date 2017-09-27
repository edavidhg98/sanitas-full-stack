const repository = require('./par-aliascolumnas.repository');

function getAll(req, res) {
  repository.get()
    .then((parAliascolumnass) => {
      res.json(parAliascolumnass);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((parAliascolumnas) => {
      if (!parAliascolumnas) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(parAliascolumnas);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _parAliascolumnas = extractData(req);

  repository.add(_parAliascolumnas)
    .then((parAliascolumnas) => {
      res.status(201).json(parAliascolumnas);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _parAliascolumnas = extractData(req);

  repository.update(id, _parAliascolumnas)
    .then((parAliascolumnas) => {
      if (!parAliascolumnas) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(parAliascolumnas);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      nombretabla: req.body.nombretabla,
      nombrecolumna: req.body.nombrecolumna,
      aliascolumna: req.body.aliascolumna,
      loginRegistro: req.body.loginRegistro,
      fechaRegistro: req.body.fechaRegistro,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((parAliascolumnas) => {
      if (!parAliascolumnas) {
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
