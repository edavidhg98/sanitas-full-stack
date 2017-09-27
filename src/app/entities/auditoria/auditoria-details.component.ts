import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Auditoria } from './auditoria.model';
import { AuditoriaService } from './auditoria.service';

@Component({
  selector: 'app-auditoria-details',
  templateUrl: './auditoria-details.component.html'
})
export class AuditoriaDetailsComponent implements OnInit {

  auditoria: Auditoria;

    constructor(
      private auditoriaService: AuditoriaService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.auditoriaService.getById(id).subscribe(auditoria => this.auditoria = auditoria);
      });
    }
  }
