const repository = require('./tipos-valores.repository');

function getAll(req, res) {
  repository.get()
    .then((tiposValoress) => {
      res.json(tiposValoress);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((tiposValores) => {
      if (!tiposValores) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(tiposValores);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _tiposValores = extractData(req);

  repository.add(_tiposValores)
    .then((tiposValores) => {
      res.status(201).json(tiposValores);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _tiposValores = extractData(req);

  repository.update(id, _tiposValores)
    .then((tiposValores) => {
      if (!tiposValores) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(tiposValores);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      idPrestador: req.body.idPrestador,
      codigo: req.body.codigo,
      descripcion: req.body.descripcion,
      cantidad: req.body.cantidad,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
      idItemListaEstadocyf: req.body.idItemListaEstadocyf,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((tiposValores) => {
      if (!tiposValores) {
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
