const repository = require('./sucursal.repository');

function getAll(req, res) {
  repository.get()
    .then((sucursals) => {
      res.json(sucursals);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((sucursal) => {
      if (!sucursal) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(sucursal);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _sucursal = extractData(req);

  repository.add(_sucursal)
    .then((sucursal) => {
      res.status(201).json(sucursal);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _sucursal = extractData(req);

  repository.update(id, _sucursal)
    .then((sucursal) => {
      if (!sucursal) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(sucursal);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      codSucur: req.body.codSucur,
      conFormulacion: req.body.conFormulacion,
      manCarAutCe: req.body.manCarAutCe,
      manWscitas: req.body.manWscitas,
      conAutRem: req.body.conAutRem,
      manCamPla: req.body.manCamPla,
      conForProc: req.body.conForProc,
      email: req.body.email,
      numDoc: req.body.numDoc,
      manConvemed: req.body.manConvemed,
      agfaMerge: req.body.agfaMerge,
      modFecAdm: req.body.modFecAdm,
      conRips: req.body.conRips,
      difhorservidor: req.body.difhorservidor,
      nivInstituc: req.body.nivInstituc,
      conCita: req.body.conCita,
      consecutivoNn: req.body.consecutivoNn,
      direccion: req.body.direccion,
      flagCenso: req.body.flagCenso,
      incPedIntefaceAct: req.body.incPedIntefaceAct,
      ordenarGenerico: req.body.ordenarGenerico,
      pideCtc: req.body.pideCtc,
      manCitaesp: req.body.manCitaesp,
      tieEspOb: req.body.tieEspOb,
      descripcion: req.body.descripcion,
      pedidoManual: req.body.pedidoManual,
      conCertifisoat: req.body.conCertifisoat,
      agfaMediweb: req.body.agfaMediweb,
      telefono: req.body.telefono,
      pedIntefaceAct: req.body.pedIntefaceAct,
      manRecAut: req.body.manRecAut,
      itemListaUnidadMedidaTiempoObservacion: req.body.itemListaUnidadMedidaTiempoObservacion,
      devIntefaceAct: req.body.devIntefaceAct,
      sucursalOsi: req.body.sucursalOsi,
      manRedondeo: req.body.manRedondeo,
      manPrecargos: req.body.manPrecargos,
      codGrabacionCt: req.body.codGrabacionCt,
      anulPedIntefaceAct: req.body.anulPedIntefaceAct,
      fechaRegistro: req.body.fechaRegistro,
      director: req.body.director,
      numConsult: req.body.numConsult,
      codigorips: req.body.codigorips,
      horMedioDia: req.body.horMedioDia,
      manInventario: req.body.manInventario,
      vlrRedondeo: req.body.vlrRedondeo,
      manTriage: req.body.manTriage,
      manEstadoPac: req.body.manEstadoPac,
      conCtacobro: req.body.conCtacobro,
      salMinLeg: req.body.salMinLeg,
      conCertifihos: req.body.conCertifihos,
      conAutoriza: req.body.conAutoriza,
      consecutivoMenorEdad: req.body.consecutivoMenorEdad,
      anulSinvalidar: req.body.anulSinvalidar,
      manUniAtePri: req.body.manUniAtePri,
      manProtocolos: req.body.manProtocolos,
      conDietas: req.body.conDietas,
      agfa: req.body.agfa,
      manConsAut: req.body.manConsAut,
      itemListaTipoDocumento: req.body.itemListaTipoDocumento,
      bloqPedidos: req.body.bloqPedidos,
      fax: req.body.fax,
      phd: req.body.phd,
      manEnfermeria: req.body.manEnfermeria,
      emailCtc: req.body.emailCtc,
      loginRegistro: req.body.loginRegistro,
      conProgciru: req.body.conProgciru,
      manDigiturno: req.body.manDigiturno,
      manCarAutUrg: req.body.manCarAutUrg,
      codInterno: req.body.codInterno,
      observaciones: req.body.observaciones,
      idCiudad: req.body.idCiudad,
      idPrestador: req.body.idPrestador,
      idEntidad: req.body.idEntidad,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((sucursal) => {
      if (!sucursal) {
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
