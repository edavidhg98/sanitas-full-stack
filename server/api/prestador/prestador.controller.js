const repository = require('./prestador.repository');

function getAll(req, res) {
  repository.get()
    .then((prestadors) => {
      res.json(prestadors);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((prestador) => {
      if (!prestador) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(prestador);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _prestador = extractData(req);

  repository.add(_prestador)
    .then((prestador) => {
      res.status(201).json(prestador);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _prestador = extractData(req);

  repository.update(id, _prestador)
    .then((prestador) => {
      if (!prestador) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(prestador);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      codPreSgs: req.body.codPreSgs,
      manPines: req.body.manPines,
      consecutivoNn: req.body.consecutivoNn,
      manConAutMenedad: req.body.manConAutMenedad,
      itemListaTipoDocumento: req.body.itemListaTipoDocumento,
      observaciones: req.body.observaciones,
      tipDocdefec: req.body.tipDocdefec,
      conAnticipo: req.body.conAnticipo,
      manAnticipoManual: req.body.manAnticipoManual,
      tagDocumento: req.body.tagDocumento,
      manVolantes: req.body.manVolantes,
      manConLocMenedad: req.body.manConLocMenedad,
      codInterno: req.body.codInterno,
      manRips: req.body.manRips,
      proceanalitica: req.body.proceanalitica,
      moneda: req.body.moneda,
      auditoria: req.body.auditoria,
      manInterContab: req.body.manInterContab,
      director: req.body.director,
      manHisCli: req.body.manHisCli,
      concconcepcc: req.body.concconcepcc,
      telefono: req.body.telefono,
      imagen: req.body.imagen,
      direccion: req.body.direccion,
      itemListaUnidadMedidaTiempo: req.body.itemListaUnidadMedidaTiempo,
      fax: req.body.fax,
      numDoc: req.body.numDoc,
      descripcion: req.body.descripcion,
      consecutivoMenorEdad: req.body.consecutivoMenorEdad,
      codProgIfco: req.body.codProgIfco,
      maxintentosPines: req.body.maxintentosPines,
      manConLocNn: req.body.manConLocNn,
      fechaRegistro: req.body.fechaRegistro,
      tieConUrg: req.body.tieConUrg,
      codOrigen: req.body.codOrigen,
      comportamiento: req.body.comportamiento,
      controlaversion: req.body.controlaversion,
      loginRegistro: req.body.loginRegistro,
      idCiudad: req.body.idCiudad,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((prestador) => {
      if (!prestador) {
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
