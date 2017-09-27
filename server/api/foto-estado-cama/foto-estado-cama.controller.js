const repository = require('./foto-estado-cama.repository');

function getAll(req, res) {
  repository.get()
    .then((fotoEstadoCamas) => {
      res.json(fotoEstadoCamas);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((fotoEstadoCama) => {
      if (!fotoEstadoCama) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(fotoEstadoCama);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _fotoEstadoCama = extractData(req);

  repository.add(_fotoEstadoCama)
    .then((fotoEstadoCama) => {
      res.status(201).json(fotoEstadoCama);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _fotoEstadoCama = extractData(req);

  repository.update(id, _fotoEstadoCama)
    .then((fotoEstadoCama) => {
      if (!fotoEstadoCama) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(fotoEstadoCama);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      idfoto: req.body.idfoto,
      itemListaEstadoCama: req.body.itemListaEstadoCama,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((fotoEstadoCama) => {
      if (!fotoEstadoCama) {
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
