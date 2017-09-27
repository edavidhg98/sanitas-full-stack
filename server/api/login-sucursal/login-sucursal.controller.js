const repository = require('./login-sucursal.repository');

function getAll(req, res) {
  repository.get()
    .then((loginSucursals) => {
      res.json(loginSucursals);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((loginSucursal) => {
      if (!loginSucursal) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(loginSucursal);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _loginSucursal = extractData(req);

  repository.add(_loginSucursal)
    .then((loginSucursal) => {
      res.status(201).json(loginSucursal);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _loginSucursal = extractData(req);

  repository.update(id, _loginSucursal)
    .then((loginSucursal) => {
      if (!loginSucursal) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(loginSucursal);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
      idSucursal: req.body.idSucursal,
      idLogin: req.body.idLogin,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((loginSucursal) => {
      if (!loginSucursal) {
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
