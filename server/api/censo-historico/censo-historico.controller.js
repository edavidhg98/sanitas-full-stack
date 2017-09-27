const repository = require('./censo-historico.repository');

function getAll(req, res) {
  repository.get()
    .then((censoHistoricos) => {
      res.json(censoHistoricos);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((censoHistorico) => {
      if (!censoHistorico) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(censoHistorico);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _censoHistorico = extractData(req);

  repository.add(_censoHistorico)
    .then((censoHistorico) => {
      res.status(201).json(censoHistorico);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _censoHistorico = extractData(req);

  repository.update(id, _censoHistorico)
    .then((censoHistorico) => {
      if (!censoHistorico) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(censoHistorico);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      fecha: req.body.fecha,
      itemListaEstadoCamaCensoHistorico: req.body.itemListaEstadoCamaCensoHistorico,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
      idCama: req.body.idCama,
      idSucursal: req.body.idSucursal,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((censoHistorico) => {
      if (!censoHistorico) {
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
