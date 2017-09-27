const repository = require('./detalle-cargos-pendientes.repository');

function getAll(req, res) {
  repository.get()
    .then((detalleCargosPendientess) => {
      res.json(detalleCargosPendientess);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((detalleCargosPendientes) => {
      if (!detalleCargosPendientes) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(detalleCargosPendientes);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _detalleCargosPendientes = extractData(req);

  repository.add(_detalleCargosPendientes)
    .then((detalleCargosPendientes) => {
      res.status(201).json(detalleCargosPendientes);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _detalleCargosPendientes = extractData(req);

  repository.update(id, _detalleCargosPendientes)
    .then((detalleCargosPendientes) => {
      if (!detalleCargosPendientes) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(detalleCargosPendientes);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      secuencia: req.body.secuencia,
      cantidadEntregada: req.body.cantidadEntregada,
      itemListaEstadoEnvio: req.body.itemListaEstadoEnvio,
      durante: req.body.durante,
      cantidadSolicita: req.body.cantidadSolicita,
      porPocentaje: req.body.porPocentaje,
      cantidadAplicada: req.body.cantidadAplicada,
      idProducto: req.body.idProducto,
      cantidadSuministrada: req.body.cantidadSuministrada,
      atcSolicitado: req.body.atcSolicitado,
      horaDespacho: req.body.horaDespacho,
      fechaRegistro: req.body.fechaRegistro,
      minutoDespacho: req.body.minutoDespacho,
      confirmacionManual: req.body.confirmacionManual,
      medMollier: req.body.medMollier,
      porIncremento: req.body.porIncremento,
      loginRegistro: req.body.loginRegistro,
      fechaDespacho: req.body.fechaDespacho,
      loginCancel: req.body.loginCancel,
      itemListaEstado: req.body.itemListaEstado,
      valCompra: req.body.valCompra,
      cantidadDespachada: req.body.cantidadDespachada,
      itemListaTipoCargo: req.body.itemListaTipoCargo,
      numeroAutorizacion: req.body.numeroAutorizacion,
      numPeddevuelto: req.body.numPeddevuelto,
      presentacion: req.body.presentacion,
      observaciones: req.body.observaciones,
      itemListaMedidaMedicamento: req.body.itemListaMedidaMedicamento,
      cantidadRecibida: req.body.cantidadRecibida,
      idCargosPendientes: req.body.idCargosPendientes,
      idEntidad: req.body.idEntidad,
      idMotivo: req.body.idMotivo,
      idProcedimiento: req.body.idProcedimiento,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((detalleCargosPendientes) => {
      if (!detalleCargosPendientes) {
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
