const repository = require('./tipo-cama.repository');

function getAll(req, res) {
  repository.get()
    .then((tipoCamas) => {
      res.json(tipoCamas);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((tipoCama) => {
      if (!tipoCama) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(tipoCama);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _tipoCama = extractData(req);

  repository.add(_tipoCama)
    .then((tipoCama) => {
      res.status(201).json(tipoCama);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _tipoCama = extractData(req);

  repository.update(id, _tipoCama)
    .then((tipoCama) => {
      if (!tipoCama) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(tipoCama);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      tipCama: req.body.tipCama,
      itemListaTipoEstancia: req.body.itemListaTipoEstancia,
      descripcion: req.body.descripcion,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((tipoCama) => {
      if (!tipoCama) {
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
