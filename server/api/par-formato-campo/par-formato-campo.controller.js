const repository = require('./par-formato-campo.repository');

function getAll(req, res) {
  repository.get()
    .then((parFormatoCampos) => {
      res.json(parFormatoCampos);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((parFormatoCampo) => {
      if (!parFormatoCampo) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(parFormatoCampo);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _parFormatoCampo = extractData(req);

  repository.add(_parFormatoCampo)
    .then((parFormatoCampo) => {
      res.status(201).json(parFormatoCampo);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _parFormatoCampo = extractData(req);

  repository.update(id, _parFormatoCampo)
    .then((parFormatoCampo) => {
      if (!parFormatoCampo) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(parFormatoCampo);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      longitudTexto: req.body.longitudTexto,
      formatoFecha: req.body.formatoFecha,
      rangoMinimo: req.body.rangoMinimo,
      rangoMaximo: req.body.rangoMaximo,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      observaciones: req.body.observaciones,
      expresionRegular: req.body.expresionRegular,
      esDecimal: req.body.esDecimal,
      esNegativo: req.body.esNegativo,
      descripcion: req.body.descripcion,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((parFormatoCampo) => {
      if (!parFormatoCampo) {
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
