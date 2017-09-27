const repository = require('./vale-electronico.repository');

function getAll(req, res) {
  repository.get()
    .then((valeElectronicos) => {
      res.json(valeElectronicos);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((valeElectronico) => {
      if (!valeElectronico) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(valeElectronico);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _valeElectronico = extractData(req);

  repository.add(_valeElectronico)
    .then((valeElectronico) => {
      res.status(201).json(valeElectronico);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _valeElectronico = extractData(req);

  repository.update(id, _valeElectronico)
    .then((valeElectronico) => {
      if (!valeElectronico) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(valeElectronico);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      servicio: req.body.servicio,
      codigoError: req.body.codigoError,
      descripcionError: req.body.descripcionError,
      itemListaEstado: req.body.itemListaEstado,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
      pin: req.body.pin,
      idAdmision: req.body.idAdmision,
      contrato: req.body.contrato,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((valeElectronico) => {
      if (!valeElectronico) {
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
