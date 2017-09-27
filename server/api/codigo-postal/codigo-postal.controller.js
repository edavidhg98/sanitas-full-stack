const repository = require('./codigo-postal.repository');

function getAll(req, res) {
  repository.get()
    .then((codigoPostals) => {
      res.json(codigoPostals);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((codigoPostal) => {
      if (!codigoPostal) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(codigoPostal);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _codigoPostal = extractData(req);

  repository.add(_codigoPostal)
    .then((codigoPostal) => {
      res.status(201).json(codigoPostal);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _codigoPostal = extractData(req);

  repository.update(id, _codigoPostal)
    .then((codigoPostal) => {
      if (!codigoPostal) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(codigoPostal);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      codigoPostal: req.body.codigoPostal,
      descripcion: req.body.descripcion,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((codigoPostal) => {
      if (!codigoPostal) {
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
