const repository = require('./zona-horaria.repository');

function getAll(req, res) {
  repository.get()
    .then((zonaHorarias) => {
      res.json(zonaHorarias);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((zonaHoraria) => {
      if (!zonaHoraria) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(zonaHoraria);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _zonaHoraria = extractData(req);

  repository.add(_zonaHoraria)
    .then((zonaHoraria) => {
      res.status(201).json(zonaHoraria);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _zonaHoraria = extractData(req);

  repository.update(id, _zonaHoraria)
    .then((zonaHoraria) => {
      if (!zonaHoraria) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(zonaHoraria);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      utc: req.body.utc,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
      idSucursal: req.body.idSucursal,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((zonaHoraria) => {
      if (!zonaHoraria) {
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
