const repository = require('./login.repository');

function getAll(req, res) {
  repository.get()
    .then((logins) => {
      res.json(logins);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((login) => {
      if (!login) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(login);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _login = extractData(req);

  repository.add(_login)
    .then((login) => {
      res.status(201).json(login);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _login = extractData(req);

  repository.update(id, _login)
    .then((login) => {
      if (!login) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(login);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      login: req.body.login,
      numeroDocumento: req.body.numeroDocumento,
      consultaHistoria: req.body.consultaHistoria,
      idCentroCosto: req.body.idCentroCosto,
      loginRegistro: req.body.loginRegistro,
      fechaRegistro: req.body.fechaRegistro,
      fechaUltimoCambio: req.body.fechaUltimoCambio,
      fechaUltimoAcceso: req.body.fechaUltimoAcceso,
      password: req.body.password,
      claveAgfa: req.body.claveAgfa,
      itemListaCargo: req.body.itemListaCargo,
      nombre: req.body.nombre,
      usuarioAgfa: req.body.usuarioAgfa,
      itemListaEstadoLogin: req.body.itemListaEstadoLogin,
      itemListaTipoUsuarioLogin: req.body.itemListaTipoUsuarioLogin,
      usuarioLdap: req.body.usuarioLdap,
      itemListaTipoDocumento: req.body.itemListaTipoDocumento,
      callCenter: req.body.callCenter,
      apellido: req.body.apellido,
      observaciones: req.body.observaciones,
      idCiudad: req.body.idCiudad,
      idSucursal: req.body.idSucursal,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((login) => {
      if (!login) {
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
