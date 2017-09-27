const repository = require('./par-origen-informacion.repository');

function getAll(req, res) {
  repository.get()
    .then((parOrigenInformacions) => {
      res.json(parOrigenInformacions);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((parOrigenInformacion) => {
      if (!parOrigenInformacion) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(parOrigenInformacion);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _parOrigenInformacion = extractData(req);

  repository.add(_parOrigenInformacion)
    .then((parOrigenInformacion) => {
      res.status(201).json(parOrigenInformacion);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _parOrigenInformacion = extractData(req);

  repository.update(id, _parOrigenInformacion)
    .then((parOrigenInformacion) => {
      if (!parOrigenInformacion) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(parOrigenInformacion);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      codigo: req.body.codigo,
      descripcion: req.body.descripcion,
      tabla: req.body.tabla,
      filtro: req.body.filtro,
      orden: req.body.orden,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
      identificador: req.body.identificador,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((parOrigenInformacion) => {
      if (!parOrigenInformacion) {
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
