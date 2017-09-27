const repository = require('./cama.repository');

function getAll(req, res) {
  repository.get()
    .then((camas) => {
      res.json(camas);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((cama) => {
      if (!cama) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(cama);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _cama = extractData(req);

  repository.add(_cama)
    .then((cama) => {
      res.status(201).json(cama);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _cama = extractData(req);

  repository.update(id, _cama)
    .then((cama) => {
      if (!cama) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(cama);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      cama: req.body.cama,
      itemListaEstadoCama: req.body.itemListaEstadoCama,
      descripcion: req.body.descripcion,
      numExt: req.body.numExt,
      fecPosEgr: req.body.fecPosEgr,
      horPosEgr: req.body.horPosEgr,
      minPosEgr: req.body.minPosEgr,
      carHab: req.body.carHab,
      fecRegistro: req.body.fecRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
      idFotoEstadoCama: req.body.idFotoEstadoCama,
      idSucursal: req.body.idSucursal,
      idProcedimiento: req.body.idProcedimiento,
      idProcedimiento1: req.body.idProcedimiento,
      idSeccion: req.body.idSeccion,
      idTipoCama: req.body.idTipoCama,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((cama) => {
      if (!cama) {
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
