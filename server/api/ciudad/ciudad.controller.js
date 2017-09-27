const repository = require('./ciudad.repository');

function getAll(req, res) {
  repository.get()
    .then((ciudads) => {
      res.json(ciudads);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((ciudad) => {
      if (!ciudad) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(ciudad);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _ciudad = extractData(req);

  repository.add(_ciudad)
    .then((ciudad) => {
      res.status(201).json(ciudad);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _ciudad = extractData(req);

  repository.update(id, _ciudad)
    .then((ciudad) => {
      if (!ciudad) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(ciudad);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      idDepartamento: req.body.idDepartamento,
      nombreCiudad: req.body.nombreCiudad,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
      codigo: req.body.codigo,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((ciudad) => {
      if (!ciudad) {
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
