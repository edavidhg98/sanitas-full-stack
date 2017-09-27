const repository = require('./cargos-pendientes.repository');

function getAll(req, res) {
  repository.get()
    .then((cargosPendientess) => {
      res.json(cargosPendientess);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((cargosPendientes) => {
      if (!cargosPendientes) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(cargosPendientes);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _cargosPendientes = extractData(req);

  repository.add(_cargosPendientes)
    .then((cargosPendientes) => {
      res.status(201).json(cargosPendientes);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _cargosPendientes = extractData(req);

  repository.update(id, _cargosPendientes)
    .then((cargosPendientes) => {
      if (!cargosPendientes) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(cargosPendientes);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      idAdmision: req.body.idAdmision,
      fechaRegistro: req.body.fechaRegistro,
      manual: req.body.manual,
      conSolicitu: req.body.conSolicitu,
      itemListaTipoPedido: req.body.itemListaTipoPedido,
      idMedicoTiene: req.body.idMedicoTiene,
      observaciones: req.body.observaciones,
      consecutivoManual: req.body.consecutivoManual,
      horaPedido: req.body.horaPedido,
      fechaDespacho: req.body.fechaDespacho,
      horaDespacho: req.body.horaDespacho,
      idCentroCosto: req.body.idCentroCosto,
      itemListaEstado: req.body.itemListaEstado,
      minutoDespacho: req.body.minutoDespacho,
      idMedico: req.body.idMedico,
      loginDespacho: req.body.loginDespacho,
      loginPedido: req.body.loginPedido,
      minutoPedido: req.body.minutoPedido,
      idCentroCostoDestino: req.body.idCentroCostoDestino,
      fechaPedido: req.body.fechaPedido,
      idPrioridad: req.body.idPrioridad,
      idSucursal: req.body.idSucursal,
      idEntidad: req.body.idEntidad,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((cargosPendientes) => {
      if (!cargosPendientes) {
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
