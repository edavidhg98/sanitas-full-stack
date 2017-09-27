const repository = require('./pedidos.repository');

function getAll(req, res) {
  repository.get()
    .then((pedidoss) => {
      res.json(pedidoss);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((pedidos) => {
      if (!pedidos) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(pedidos);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _pedidos = extractData(req);

  repository.add(_pedidos)
    .then((pedidos) => {
      res.status(201).json(pedidos);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _pedidos = extractData(req);

  repository.update(id, _pedidos)
    .then((pedidos) => {
      if (!pedidos) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(pedidos);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      idAdmision: req.body.idAdmision,
      minutoPedido: req.body.minutoPedido,
      fechaRegistro: req.body.fechaRegistro,
      idCentroCostoDestino: req.body.idCentroCostoDestino,
      idMedicoAtiende: req.body.idMedicoAtiende,
      itemListaEstadoPedido: req.body.itemListaEstadoPedido,
      consecutivoManual: req.body.consecutivoManual,
      fechaDespacho: req.body.fechaDespacho,
      horaPedido: req.body.horaPedido,
      loginDespacho: req.body.loginDespacho,
      horaDespacho: req.body.horaDespacho,
      observaciones: req.body.observaciones,
      loginPedido: req.body.loginPedido,
      pedidoManual: req.body.pedidoManual,
      itemListaTipoPedido: req.body.itemListaTipoPedido,
      idCentroCosto: req.body.idCentroCosto,
      consecutivoSolicitud: req.body.consecutivoSolicitud,
      fechaPedido: req.body.fechaPedido,
      minutoDespacho: req.body.minutoDespacho,
      idPrioridad: req.body.idPrioridad,
      idSucursal: req.body.idSucursal,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((pedidos) => {
      if (!pedidos) {
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
