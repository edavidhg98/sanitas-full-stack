const repository = require('./medico-sucursal-entidad.repository');

function getAll(req, res) {
  repository.get()
    .then((medicoSucursalEntidads) => {
      res.json(medicoSucursalEntidads);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((medicoSucursalEntidad) => {
      if (!medicoSucursalEntidad) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(medicoSucursalEntidad);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _medicoSucursalEntidad = extractData(req);

  repository.add(_medicoSucursalEntidad)
    .then((medicoSucursalEntidad) => {
      res.status(201).json(medicoSucursalEntidad);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _medicoSucursalEntidad = extractData(req);

  repository.update(id, _medicoSucursalEntidad)
    .then((medicoSucursalEntidad) => {
      if (!medicoSucursalEntidad) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(medicoSucursalEntidad);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      idSucursal: req.body.idSucursal,
      idMedico: req.body.idMedico,
      idEspecialidad: req.body.idEspecialidad,
      idEntidad: req.body.idEntidad,
      idItemListaMedicoFamiliar: req.body.idItemListaMedicoFamiliar,
      idItemListaFormulaCronicos: req.body.idItemListaFormulaCronicos,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
      idItemListaMedicoCitasweb: req.body.idItemListaMedicoCitasweb,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((medicoSucursalEntidad) => {
      if (!medicoSucursalEntidad) {
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
