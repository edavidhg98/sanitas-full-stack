import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AuditoriaEstadoAdmision } from './auditoria-estado-admision.model';
import { AuditoriaEstadoAdmisionService } from './auditoria-estado-admision.service';

@Component({
  selector: 'app-auditoria-estado-admision-details',
  templateUrl: './auditoria-estado-admision-details.component.html'
})
export class AuditoriaEstadoAdmisionDetailsComponent implements OnInit {

  auditoriaEstadoAdmision: AuditoriaEstadoAdmision;

    constructor(
      private auditoriaEstadoAdmisionService: AuditoriaEstadoAdmisionService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.auditoriaEstadoAdmisionService.getById(id).subscribe(auditoriaEstadoAdmision => this.auditoriaEstadoAdmision = auditoriaEstadoAdmision);
      });
    }
  }
