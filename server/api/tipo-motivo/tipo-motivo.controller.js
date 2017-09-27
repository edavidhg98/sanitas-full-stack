const repository = require('./tipo-motivo.repository');

function getAll(req, res) {
  repository.get()
    .then((tipoMotivos) => {
      res.json(tipoMotivos);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((tipoMotivo) => {
      if (!tipoMotivo) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(tipoMotivo);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _tipoMotivo = extractData(req);

  repository.add(_tipoMotivo)
    .then((tipoMotivo) => {
      res.status(201).json(tipoMotivo);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _tipoMotivo = extractData(req);

  repository.update(id, _tipoMotivo)
    .then((tipoMotivo) => {
      if (!tipoMotivo) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(tipoMotivo);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      itemListaClaseMotivo: req.body.itemListaClaseMotivo,
      descripcion: req.body.descripcion,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
      codigo: req.body.codigo,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((tipoMotivo) => {
      if (!tipoMotivo) {
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
