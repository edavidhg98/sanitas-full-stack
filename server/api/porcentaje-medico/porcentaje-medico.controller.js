const repository = require('./porcentaje-medico.repository');

function getAll(req, res) {
  repository.get()
    .then((porcentajeMedicos) => {
      res.json(porcentajeMedicos);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((porcentajeMedico) => {
      if (!porcentajeMedico) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(porcentajeMedico);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _porcentajeMedico = extractData(req);

  repository.add(_porcentajeMedico)
    .then((porcentajeMedico) => {
      res.status(201).json(porcentajeMedico);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _porcentajeMedico = extractData(req);

  repository.update(id, _porcentajeMedico)
    .then((porcentajeMedico) => {
      if (!porcentajeMedico) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(porcentajeMedico);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      codigoPorcentaje: req.body.codigoPorcentaje,
      descripcion: req.body.descripcion,
      porcentaje: req.body.porcentaje,
      observaciones: req.body.observaciones,
      loginRegistro: req.body.loginRegistro,
      fechaRegistro: req.body.fechaRegistro,
      loginModificacion: req.body.loginModificacion,
      fechaModificacion: req.body.fechaModificacion,
      itemListaEstadoPorcentajeMedico: req.body.itemListaEstadoPorcentajeMedico,
      idPrestador: req.body.idPrestador,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((porcentajeMedico) => {
      if (!porcentajeMedico) {
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
