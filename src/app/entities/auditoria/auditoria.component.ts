import { Component, OnInit, Inject } from '@angular/core';

import { AuditoriaService } from './auditoria.service';
import { Auditoria } from './auditoria.model';

@Component({
  selector: 'app-auditoria',
  template: `
              <div class="container-fluid">
                <app-auditoria-list [auditorias]="auditorias"></app-auditoria-list>
              </div>
            `
})
export class AuditoriaComponent implements OnInit {

  auditorias: Auditoria[] = [];

  constructor(private auditoriaService: AuditoriaService) {

  }

  ngOnInit() {
    this.auditoriaService.getAll().subscribe(auditorias => this.auditorias = auditorias);
  }
}
