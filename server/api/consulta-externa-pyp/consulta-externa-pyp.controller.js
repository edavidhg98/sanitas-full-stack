const repository = require('./consulta-externa-pyp.repository');

function getAll(req, res) {
  repository.get()
    .then((consultaExternaPyps) => {
      res.json(consultaExternaPyps);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((consultaExternaPyp) => {
      if (!consultaExternaPyp) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(consultaExternaPyp);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _consultaExternaPyp = extractData(req);

  repository.add(_consultaExternaPyp)
    .then((consultaExternaPyp) => {
      res.status(201).json(consultaExternaPyp);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _consultaExternaPyp = extractData(req);

  repository.update(id, _consultaExternaPyp)
    .then((consultaExternaPyp) => {
      if (!consultaExternaPyp) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(consultaExternaPyp);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      codigoPyp: req.body.codigoPyp,
      descripcion: req.body.descripcion,
      codigoPypcyd: req.body.codigoPypcyd,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
      idProcedimiento: req.body.idProcedimiento,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((consultaExternaPyp) => {
      if (!consultaExternaPyp) {
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
