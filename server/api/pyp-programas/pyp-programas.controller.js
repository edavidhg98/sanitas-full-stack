const repository = require('./pyp-programas.repository');

function getAll(req, res) {
  repository.get()
    .then((pypProgramass) => {
      res.json(pypProgramass);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((pypProgramas) => {
      if (!pypProgramas) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(pypProgramas);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _pypProgramas = extractData(req);

  repository.add(_pypProgramas)
    .then((pypProgramas) => {
      res.status(201).json(pypProgramas);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _pypProgramas = extractData(req);

  repository.update(id, _pypProgramas)
    .then((pypProgramas) => {
      if (!pypProgramas) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(pypProgramas);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      codPrograma: req.body.codPrograma,
      descripcion: req.body.descripcion,
      idAdmision: req.body.idAdmision,
      itemListaEstadoscyf: req.body.itemListaEstadoscyf,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((pypProgramas) => {
      if (!pypProgramas) {
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
