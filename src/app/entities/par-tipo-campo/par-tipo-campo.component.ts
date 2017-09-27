import { Component, OnInit, Inject } from '@angular/core';

import { ParTipoCampoService } from './par-tipo-campo.service';
import { ParTipoCampo } from './par-tipo-campo.model';

@Component({
  selector: 'app-par-tipo-campo',
  template: `
              <div class="container-fluid">
                <app-par-tipo-campo-list [parTipoCampos]="parTipoCampos"></app-par-tipo-campo-list>
              </div>
            `
})
export class ParTipoCampoComponent implements OnInit {

  parTipoCampos: ParTipoCampo[] = [];

  constructor(private parTipoCampoService: ParTipoCampoService) {

  }

  ngOnInit() {
    this.parTipoCampoService.getAll().subscribe(parTipoCampos => this.parTipoCampos = parTipoCampos);
  }
}
