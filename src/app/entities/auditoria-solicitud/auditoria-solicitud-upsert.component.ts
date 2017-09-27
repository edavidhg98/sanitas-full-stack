import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuditoriaSolicitudService } from './auditoria-solicitud.service';
import { AuditoriaSolicitud } from './auditoria-solicitud.model';

import { ProcedimientoService } from '../procedimiento/procedimiento.service';
import { Procedimiento } from '../procedimiento/procedimiento.model';

@Component({
  selector: 'app-auditoria-solicitud-upsert',
  templateUrl: './auditoria-solicitud-upsert.component.html'
})
export class AuditoriaSolicitudUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  auditoriaSolicitud: AuditoriaSolicitud;

  /** Many-To-One Relationships */
  procedimientos: Procedimiento[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private auditoriaSolicitudService: AuditoriaSolicitudService,
    private procedimientoService: ProcedimientoService,
  ) { }

  ngOnInit() {
    this.procedimientoService.getAll().subscribe(procedimientos => this.procedimientos = procedimientos);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.auditoriaSolicitudService.getById(id).subscribe(auditoriaSolicitud => this.auditoriaSolicitud = auditoriaSolicitud);
      }
    });
  }

  save(formValues) {
    this.auditoriaSolicitud = formValues;
    this.auditoriaSolicitudService.insert(this.auditoriaSolicitud).subscribe(
      (response) => {
        this.router.navigate(['/entities/auditoria-solicitud']);
      }
    );
  }

  update() {
    this.auditoriaSolicitudService.update(this.auditoriaSolicitud._id, this.auditoriaSolicitud).subscribe(
      (response) => {
        this.router.navigate(['/entities/auditoria-solicitud']);
      }
    );
  }
}
