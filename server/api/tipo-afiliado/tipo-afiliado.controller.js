const repository = require('./tipo-afiliado.repository');

function getAll(req, res) {
  repository.get()
    .then((tipoAfiliados) => {
      res.json(tipoAfiliados);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((tipoAfiliado) => {
      if (!tipoAfiliado) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(tipoAfiliado);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _tipoAfiliado = extractData(req);

  repository.add(_tipoAfiliado)
    .then((tipoAfiliado) => {
      res.status(201).json(tipoAfiliado);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _tipoAfiliado = extractData(req);

  repository.update(id, _tipoAfiliado)
    .then((tipoAfiliado) => {
      if (!tipoAfiliado) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(tipoAfiliado);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      tipAfiliad: req.body.tipAfiliad,
      descripcion: req.body.descripcion,
      manCopago: req.body.manCopago,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((tipoAfiliado) => {
      if (!tipoAfiliado) {
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
