import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuditoriaContratoService } from './auditoria-contrato.service';
import { AuditoriaContrato } from './auditoria-contrato.model';

import { EntidadService } from '../entidad/entidad.service';
import { Entidad } from '../entidad/entidad.model';

@Component({
  selector: 'app-auditoria-contrato-upsert',
  templateUrl: './auditoria-contrato-upsert.component.html'
})
export class AuditoriaContratoUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  auditoriaContrato: AuditoriaContrato;

  /** Many-To-One Relationships */
  entidads: Entidad[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private auditoriaContratoService: AuditoriaContratoService,
    private entidadService: EntidadService,
  ) { }

  ngOnInit() {
    this.entidadService.getAll().subscribe(entidads => this.entidads = entidads);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.auditoriaContratoService.getById(id).subscribe(auditoriaContrato => this.auditoriaContrato = auditoriaContrato);
      }
    });
  }

  save(formValues) {
    this.auditoriaContrato = formValues;
    this.auditoriaContratoService.insert(this.auditoriaContrato).subscribe(
      (response) => {
        this.router.navigate(['/entities/auditoria-contrato']);
      }
    );
  }

  update() {
    this.auditoriaContratoService.update(this.auditoriaContrato._id, this.auditoriaContrato).subscribe(
      (response) => {
        this.router.navigate(['/entities/auditoria-contrato']);
      }
    );
  }
}
