const repository = require('./procedimiento.repository');

function getAll(req, res) {
  repository.get()
    .then((procedimientos) => {
      res.json(procedimientos);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((procedimiento) => {
      if (!procedimiento) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(procedimiento);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _procedimiento = extractData(req);

  repository.add(_procedimiento)
    .then((procedimiento) => {
      res.status(201).json(procedimiento);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _procedimiento = extractData(req);

  repository.update(id, _procedimiento)
    .then((procedimiento) => {
      if (!procedimiento) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(procedimiento);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      procedim: req.body.procedim,
      porCopago: req.body.porCopago,
      factores: req.body.factores,
      osi: req.body.osi,
      aliasCups: req.body.aliasCups,
      fechaRegistro: req.body.fechaRegistro,
      codSispro: req.body.codSispro,
      tieAdecuacion: req.body.tieAdecuacion,
      manCopago: req.body.manCopago,
      biopsia: req.body.biopsia,
      injertos: req.body.injertos,
      codigoOsi: req.body.codigoOsi,
      tieDuracion: req.body.tieDuracion,
      aliasIss: req.body.aliasIss,
      itemListaSexo: req.body.itemListaSexo,
      uvr: req.body.uvr,
      observaciones: req.body.observaciones,
      itemListaTipoBilateralidad: req.body.itemListaTipoBilateralidad,
      desSispro: req.body.desSispro,
      autPaciente: req.body.autPaciente,
      ordenahc: req.body.ordenahc,
      edadIni: req.body.edadIni,
      idEspecialidadInterconsulta: req.body.idEspecialidadInterconsulta,
      loginRegistro: req.body.loginRegistro,
      descripcion: req.body.descripcion,
      edadFin: req.body.edadFin,
      finalidad: req.body.finalidad,
      categoria: req.body.categoria,
      patologia: req.body.patologia,
      forConsent: req.body.forConsent,
      tieLimpieza: req.body.tieLimpieza,
      alias: req.body.alias,
      bilateral: req.body.bilateral,
      clase: req.body.clase,
      flagPos: req.body.flagPos,
      obsConsent: req.body.obsConsent,
      obsSis: req.body.obsSis,
      nivProced: req.body.nivProced,
      itemListaTipoProcedimiento: req.body.itemListaTipoProcedimiento,
      idSubGrupoProcedimiento: req.body.idSubGrupoProcedimiento,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((procedimiento) => {
      if (!procedimiento) {
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
