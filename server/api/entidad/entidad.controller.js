const repository = require('./entidad.repository');

function getAll(req, res) {
  repository.get()
    .then((entidads) => {
      res.json(entidads);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((entidad) => {
      if (!entidad) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(entidad);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _entidad = extractData(req);

  repository.add(_entidad)
    .then((entidad) => {
      res.status(201).json(entidad);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _entidad = extractData(req);

  repository.update(id, _entidad)
    .then((entidad) => {
      if (!entidad) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(entidad);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      entidad: req.body.entidad,
      manPaqNoQuirur: req.body.manPaqNoQuirur,
      fechaConvenio: req.body.fechaConvenio,
      numCortesMes: req.body.numCortesMes,
      tiempoCubOdontologico: req.body.tiempoCubOdontologico,
      observaciones: req.body.observaciones,
      manWebNuevo: req.body.manWebNuevo,
      direccion: req.body.direccion,
      topLiqCirugia: req.body.topLiqCirugia,
      valorMaximoLiquidacion: req.body.valorMaximoLiquidacion,
      loginRegistro: req.body.loginRegistro,
      montoxproce: req.body.montoxproce,
      manConvMed: req.body.manConvMed,
      manejaPorcentajeIncremento: req.body.manejaPorcentajeIncremento,
      responsable: req.body.responsable,
      manprogcronicos: req.body.manprogcronicos,
      pedAutoriza: req.body.pedAutoriza,
      manejaCorteAnual: req.body.manejaCorteAnual,
      manTopes: req.body.manTopes,
      manNuevaAfiliacion: req.body.manNuevaAfiliacion,
      itemListaUnidadMedidaUrgencia: req.body.itemListaUnidadMedidaUrgencia,
      codBarrDigCtrl: req.body.codBarrDigCtrl,
      itemListaUnidadMedidaExterna: req.body.itemListaUnidadMedidaExterna,
      codBarrasCarnet: req.body.codBarrasCarnet,
      nroMedFor: req.body.nroMedFor,
      bdEstadoExt: req.body.bdEstadoExt,
      itemListaUnidadMedidaOdontologia: req.body.itemListaUnidadMedidaOdontologia,
      manTopPor: req.body.manTopPor,
      caduForMedicame: req.body.caduForMedicame,
      manejaCopago: req.body.manejaCopago,
      maxentregasformulacronicos: req.body.maxentregasformulacronicos,
      manejaProteccionDatos: req.body.manejaProteccionDatos,
      planobh: req.body.planobh,
      conSinConv: req.body.conSinConv,
      tiempoCubVez: req.body.tiempoCubVez,
      caduForProced: req.body.caduForProced,
      numDoc: req.body.numDoc,
      confirmacionManual: req.body.confirmacionManual,
      manejaMedFamiliar: req.body.manejaMedFamiliar,
      email: req.body.email,
      vlrTopPor: req.body.vlrTopPor,
      fax: req.body.fax,
      fechaRegistro: req.body.fechaRegistro,
      cargos: req.body.cargos,
      tiempoObserva: req.body.tiempoObserva,
      verEstadoPac: req.body.verEstadoPac,
      itemListaUnidadMedidaPrimeraVez: req.body.itemListaUnidadMedidaPrimeraVez,
      itemListaUnidadMedidaObservacion: req.body.itemListaUnidadMedidaObservacion,
      tiempoCubUrg: req.body.tiempoCubUrg,
      telefono: req.body.telefono,
      dirIpEntidad: req.body.dirIpEntidad,
      itemListaTipoUsuario: req.body.itemListaTipoUsuario,
      valorMinimoLiquidacion: req.body.valorMinimoLiquidacion,
      manejaRecaudo: req.body.manejaRecaudo,
      manejaCorte: req.body.manejaCorte,
      noCargos: req.body.noCargos,
      caduForProcedqx: req.body.caduForProcedqx,
      convenioInter: req.body.convenioInter,
      codBarrasDoc: req.body.codBarrasDoc,
      pedAutMedicame: req.body.pedAutMedicame,
      manejaCapitacion: req.body.manejaCapitacion,
      nivValPrimeravez: req.body.nivValPrimeravez,
      entidadOsi: req.body.entidadOsi,
      itemListaTipoDocumento: req.body.itemListaTipoDocumento,
      itemListaTipoEntidad: req.body.itemListaTipoEntidad,
      manCapitacionodo: req.body.manCapitacionodo,
      tiempoCubExt: req.body.tiempoCubExt,
      numDiascalend: req.body.numDiascalend,
      manCita: req.body.manCita,
      codInterno: req.body.codInterno,
      descripcion: req.body.descripcion,
      idCiudad: req.body.idCiudad,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((entidad) => {
      if (!entidad) {
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
