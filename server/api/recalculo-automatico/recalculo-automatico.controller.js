const repository = require('./recalculo-automatico.repository');

function getAll(req, res) {
  repository.get()
    .then((recalculoAutomaticos) => {
      res.json(recalculoAutomaticos);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((recalculoAutomatico) => {
      if (!recalculoAutomatico) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(recalculoAutomatico);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _recalculoAutomatico = extractData(req);

  repository.add(_recalculoAutomatico)
    .then((recalculoAutomatico) => {
      res.status(201).json(recalculoAutomatico);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _recalculoAutomatico = extractData(req);

  repository.update(id, _recalculoAutomatico)
    .then((recalculoAutomatico) => {
      if (!recalculoAutomatico) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(recalculoAutomatico);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      codigoInteligente: req.body.codigoInteligente,
      porcentaje: req.body.porcentaje,
      valor: req.body.valor,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
      idPrestador: req.body.idPrestador,
      itemListaEstadoRecalculo: req.body.itemListaEstadoRecalculo,
      idSucursal: req.body.idSucursal,
      idEntidad: req.body.idEntidad,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((recalculoAutomatico) => {
      if (!recalculoAutomatico) {
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
