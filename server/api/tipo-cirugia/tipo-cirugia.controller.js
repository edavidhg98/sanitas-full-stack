const repository = require('./tipo-cirugia.repository');

function getAll(req, res) {
  repository.get()
    .then((tipoCirugias) => {
      res.json(tipoCirugias);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((tipoCirugia) => {
      if (!tipoCirugia) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(tipoCirugia);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _tipoCirugia = extractData(req);

  repository.add(_tipoCirugia)
    .then((tipoCirugia) => {
      res.status(201).json(tipoCirugia);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _tipoCirugia = extractData(req);

  repository.update(id, _tipoCirugia)
    .then((tipoCirugia) => {
      if (!tipoCirugia) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(tipoCirugia);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      tipoCirugia: req.body.tipoCirugia,
      descripcion: req.body.descripcion,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
      itemListaEstadoCirugia: req.body.itemListaEstadoCirugia,
      idEntidad: req.body.idEntidad,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((tipoCirugia) => {
      if (!tipoCirugia) {
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
