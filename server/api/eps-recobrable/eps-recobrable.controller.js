const repository = require('./eps-recobrable.repository');

function getAll(req, res) {
  repository.get()
    .then((epsRecobrables) => {
      res.json(epsRecobrables);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((epsRecobrable) => {
      if (!epsRecobrable) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(epsRecobrable);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _epsRecobrable = extractData(req);

  repository.add(_epsRecobrable)
    .then((epsRecobrable) => {
      res.status(201).json(epsRecobrable);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _epsRecobrable = extractData(req);

  repository.update(id, _epsRecobrable)
    .then((epsRecobrable) => {
      if (!epsRecobrable) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(epsRecobrable);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      epsRecobrable: req.body.epsRecobrable,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
      idEntidad: req.body.idEntidad,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((epsRecobrable) => {
      if (!epsRecobrable) {
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
