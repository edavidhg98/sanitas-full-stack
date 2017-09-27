import { Component, OnInit, Inject } from '@angular/core';

import { AuditoriaEstadoAdmisionService } from './auditoria-estado-admision.service';
import { AuditoriaEstadoAdmision } from './auditoria-estado-admision.model';

@Component({
  selector: 'app-auditoria-estado-admision',
  template: `
              <div class="container-fluid">
                <app-auditoria-estado-admision-list [auditoriaEstadoAdmisions]="auditoriaEstadoAdmisions"></app-auditoria-estado-admision-list>
              </div>
            `
})
export class AuditoriaEstadoAdmisionComponent implements OnInit {

  auditoriaEstadoAdmisions: AuditoriaEstadoAdmision[] = [];

  constructor(private auditoriaEstadoAdmisionService: AuditoriaEstadoAdmisionService) {

  }

  ngOnInit() {
    this.auditoriaEstadoAdmisionService.getAll().subscribe(auditoriaEstadoAdmisions => this.auditoriaEstadoAdmisions = auditoriaEstadoAdmisions);
  }
}
