const repository = require('./seccion.repository');

function getAll(req, res) {
  repository.get()
    .then((seccions) => {
      res.json(seccions);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((seccion) => {
      if (!seccion) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(seccion);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _seccion = extractData(req);

  repository.add(_seccion)
    .then((seccion) => {
      res.status(201).json(seccion);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _seccion = extractData(req);

  repository.update(id, _seccion)
    .then((seccion) => {
      if (!seccion) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(seccion);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      seccion: req.body.seccion,
      idCentroCosto: req.body.idCentroCosto,
      descripcion: req.body.descripcion,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
      manejaCenso: req.body.manejaCenso,
      idSucursal: req.body.idSucursal,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((seccion) => {
      if (!seccion) {
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
