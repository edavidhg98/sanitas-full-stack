import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DetalleCargosPendientesService } from './detalle-cargos-pendientes.service';
import { DetalleCargosPendientes } from './detalle-cargos-pendientes.model';

import { CargosPendientesService } from '../cargos-pendientes/cargos-pendientes.service';
import { CargosPendientes } from '../cargos-pendientes/cargos-pendientes.model';
import { EntidadService } from '../entidad/entidad.service';
import { Entidad } from '../entidad/entidad.model';
import { MotivoService } from '../motivo/motivo.service';
import { Motivo } from '../motivo/motivo.model';
import { ProcedimientoService } from '../procedimiento/procedimiento.service';
import { Procedimiento } from '../procedimiento/procedimiento.model';

@Component({
  selector: 'app-detalle-cargos-pendientes-upsert',
  templateUrl: './detalle-cargos-pendientes-upsert.component.html'
})
export class DetalleCargosPendientesUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  detalleCargosPendientes: DetalleCargosPendientes;

  /** Many-To-One Relationships */
  cargosPendientess: CargosPendientes[];
  entidads: Entidad[];
  motivos: Motivo[];
  procedimientos: Procedimiento[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private detalleCargosPendientesService: DetalleCargosPendientesService,
    private cargosPendientesService: CargosPendientesService,
    private entidadService: EntidadService,
    private motivoService: MotivoService,
    private procedimientoService: ProcedimientoService,
  ) { }

  ngOnInit() {
    this.cargosPendientesService.getAll().subscribe(cargosPendientess => this.cargosPendientess = cargosPendientess);
    this.entidadService.getAll().subscribe(entidads => this.entidads = entidads);
    this.motivoService.getAll().subscribe(motivos => this.motivos = motivos);
    this.procedimientoService.getAll().subscribe(procedimientos => this.procedimientos = procedimientos);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.detalleCargosPendientesService.getById(id).subscribe(detalleCargosPendientes => this.detalleCargosPendientes = detalleCargosPendientes);
      }
    });
  }

  save(formValues) {
    this.detalleCargosPendientes = formValues;
    this.detalleCargosPendientesService.insert(this.detalleCargosPendientes).subscribe(
      (response) => {
        this.router.navigate(['/entities/detalle-cargos-pendientes']);
      }
    );
  }

  update() {
    this.detalleCargosPendientesService.update(this.detalleCargosPendientes._id, this.detalleCargosPendientes).subscribe(
      (response) => {
        this.router.navigate(['/entities/detalle-cargos-pendientes']);
      }
    );
  }
}
