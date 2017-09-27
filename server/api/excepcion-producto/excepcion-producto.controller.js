const repository = require('./excepcion-producto.repository');

function getAll(req, res) {
  repository.get()
    .then((excepcionProductos) => {
      res.json(excepcionProductos);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((excepcionProducto) => {
      if (!excepcionProducto) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(excepcionProducto);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _excepcionProducto = extractData(req);

  repository.add(_excepcionProducto)
    .then((excepcionProducto) => {
      res.status(201).json(excepcionProducto);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _excepcionProducto = extractData(req);

  repository.update(id, _excepcionProducto)
    .then((excepcionProducto) => {
      if (!excepcionProducto) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(excepcionProducto);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      itemListaEstadoExcepcionProducto: req.body.itemListaEstadoExcepcionProducto,
      particular: req.body.particular,
      observaciones: req.body.observaciones,
      loginRegistro: req.body.loginRegistro,
      fechaRegistro: req.body.fechaRegistro,
      idEntidad: req.body.idEntidad,
      idPrestador: req.body.idPrestador,
      idProducto: req.body.idProducto,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((excepcionProducto) => {
      if (!excepcionProducto) {
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
