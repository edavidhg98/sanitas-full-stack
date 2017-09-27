const repository = require('./pais.repository');

function getAll(req, res) {
  repository.get()
    .then((paiss) => {
      res.json(paiss);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((pais) => {
      if (!pais) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(pais);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _pais = extractData(req);

  repository.add(_pais)
    .then((pais) => {
      res.status(201).json(pais);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _pais = extractData(req);

  repository.update(id, _pais)
    .then((pais) => {
      if (!pais) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(pais);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      nombrePais: req.body.nombrePais,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
      codigo: req.body.codigo,
      gentilicio: req.body.gentilicio,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((pais) => {
      if (!pais) {
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
