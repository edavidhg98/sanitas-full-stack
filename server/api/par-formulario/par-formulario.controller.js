const repository = require('./par-formulario.repository');

function getAll(req, res) {
  repository.get()
    .then((parFormularios) => {
      res.json(parFormularios);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((parFormulario) => {
      if (!parFormulario) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(parFormulario);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _parFormulario = extractData(req);

  repository.add(_parFormulario)
    .then((parFormulario) => {
      res.status(201).json(parFormulario);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _parFormulario = extractData(req);

  repository.update(id, _parFormulario)
    .then((parFormulario) => {
      if (!parFormulario) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(parFormulario);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      nombre: req.body.nombre,
      titulo: req.body.titulo,
      nombreTabla: req.body.nombreTabla,
      estadoFormulario: req.body.estadoFormulario,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((parFormulario) => {
      if (!parFormulario) {
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
