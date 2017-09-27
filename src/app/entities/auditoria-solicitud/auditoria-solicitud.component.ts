import { Component, OnInit, Inject } from '@angular/core';

import { AuditoriaSolicitudService } from './auditoria-solicitud.service';
import { AuditoriaSolicitud } from './auditoria-solicitud.model';

@Component({
  selector: 'app-auditoria-solicitud',
  template: `
              <div class="container-fluid">
                <app-auditoria-solicitud-list [auditoriaSolicituds]="auditoriaSolicituds"></app-auditoria-solicitud-list>
              </div>
            `
})
export class AuditoriaSolicitudComponent implements OnInit {

  auditoriaSolicituds: AuditoriaSolicitud[] = [];

  constructor(private auditoriaSolicitudService: AuditoriaSolicitudService) {

  }

  ngOnInit() {
    this.auditoriaSolicitudService.getAll().subscribe(auditoriaSolicituds => this.auditoriaSolicituds = auditoriaSolicituds);
  }
}
