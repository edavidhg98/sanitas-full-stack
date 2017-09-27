const repository = require('./trazabilidad-admision-lista-espera-historia-clinica.repository');

function getAll(req, res) {
  repository.get()
    .then((trazabilidadAdmisionListaEsperaHistoriaClinicas) => {
      res.json(trazabilidadAdmisionListaEsperaHistoriaClinicas);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((trazabilidadAdmisionListaEsperaHistoriaClinica) => {
      if (!trazabilidadAdmisionListaEsperaHistoriaClinica) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(trazabilidadAdmisionListaEsperaHistoriaClinica);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _trazabilidadAdmisionListaEsperaHistoriaClinica = extractData(req);

  repository.add(_trazabilidadAdmisionListaEsperaHistoriaClinica)
    .then((trazabilidadAdmisionListaEsperaHistoriaClinica) => {
      res.status(201).json(trazabilidadAdmisionListaEsperaHistoriaClinica);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _trazabilidadAdmisionListaEsperaHistoriaClinica = extractData(req);

  repository.update(id, _trazabilidadAdmisionListaEsperaHistoriaClinica)
    .then((trazabilidadAdmisionListaEsperaHistoriaClinica) => {
      if (!trazabilidadAdmisionListaEsperaHistoriaClinica) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(trazabilidadAdmisionListaEsperaHistoriaClinica);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      idListaEsperaHistoriaClinica: req.body.idListaEsperaHistoriaClinica,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
      idTrazabilidadAdmision: req.body.idTrazabilidadAdmision,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((trazabilidadAdmisionListaEsperaHistoriaClinica) => {
      if (!trazabilidadAdmisionListaEsperaHistoriaClinica) {
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
