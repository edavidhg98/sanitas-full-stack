const repository = require('./par-tipo-campo.repository');

function getAll(req, res) {
  repository.get()
    .then((parTipoCampos) => {
      res.json(parTipoCampos);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((parTipoCampo) => {
      if (!parTipoCampo) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(parTipoCampo);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _parTipoCampo = extractData(req);

  repository.add(_parTipoCampo)
    .then((parTipoCampo) => {
      res.status(201).json(parTipoCampo);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _parTipoCampo = extractData(req);

  repository.update(id, _parTipoCampo)
    .then((parTipoCampo) => {
      if (!parTipoCampo) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(parTipoCampo);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      descripcionTipo: req.body.descripcionTipo,
      estadoTipoCampo: req.body.estadoTipoCampo,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((parTipoCampo) => {
      if (!parTipoCampo) {
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
