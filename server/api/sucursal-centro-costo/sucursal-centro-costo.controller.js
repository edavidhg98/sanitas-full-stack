const repository = require('./sucursal-centro-costo.repository');

function getAll(req, res) {
  repository.get()
    .then((sucursalCentroCostos) => {
      res.json(sucursalCentroCostos);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((sucursalCentroCosto) => {
      if (!sucursalCentroCosto) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(sucursalCentroCosto);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _sucursalCentroCosto = extractData(req);

  repository.add(_sucursalCentroCosto)
    .then((sucursalCentroCosto) => {
      res.status(201).json(sucursalCentroCosto);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _sucursalCentroCosto = extractData(req);

  repository.update(id, _sucursalCentroCosto)
    .then((sucursalCentroCosto) => {
      if (!sucursalCentroCosto) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(sucursalCentroCosto);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      idSucursal: req.body.idSucursal,
      idCentroCosto: req.body.idCentroCosto,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((sucursalCentroCosto) => {
      if (!sucursalCentroCosto) {
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
