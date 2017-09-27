const repository = require('./calendario.repository');

function getAll(req, res) {
  repository.get()
    .then((calendarios) => {
      res.json(calendarios);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((calendario) => {
      if (!calendario) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(calendario);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _calendario = extractData(req);

  repository.add(_calendario)
    .then((calendario) => {
      res.status(201).json(calendario);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _calendario = extractData(req);

  repository.update(id, _calendario)
    .then((calendario) => {
      if (!calendario) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(calendario);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      fecha: req.body.fecha,
      nombreDia: req.body.nombreDia,
      festivo: req.body.festivo,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
      pruebaRango: req.body.pruebaRango,
      activo: req.body.activo,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((calendario) => {
      if (!calendario) {
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
