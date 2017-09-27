import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TarifaVacunacionService } from './tarifa-vacunacion.service';
import { TarifaVacunacion } from './tarifa-vacunacion.model';

import { SucursalEntidadService } from '../sucursal-entidad/sucursal-entidad.service';
import { SucursalEntidad } from '../sucursal-entidad/sucursal-entidad.model';
import { TipoTarifaVacunacionService } from '../tipo-tarifa-vacunacion/tipo-tarifa-vacunacion.service';
import { TipoTarifaVacunacion } from '../tipo-tarifa-vacunacion/tipo-tarifa-vacunacion.model';
import { VacunasService } from '../vacunas/vacunas.service';
import { Vacunas } from '../vacunas/vacunas.model';

@Component({
  selector: 'app-tarifa-vacunacion-upsert',
  templateUrl: './tarifa-vacunacion-upsert.component.html'
})
export class TarifaVacunacionUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  tarifaVacunacion: TarifaVacunacion;

  /** Many-To-One Relationships */
  sucursalEntidads: SucursalEntidad[];
  tipoTarifaVacunacions: TipoTarifaVacunacion[];
  vacunass: Vacunas[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private tarifaVacunacionService: TarifaVacunacionService,
    private sucursalEntidadService: SucursalEntidadService,
    private tipoTarifaVacunacionService: TipoTarifaVacunacionService,
    private vacunasService: VacunasService,
  ) { }

  ngOnInit() {
    this.sucursalEntidadService.getAll().subscribe(sucursalEntidads => this.sucursalEntidads = sucursalEntidads);
    this.tipoTarifaVacunacionService.getAll().subscribe(tipoTarifaVacunacions => this.tipoTarifaVacunacions = tipoTarifaVacunacions);
    this.vacunasService.getAll().subscribe(vacunass => this.vacunass = vacunass);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.tarifaVacunacionService.getById(id).subscribe(tarifaVacunacion => this.tarifaVacunacion = tarifaVacunacion);
      }
    });
  }

  save(formValues) {
    this.tarifaVacunacion = formValues;
    this.tarifaVacunacionService.insert(this.tarifaVacunacion).subscribe(
      (response) => {
        this.router.navigate(['/entities/tarifa-vacunacion']);
      }
    );
  }

  update() {
    this.tarifaVacunacionService.update(this.tarifaVacunacion._id, this.tarifaVacunacion).subscribe(
      (response) => {
        this.router.navigate(['/entities/tarifa-vacunacion']);
      }
    );
  }
}
