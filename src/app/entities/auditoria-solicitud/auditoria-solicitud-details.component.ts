import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AuditoriaSolicitud } from './auditoria-solicitud.model';
import { AuditoriaSolicitudService } from './auditoria-solicitud.service';

@Component({
  selector: 'app-auditoria-solicitud-details',
  templateUrl: './auditoria-solicitud-details.component.html'
})
export class AuditoriaSolicitudDetailsComponent implements OnInit {

  auditoriaSolicitud: AuditoriaSolicitud;

    constructor(
      private auditoriaSolicitudService: AuditoriaSolicitudService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.auditoriaSolicitudService.getById(id).subscribe(auditoriaSolicitud => this.auditoriaSolicitud = auditoriaSolicitud);
      });
    }
  }
