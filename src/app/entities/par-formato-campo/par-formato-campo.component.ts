import { Component, OnInit, Inject } from '@angular/core';

import { ParFormatoCampoService } from './par-formato-campo.service';
import { ParFormatoCampo } from './par-formato-campo.model';

@Component({
  selector: 'app-par-formato-campo',
  template: `
              <div class="container-fluid">
                <app-par-formato-campo-list [parFormatoCampos]="parFormatoCampos"></app-par-formato-campo-list>
              </div>
            `
})
export class ParFormatoCampoComponent implements OnInit {

  parFormatoCampos: ParFormatoCampo[] = [];

  constructor(private parFormatoCampoService: ParFormatoCampoService) {

  }

  ngOnInit() {
    this.parFormatoCampoService.getAll().subscribe(parFormatoCampos => this.parFormatoCampos = parFormatoCampos);
  }
}
