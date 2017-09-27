const repository = require('./carnet.repository');

function getAll(req, res) {
  repository.get()
    .then((carnets) => {
      res.json(carnets);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((carnet) => {
      if (!carnet) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(carnet);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _carnet = extractData(req);

  repository.add(_carnet)
    .then((carnet) => {
      res.status(201).json(carnet);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _carnet = extractData(req);

  repository.update(id, _carnet)
    .then((carnet) => {
      if (!carnet) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(carnet);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      campo: req.body.campo,
      longitud: req.body.longitud,
      orden: req.body.orden,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((carnet) => {
      if (!carnet) {
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
