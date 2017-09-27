const repository = require('./grupo-etareo.repository');

function getAll(req, res) {
  repository.get()
    .then((grupoEtareos) => {
      res.json(grupoEtareos);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((grupoEtareo) => {
      if (!grupoEtareo) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(grupoEtareo);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _grupoEtareo = extractData(req);

  repository.add(_grupoEtareo)
    .then((grupoEtareo) => {
      res.status(201).json(grupoEtareo);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _grupoEtareo = extractData(req);

  repository.update(id, _grupoEtareo)
    .then((grupoEtareo) => {
      if (!grupoEtareo) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(grupoEtareo);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      codigo: req.body.codigo,
      descripcion: req.body.descripcion,
      edadDesde: req.body.edadDesde,
      edadHasta: req.body.edadHasta,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
      idEntidad: req.body.idEntidad,
      idSucursal: req.body.idSucursal,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((grupoEtareo) => {
      if (!grupoEtareo) {
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
