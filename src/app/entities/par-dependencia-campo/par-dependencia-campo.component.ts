import { Component, OnInit, Inject } from '@angular/core';

import { ParDependenciaCampoService } from './par-dependencia-campo.service';
import { ParDependenciaCampo } from './par-dependencia-campo.model';

@Component({
  selector: 'app-par-dependencia-campo',
  template: `
              <div class="container-fluid">
                <app-par-dependencia-campo-list [parDependenciaCampos]="parDependenciaCampos"></app-par-dependencia-campo-list>
              </div>
            `
})
export class ParDependenciaCampoComponent implements OnInit {

  parDependenciaCampos: ParDependenciaCampo[] = [];

  constructor(private parDependenciaCampoService: ParDependenciaCampoService) {

  }

  ngOnInit() {
    this.parDependenciaCampoService.getAll().subscribe(parDependenciaCampos => this.parDependenciaCampos = parDependenciaCampos);
  }
}
