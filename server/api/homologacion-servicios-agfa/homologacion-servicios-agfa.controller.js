const repository = require('./homologacion-servicios-agfa.repository');

function getAll(req, res) {
  repository.get()
    .then((homologacionServiciosAgfas) => {
      res.json(homologacionServiciosAgfas);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((homologacionServiciosAgfa) => {
      if (!homologacionServiciosAgfa) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(homologacionServiciosAgfa);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _homologacionServiciosAgfa = extractData(req);

  repository.add(_homologacionServiciosAgfa)
    .then((homologacionServiciosAgfa) => {
      res.status(201).json(homologacionServiciosAgfa);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _homologacionServiciosAgfa = extractData(req);

  repository.update(id, _homologacionServiciosAgfa)
    .then((homologacionServiciosAgfa) => {
      if (!homologacionServiciosAgfa) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(homologacionServiciosAgfa);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      codigoSophia: req.body.codigoSophia,
      codigoGrabacionAgfa: req.body.codigoGrabacionAgfa,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      itemListaEstadoHomologaServicioAgfa: req.body.itemListaEstadoHomologaServicioAgfa,
      observaciones: req.body.observaciones,
      idSucursal: req.body.idSucursal,
      idEntidad: req.body.idEntidad,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((homologacionServiciosAgfa) => {
      if (!homologacionServiciosAgfa) {
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
