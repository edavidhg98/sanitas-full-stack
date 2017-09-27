const repository = require('./religion.repository');

function getAll(req, res) {
  repository.get()
    .then((religions) => {
      res.json(religions);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((religion) => {
      if (!religion) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(religion);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _religion = extractData(req);

  repository.add(_religion)
    .then((religion) => {
      res.status(201).json(religion);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _religion = extractData(req);

  repository.update(id, _religion)
    .then((religion) => {
      if (!religion) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(religion);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      religion: req.body.religion,
      descripcion: req.body.descripcion,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
      orden: req.body.orden,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((religion) => {
      if (!religion) {
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
