const repository = require('./estado-salida-paciente.repository');

function getAll(req, res) {
  repository.get()
    .then((estadoSalidaPacientes) => {
      res.json(estadoSalidaPacientes);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((estadoSalidaPaciente) => {
      if (!estadoSalidaPaciente) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(estadoSalidaPaciente);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _estadoSalidaPaciente = extractData(req);

  repository.add(_estadoSalidaPaciente)
    .then((estadoSalidaPaciente) => {
      res.status(201).json(estadoSalidaPaciente);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _estadoSalidaPaciente = extractData(req);

  repository.update(id, _estadoSalidaPaciente)
    .then((estadoSalidaPaciente) => {
      if (!estadoSalidaPaciente) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(estadoSalidaPaciente);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      idAdmision: req.body.idAdmision,
      itemListaEstadoSalidaPaciente: req.body.itemListaEstadoSalidaPaciente,
      itemListaTipoHcRegistra: req.body.itemListaTipoHcRegistra,
      obsSalida: req.body.obsSalida,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((estadoSalidaPaciente) => {
      if (!estadoSalidaPaciente) {
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
