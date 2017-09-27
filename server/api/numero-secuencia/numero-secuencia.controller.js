const repository = require('./numero-secuencia.repository');

function getAll(req, res) {
  repository.get()
    .then((numeroSecuencias) => {
      res.json(numeroSecuencias);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((numeroSecuencia) => {
      if (!numeroSecuencia) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(numeroSecuencia);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _numeroSecuencia = extractData(req);

  repository.add(_numeroSecuencia)
    .then((numeroSecuencia) => {
      res.status(201).json(numeroSecuencia);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _numeroSecuencia = extractData(req);

  repository.update(id, _numeroSecuencia)
    .then((numeroSecuencia) => {
      if (!numeroSecuencia) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(numeroSecuencia);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      type: req.body.type,
      prefix: req.body.prefix,
      lastnumber: req.body.lastnumber,
      length: req.body.length,
      year: req.body.year,
      month: req.body.month,
      lastyear: req.body.lastyear,
      lastmonth: req.body.lastmonth,
      tablename: req.body.tablename,
      idSucursal: req.body.idSucursal,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((numeroSecuencia) => {
      if (!numeroSecuencia) {
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
