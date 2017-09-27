import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuditoriaEstadoAdmisionService } from './auditoria-estado-admision.service';
import { AuditoriaEstadoAdmision } from './auditoria-estado-admision.model';


@Component({
  selector: 'app-auditoria-estado-admision-upsert',
  templateUrl: './auditoria-estado-admision-upsert.component.html'
})
export class AuditoriaEstadoAdmisionUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  auditoriaEstadoAdmision: AuditoriaEstadoAdmision;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private auditoriaEstadoAdmisionService: AuditoriaEstadoAdmisionService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.auditoriaEstadoAdmisionService.getById(id).subscribe(auditoriaEstadoAdmision => this.auditoriaEstadoAdmision = auditoriaEstadoAdmision);
      }
    });
  }

  save(formValues) {
    this.auditoriaEstadoAdmision = formValues;
    this.auditoriaEstadoAdmisionService.insert(this.auditoriaEstadoAdmision).subscribe(
      (response) => {
        this.router.navigate(['/entities/auditoria-estado-admision']);
      }
    );
  }

  update() {
    this.auditoriaEstadoAdmisionService.update(this.auditoriaEstadoAdmision._id, this.auditoriaEstadoAdmision).subscribe(
      (response) => {
        this.router.navigate(['/entities/auditoria-estado-admision']);
      }
    );
  }
}
