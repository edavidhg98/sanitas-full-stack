const repository = require('./subconcepto.repository');

function getAll(req, res) {
  repository.get()
    .then((subconceptos) => {
      res.json(subconceptos);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((subconcepto) => {
      if (!subconcepto) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(subconcepto);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _subconcepto = extractData(req);

  repository.add(_subconcepto)
    .then((subconcepto) => {
      res.status(201).json(subconcepto);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _subconcepto = extractData(req);

  repository.update(id, _subconcepto)
    .then((subconcepto) => {
      if (!subconcepto) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(subconcepto);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      idConcepto: req.body.idConcepto,
      idSubConcepto: req.body.idSubConcepto,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
      idPrestador: req.body.idPrestador,
      idMotivo: req.body.idMotivo,
      idTipoAdmision: req.body.idTipoAdmision,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((subconcepto) => {
      if (!subconcepto) {
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
