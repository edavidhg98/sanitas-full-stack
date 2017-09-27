const repository = require('./encabezado-catalogo.repository');

function getAll(req, res) {
  repository.get()
    .then((encabezadoCatalogos) => {
      res.json(encabezadoCatalogos);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((encabezadoCatalogo) => {
      if (!encabezadoCatalogo) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(encabezadoCatalogo);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _encabezadoCatalogo = extractData(req);

  repository.add(_encabezadoCatalogo)
    .then((encabezadoCatalogo) => {
      res.status(201).json(encabezadoCatalogo);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _encabezadoCatalogo = extractData(req);

  repository.update(id, _encabezadoCatalogo)
    .then((encabezadoCatalogo) => {
      if (!encabezadoCatalogo) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(encabezadoCatalogo);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      idEncabezado: req.body.idEncabezado,
      descripcion: req.body.descripcion,
      itemListaEstado: req.body.itemListaEstado,
      observacion: req.body.observacion,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      fechaModificacion: req.body.fechaModificacion,
      loginModificacion: req.body.loginModificacion,
      activo: req.body.activo,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((encabezadoCatalogo) => {
      if (!encabezadoCatalogo) {
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
