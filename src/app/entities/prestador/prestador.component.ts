import { Component, OnInit, Inject } from '@angular/core';

import { PrestadorService } from './prestador.service';
import { Prestador } from './prestador.model';

@Component({
  selector: 'app-prestador',
  template: `
              <div class="container-fluid">
                <app-prestador-list [prestadors]="prestadors"></app-prestador-list>
              </div>
            `
})
export class PrestadorComponent implements OnInit {

  prestadors: Prestador[] = [];

  constructor(private prestadorService: PrestadorService) {

  }

  ngOnInit() {
    this.prestadorService.getAll().subscribe(prestadors => this.prestadors = prestadors);
  }
}
