const repository = require('./recargo-automatico.repository');

function getAll(req, res) {
  repository.get()
    .then((recargoAutomaticos) => {
      res.json(recargoAutomaticos);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((recargoAutomatico) => {
      if (!recargoAutomatico) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(recargoAutomatico);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _recargoAutomatico = extractData(req);

  repository.add(_recargoAutomatico)
    .then((recargoAutomatico) => {
      res.status(201).json(recargoAutomatico);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _recargoAutomatico = extractData(req);

  repository.update(id, _recargoAutomatico)
    .then((recargoAutomatico) => {
      if (!recargoAutomatico) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(recargoAutomatico);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      idSucursal: req.body.idSucursal,
      codigoInteligente: req.body.codigoInteligente,
      porcentaje: req.body.porcentaje,
      valor: req.body.valor,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
      activo: req.body.activo,
      idEntidad: req.body.idEntidad,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((recargoAutomatico) => {
      if (!recargoAutomatico) {
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
