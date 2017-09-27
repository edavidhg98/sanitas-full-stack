import { Component, OnInit, Inject } from '@angular/core';

import { DiagnosticoService } from './diagnostico.service';
import { Diagnostico } from './diagnostico.model';

@Component({
  selector: 'app-diagnostico',
  template: `
              <div class="container-fluid">
                <app-diagnostico-list [diagnosticos]="diagnosticos"></app-diagnostico-list>
              </div>
            `
})
export class DiagnosticoComponent implements OnInit {

  diagnosticos: Diagnostico[] = [];

  constructor(private diagnosticoService: DiagnosticoService) {

  }

  ngOnInit() {
    this.diagnosticoService.getAll().subscribe(diagnosticos => this.diagnosticos = diagnosticos);
  }
}
