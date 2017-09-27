const repository = require('./medico-grupo-procedimiento.repository');

function getAll(req, res) {
  repository.get()
    .then((medicoGrupoProcedimientos) => {
      res.json(medicoGrupoProcedimientos);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((medicoGrupoProcedimiento) => {
      if (!medicoGrupoProcedimiento) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(medicoGrupoProcedimiento);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _medicoGrupoProcedimiento = extractData(req);

  repository.add(_medicoGrupoProcedimiento)
    .then((medicoGrupoProcedimiento) => {
      res.status(201).json(medicoGrupoProcedimiento);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _medicoGrupoProcedimiento = extractData(req);

  repository.update(id, _medicoGrupoProcedimiento)
    .then((medicoGrupoProcedimiento) => {
      if (!medicoGrupoProcedimiento) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(medicoGrupoProcedimiento);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      idMedico: req.body.idMedico,
      idEspecialidad: req.body.idEspecialidad,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
      idSubGrupoProcedimiento: req.body.idSubGrupoProcedimiento,
      idSucursal: req.body.idSucursal,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((medicoGrupoProcedimiento) => {
      if (!medicoGrupoProcedimiento) {
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
