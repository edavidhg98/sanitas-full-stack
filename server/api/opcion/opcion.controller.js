const repository = require('./opcion.repository');

function getAll(req, res) {
  repository.get()
    .then((opcions) => {
      res.json(opcions);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((opcion) => {
      if (!opcion) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(opcion);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _opcion = extractData(req);

  repository.add(_opcion)
    .then((opcion) => {
      res.status(201).json(opcion);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _opcion = extractData(req);

  repository.update(id, _opcion)
    .then((opcion) => {
      if (!opcion) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(opcion);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      codigo: req.body.codigo,
      idModulo: req.body.idModulo,
      descripcion: req.body.descripcion,
      idDependencia: req.body.idDependencia,
      nombreForma: req.body.nombreForma,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
      nombrePagina: req.body.nombrePagina,
      nombrePantalla: req.body.nombrePantalla,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((opcion) => {
      if (!opcion) {
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
