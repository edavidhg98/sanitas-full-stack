const repository = require('./consultorio.repository');

function getAll(req, res) {
  repository.get()
    .then((consultorios) => {
      res.json(consultorios);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((consultorio) => {
      if (!consultorio) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(consultorio);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _consultorio = extractData(req);

  repository.add(_consultorio)
    .then((consultorio) => {
      res.status(201).json(consultorio);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _consultorio = extractData(req);

  repository.update(id, _consultorio)
    .then((consultorio) => {
      if (!consultorio) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(consultorio);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      itemListaTipoConsultorio: req.body.itemListaTipoConsultorio,
      consultorio: req.body.consultorio,
      descripcion: req.body.descripcion,
      turno: req.body.turno,
      dirIp: req.body.dirIp,
      conUrgencia: req.body.conUrgencia,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
      itemListaEstadoConsultorio: req.body.itemListaEstadoConsultorio,
      idSucursal: req.body.idSucursal,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((consultorio) => {
      if (!consultorio) {
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
