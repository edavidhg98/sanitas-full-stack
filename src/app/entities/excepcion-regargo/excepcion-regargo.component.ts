import { Component, OnInit, Inject } from '@angular/core';

import { ExcepcionRegargoService } from './excepcion-regargo.service';
import { ExcepcionRegargo } from './excepcion-regargo.model';

@Component({
  selector: 'app-excepcion-regargo',
  template: `
              <div class="container-fluid">
                <app-excepcion-regargo-list [excepcionRegargos]="excepcionRegargos"></app-excepcion-regargo-list>
              </div>
            `
})
export class ExcepcionRegargoComponent implements OnInit {

  excepcionRegargos: ExcepcionRegargo[] = [];

  constructor(private excepcionRegargoService: ExcepcionRegargoService) {

  }

  ngOnInit() {
    this.excepcionRegargoService.getAll().subscribe(excepcionRegargos => this.excepcionRegargos = excepcionRegargos);
  }
}
