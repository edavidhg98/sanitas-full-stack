const repository = require('./zona-horaria-verano.repository');

function getAll(req, res) {
  repository.get()
    .then((zonaHorariaVeranos) => {
      res.json(zonaHorariaVeranos);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((zonaHorariaVerano) => {
      if (!zonaHorariaVerano) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(zonaHorariaVerano);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _zonaHorariaVerano = extractData(req);

  repository.add(_zonaHorariaVerano)
    .then((zonaHorariaVerano) => {
      res.status(201).json(zonaHorariaVerano);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _zonaHorariaVerano = extractData(req);

  repository.update(id, _zonaHorariaVerano)
    .then((zonaHorariaVerano) => {
      if (!zonaHorariaVerano) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(zonaHorariaVerano);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      fechaInicio: req.body.fechaInicio,
      fechaFin: req.body.fechaFin,
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
    .then((zonaHorariaVerano) => {
      if (!zonaHorariaVerano) {
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
