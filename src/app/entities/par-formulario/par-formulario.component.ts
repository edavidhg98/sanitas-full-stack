import { Component, OnInit, Inject } from '@angular/core';

import { ParFormularioService } from './par-formulario.service';
import { ParFormulario } from './par-formulario.model';

@Component({
  selector: 'app-par-formulario',
  template: `
              <div class="container-fluid">
                <app-par-formulario-list [parFormularios]="parFormularios"></app-par-formulario-list>
              </div>
            `
})
export class ParFormularioComponent implements OnInit {

  parFormularios: ParFormulario[] = [];

  constructor(private parFormularioService: ParFormularioService) {

  }

  ngOnInit() {
    this.parFormularioService.getAll().subscribe(parFormularios => this.parFormularios = parFormularios);
  }
}
