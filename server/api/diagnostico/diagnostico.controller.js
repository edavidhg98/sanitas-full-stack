const repository = require('./diagnostico.repository');

function getAll(req, res) {
  repository.get()
    .then((diagnosticos) => {
      res.json(diagnosticos);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((diagnostico) => {
      if (!diagnostico) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(diagnostico);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _diagnostico = extractData(req);

  repository.add(_diagnostico)
    .then((diagnostico) => {
      res.status(201).json(diagnostico);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _diagnostico = extractData(req);

  repository.update(id, _diagnostico)
    .then((diagnostico) => {
      if (!diagnostico) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(diagnostico);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      diagnost: req.body.diagnost,
      edaFin: req.body.edaFin,
      descripcion: req.body.descripcion,
      loginRegistro: req.body.loginRegistro,
      edaIni: req.body.edaIni,
      itemListaEstadoDiagnostico: req.body.itemListaEstadoDiagnostico,
      itemListaClasificacion: req.body.itemListaClasificacion,
      cie10Rips: req.body.cie10Rips,
      itemListaGenero: req.body.itemListaGenero,
      indicetexto: req.body.indicetexto,
      mortal: req.body.mortal,
      fechaRegistro: req.body.fechaRegistro,
      observaciones: req.body.observaciones,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((diagnostico) => {
      if (!diagnostico) {
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
