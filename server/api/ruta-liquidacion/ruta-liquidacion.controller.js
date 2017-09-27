const repository = require('./ruta-liquidacion.repository');

function getAll(req, res) {
  repository.get()
    .then((rutaLiquidacions) => {
      res.json(rutaLiquidacions);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((rutaLiquidacion) => {
      if (!rutaLiquidacion) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(rutaLiquidacion);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _rutaLiquidacion = extractData(req);

  repository.add(_rutaLiquidacion)
    .then((rutaLiquidacion) => {
      res.status(201).json(rutaLiquidacion);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _rutaLiquidacion = extractData(req);

  repository.update(id, _rutaLiquidacion)
    .then((rutaLiquidacion) => {
      if (!rutaLiquidacion) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(rutaLiquidacion);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((rutaLiquidacion) => {
      if (!rutaLiquidacion) {
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
