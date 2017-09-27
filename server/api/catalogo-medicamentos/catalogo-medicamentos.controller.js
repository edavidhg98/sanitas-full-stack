const repository = require('./catalogo-medicamentos.repository');

function getAll(req, res) {
  repository.get()
    .then((catalogoMedicamentoss) => {
      res.json(catalogoMedicamentoss);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((catalogoMedicamentos) => {
      if (!catalogoMedicamentos) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(catalogoMedicamentos);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _catalogoMedicamentos = extractData(req);

  repository.add(_catalogoMedicamentos)
    .then((catalogoMedicamentos) => {
      res.status(201).json(catalogoMedicamentos);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _catalogoMedicamentos = extractData(req);

  repository.update(id, _catalogoMedicamentos)
    .then((catalogoMedicamentos) => {
      if (!catalogoMedicamentos) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(catalogoMedicamentos);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      descripcion: req.body.descripcion,
      observacion: req.body.observacion,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      fechaModificacion: req.body.fechaModificacion,
      loginModificacion: req.body.loginModificacion,
      itemListaEstadoCatMedicamentos: req.body.itemListaEstadoCatMedicamentos,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((catalogoMedicamentos) => {
      if (!catalogoMedicamentos) {
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
