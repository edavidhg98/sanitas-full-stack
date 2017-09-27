const repository = require('./sucursal-entidad.repository');

function getAll(req, res) {
  repository.get()
    .then((sucursalEntidads) => {
      res.json(sucursalEntidads);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((sucursalEntidad) => {
      if (!sucursalEntidad) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(sucursalEntidad);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _sucursalEntidad = extractData(req);

  repository.add(_sucursalEntidad)
    .then((sucursalEntidad) => {
      res.status(201).json(sucursalEntidad);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _sucursalEntidad = extractData(req);

  repository.update(id, _sucursalEntidad)
    .then((sucursalEntidad) => {
      if (!sucursalEntidad) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(sucursalEntidad);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      porcentajeMinAnticipo: req.body.porcentajeMinAnticipo,
      manejaPenalizaInasistencia: req.body.manejaPenalizaInasistencia,
      cantidadHorasObservacion: req.body.cantidadHorasObservacion,
      observaciones: req.body.observaciones,
      cantidadMinutosObservacion: req.body.cantidadMinutosObservacion,
      itemListaTipoUsuario: req.body.itemListaTipoUsuario,
      manejaPaqueteUrgencia: req.body.manejaPaqueteUrgencia,
      usaAfirma: req.body.usaAfirma,
      idItemListaEstadocyfCatalogo: req.body.idItemListaEstadocyfCatalogo,
      manejaDecimales: req.body.manejaDecimales,
      manejaPenalizaCancelacion: req.body.manejaPenalizaCancelacion,
      idItemListaEstadocyf: req.body.idItemListaEstadocyf,
      minejaTiempoCancelaCita: req.body.minejaTiempoCancelaCita,
      manejaPyp: req.body.manejaPyp,
      email: req.body.email,
      horaGeneraReporte: req.body.horaGeneraReporte,
      loginRegistro: req.body.loginRegistro,
      manejaRedondeo: req.body.manejaRedondeo,
      verificaEstadoPac: req.body.verificaEstadoPac,
      fechaRegistro: req.body.fechaRegistro,
      verificaFoto: req.body.verificaFoto,
      porcentajeAdicionalAnticipo: req.body.porcentajeAdicionalAnticipo,
      itemListaTipoVale: req.body.itemListaTipoVale,
      itemListaTipoManejoHoraObs: req.body.itemListaTipoManejoHoraObs,
      restringeAdmision: req.body.restringeAdmision,
      valorRedondeo: req.body.valorRedondeo,
      idEncabezadoCatalogo: req.body.idEncabezadoCatalogo,
      idMoneda: req.body.idMoneda,
      idSucursal: req.body.idSucursal,
      idEntidad: req.body.idEntidad,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((sucursalEntidad) => {
      if (!sucursalEntidad) {
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
