const repository = require('./tipo-novedad.repository');

function getAll(req, res) {
  repository.get()
    .then((tipoNovedads) => {
      res.json(tipoNovedads);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((tipoNovedad) => {
      if (!tipoNovedad) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(tipoNovedad);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _tipoNovedad = extractData(req);

  repository.add(_tipoNovedad)
    .then((tipoNovedad) => {
      res.status(201).json(tipoNovedad);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _tipoNovedad = extractData(req);

  repository.update(id, _tipoNovedad)
    .then((tipoNovedad) => {
      if (!tipoNovedad) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(tipoNovedad);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      codigoTipoNovedad: req.body.codigoTipoNovedad,
      descripcion: req.body.descripcion,
      idConcepto: req.body.idConcepto,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((tipoNovedad) => {
      if (!tipoNovedad) {
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
