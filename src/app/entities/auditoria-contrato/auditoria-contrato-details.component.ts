import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AuditoriaContrato } from './auditoria-contrato.model';
import { AuditoriaContratoService } from './auditoria-contrato.service';

@Component({
  selector: 'app-auditoria-contrato-details',
  templateUrl: './auditoria-contrato-details.component.html'
})
export class AuditoriaContratoDetailsComponent implements OnInit {

  auditoriaContrato: AuditoriaContrato;

    constructor(
      private auditoriaContratoService: AuditoriaContratoService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.auditoriaContratoService.getById(id).subscribe(auditoriaContrato => this.auditoriaContrato = auditoriaContrato);
      });
    }
  }
