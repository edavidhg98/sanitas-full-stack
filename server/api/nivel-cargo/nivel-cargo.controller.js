const repository = require('./nivel-cargo.repository');

function getAll(req, res) {
  repository.get()
    .then((nivelCargos) => {
      res.json(nivelCargos);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((nivelCargo) => {
      if (!nivelCargo) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(nivelCargo);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _nivelCargo = extractData(req);

  repository.add(_nivelCargo)
    .then((nivelCargo) => {
      res.status(201).json(nivelCargo);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _nivelCargo = extractData(req);

  repository.update(id, _nivelCargo)
    .then((nivelCargo) => {
      if (!nivelCargo) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(nivelCargo);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      itemListaNivel1: req.body.itemListaNivel1,
      itemListaNivel2: req.body.itemListaNivel2,
      itemListaNivel3: req.body.itemListaNivel3,
      itemListaNivel4: req.body.itemListaNivel4,
      itemListaNivel5: req.body.itemListaNivel5,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
      idSucursalEntidad: req.body.idSucursalEntidad,
      idTipoAdmision: req.body.idTipoAdmision,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((nivelCargo) => {
      if (!nivelCargo) {
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
