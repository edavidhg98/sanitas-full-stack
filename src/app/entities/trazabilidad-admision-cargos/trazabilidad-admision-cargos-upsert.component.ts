import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TrazabilidadAdmisionCargosService } from './trazabilidad-admision-cargos.service';
import { TrazabilidadAdmisionCargos } from './trazabilidad-admision-cargos.model';

import { TrazabilidadAdmisionService } from '../trazabilidad-admision/trazabilidad-admision.service';
import { TrazabilidadAdmision } from '../trazabilidad-admision/trazabilidad-admision.model';

@Component({
  selector: 'app-trazabilidad-admision-cargos-upsert',
  templateUrl: './trazabilidad-admision-cargos-upsert.component.html'
})
export class TrazabilidadAdmisionCargosUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  trazabilidadAdmisionCargos: TrazabilidadAdmisionCargos;

  /** Many-To-One Relationships */
  trazabilidadAdmisions: TrazabilidadAdmision[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private trazabilidadAdmisionCargosService: TrazabilidadAdmisionCargosService,
    private trazabilidadAdmisionService: TrazabilidadAdmisionService,
  ) { }

  ngOnInit() {
    this.trazabilidadAdmisionService.getAll().subscribe(trazabilidadAdmisions => this.trazabilidadAdmisions = trazabilidadAdmisions);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.trazabilidadAdmisionCargosService.getById(id).subscribe(trazabilidadAdmisionCargos => this.trazabilidadAdmisionCargos = trazabilidadAdmisionCargos);
      }
    });
  }

  save(formValues) {
    this.trazabilidadAdmisionCargos = formValues;
    this.trazabilidadAdmisionCargosService.insert(this.trazabilidadAdmisionCargos).subscribe(
      (response) => {
        this.router.navigate(['/entities/trazabilidad-admision-cargos']);
      }
    );
  }

  update() {
    this.trazabilidadAdmisionCargosService.update(this.trazabilidadAdmisionCargos._id, this.trazabilidadAdmisionCargos).subscribe(
      (response) => {
        this.router.navigate(['/entities/trazabilidad-admision-cargos']);
      }
    );
  }
}
