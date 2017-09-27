const repository = require('./medico-sucursal.repository');

function getAll(req, res) {
  repository.get()
    .then((medicoSucursals) => {
      res.json(medicoSucursals);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((medicoSucursal) => {
      if (!medicoSucursal) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(medicoSucursal);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _medicoSucursal = extractData(req);

  repository.add(_medicoSucursal)
    .then((medicoSucursal) => {
      res.status(201).json(medicoSucursal);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _medicoSucursal = extractData(req);

  repository.update(id, _medicoSucursal)
    .then((medicoSucursal) => {
      if (!medicoSucursal) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(medicoSucursal);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      idSucursal: req.body.idSucursal,
      idConceptoPorcentaje: req.body.idConceptoPorcentaje,
      itemListaTipoDescuento: req.body.itemListaTipoDescuento,
      idConceptoMinimoMensual: req.body.idConceptoMinimoMensual,
      alquilerHora: req.body.alquilerHora,
      idConceptoAlquiler: req.body.idConceptoAlquiler,
      direccionCasaMedico: req.body.direccionCasaMedico,
      itemListaAlquiler: req.body.itemListaAlquiler,
      direccionConsultorioMedico: req.body.direccionConsultorioMedico,
      fechaRegistro: req.body.fechaRegistro,
      loginRegistro: req.body.loginRegistro,
      itemListaTipoCargo: req.body.itemListaTipoCargo,
      idEspecialidad: req.body.idEspecialidad,
      observaciones: req.body.observaciones,
      itemListaSueldo: req.body.itemListaSueldo,
      fechaFinalRemision: req.body.fechaFinalRemision,
      asociacion: req.body.asociacion,
      itemListaTipoServicioConcertado: req.body.itemListaTipoServicioConcertado,
      alquilerAnual: req.body.alquilerAnual,
      alquilerSemanal: req.body.alquilerSemanal,
      idConceptoSueldo: req.body.idConceptoSueldo,
      itemListaEstadoMedicoSucursal: req.body.itemListaEstadoMedicoSucursal,
      valorMinimoMensual: req.body.valorMinimoMensual,
      telefonoCasaMedico: req.body.telefonoCasaMedico,
      itemListaMinimoAnual: req.body.itemListaMinimoAnual,
      valorMinimoAnual: req.body.valorMinimoAnual,
      valorSueldo: req.body.valorSueldo,
      idConceptoMinimoAnual: req.body.idConceptoMinimoAnual,
      valorPorcentaje: req.body.valorPorcentaje,
      irpf: req.body.irpf,
      itemListaNivelMedico: req.body.itemListaNivelMedico,
      fechaInicialRemision: req.body.fechaInicialRemision,
      itemListaMinimoMensual: req.body.itemListaMinimoMensual,
      alquilerMensual: req.body.alquilerMensual,
      telefonoConsultorioMedico: req.body.telefonoConsultorioMedico,
      idMedico: req.body.idMedico,
      idMedicoReemplazo: req.body.idMedicoReemplazo,
      itemListaUrgencias: req.body.itemListaUrgencias,
      itemListaReemplazo: req.body.itemListaReemplazo,
      ivaArriendo: req.body.ivaArriendo,
      itemListaTipoProveedor: req.body.itemListaTipoProveedor,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((medicoSucursal) => {
      if (!medicoSucursal) {
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
