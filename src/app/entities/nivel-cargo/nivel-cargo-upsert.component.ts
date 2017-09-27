import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NivelCargoService } from './nivel-cargo.service';
import { NivelCargo } from './nivel-cargo.model';

import { SucursalEntidadService } from '../sucursal-entidad/sucursal-entidad.service';
import { SucursalEntidad } from '../sucursal-entidad/sucursal-entidad.model';
import { TipoAdmisionService } from '../tipo-admision/tipo-admision.service';
import { TipoAdmision } from '../tipo-admision/tipo-admision.model';

@Component({
  selector: 'app-nivel-cargo-upsert',
  templateUrl: './nivel-cargo-upsert.component.html'
})
export class NivelCargoUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  nivelCargo: NivelCargo;

  /** Many-To-One Relationships */
  sucursalEntidads: SucursalEntidad[];
  tipoAdmisions: TipoAdmision[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private nivelCargoService: NivelCargoService,
    private sucursalEntidadService: SucursalEntidadService,
    private tipoAdmisionService: TipoAdmisionService,
  ) { }

  ngOnInit() {
    this.sucursalEntidadService.getAll().subscribe(sucursalEntidads => this.sucursalEntidads = sucursalEntidads);
    this.tipoAdmisionService.getAll().subscribe(tipoAdmisions => this.tipoAdmisions = tipoAdmisions);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.nivelCargoService.getById(id).subscribe(nivelCargo => this.nivelCargo = nivelCargo);
      }
    });
  }

  save(formValues) {
    this.nivelCargo = formValues;
    this.nivelCargoService.insert(this.nivelCargo).subscribe(
      (response) => {
        this.router.navigate(['/entities/nivel-cargo']);
      }
    );
  }

  update() {
    this.nivelCargoService.update(this.nivelCargo._id, this.nivelCargo).subscribe(
      (response) => {
        this.router.navigate(['/entities/nivel-cargo']);
      }
    );
  }
}
