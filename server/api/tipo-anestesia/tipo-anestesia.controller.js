const repository = require('./tipo-anestesia.repository');

function getAll(req, res) {
  repository.get()
    .then((tipoAnestesias) => {
      res.json(tipoAnestesias);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((tipoAnestesia) => {
      if (!tipoAnestesia) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(tipoAnestesia);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _tipoAnestesia = extractData(req);

  repository.add(_tipoAnestesia)
    .then((tipoAnestesia) => {
      res.status(201).json(tipoAnestesia);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _tipoAnestesia = extractData(req);

  repository.update(id, _tipoAnestesia)
    .then((tipoAnestesia) => {
      if (!tipoAnestesia) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(tipoAnestesia);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      tipoAnestesia: req.body.tipoAnestesia,
      descripcion: req.body.descripcion,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
      idPrestador: req.body.idPrestador,
      idProcedimiento: req.body.idProcedimiento,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((tipoAnestesia) => {
      if (!tipoAnestesia) {
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
