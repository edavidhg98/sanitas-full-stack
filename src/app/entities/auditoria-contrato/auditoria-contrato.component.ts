import { Component, OnInit, Inject } from '@angular/core';

import { AuditoriaContratoService } from './auditoria-contrato.service';
import { AuditoriaContrato } from './auditoria-contrato.model';

@Component({
  selector: 'app-auditoria-contrato',
  template: `
              <div class="container-fluid">
                <app-auditoria-contrato-list [auditoriaContratos]="auditoriaContratos"></app-auditoria-contrato-list>
              </div>
            `
})
export class AuditoriaContratoComponent implements OnInit {

  auditoriaContratos: AuditoriaContrato[] = [];

  constructor(private auditoriaContratoService: AuditoriaContratoService) {

  }

  ngOnInit() {
    this.auditoriaContratoService.getAll().subscribe(auditoriaContratos => this.auditoriaContratos = auditoriaContratos);
  }
}
