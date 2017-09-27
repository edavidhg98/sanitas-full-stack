import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { EntidadAdmisionService } from './entidad-admision.service';
import { EntidadAdmision } from './entidad-admision.model';

import { SucursalService } from '../sucursal/sucursal.service';
import { Sucursal } from '../sucursal/sucursal.model';
import { EntidadService } from '../entidad/entidad.service';
import { Entidad } from '../entidad/entidad.model';

@Component({
  selector: 'app-entidad-admision-upsert',
  templateUrl: './entidad-admision-upsert.component.html'
})
export class EntidadAdmisionUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  entidadAdmision: EntidadAdmision;

  /** Many-To-One Relationships */
  sucursals: Sucursal[];
  entidads: Entidad[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private entidadAdmisionService: EntidadAdmisionService,
    private sucursalService: SucursalService,
    private entidadService: EntidadService,
  ) { }

  ngOnInit() {
    this.sucursalService.getAll().subscribe(sucursals => this.sucursals = sucursals);
    this.entidadService.getAll().subscribe(entidads => this.entidads = entidads);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.entidadAdmisionService.getById(id).subscribe(entidadAdmision => this.entidadAdmision = entidadAdmision);
      }
    });
  }

  save(formValues) {
    this.entidadAdmision = formValues;
    this.entidadAdmisionService.insert(this.entidadAdmision).subscribe(
      (response) => {
        this.router.navigate(['/entities/entidad-admision']);
      }
    );
  }

  update() {
    this.entidadAdmisionService.update(this.entidadAdmision._id, this.entidadAdmision).subscribe(
      (response) => {
        this.router.navigate(['/entities/entidad-admision']);
      }
    );
  }
}
