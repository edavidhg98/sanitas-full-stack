import { Component, OnInit, Inject } from '@angular/core';

import { OpcionService } from './opcion.service';
import { Opcion } from './opcion.model';

@Component({
  selector: 'app-opcion',
  template: `
              <div class="container-fluid">
                <app-opcion-list [opcions]="opcions"></app-opcion-list>
              </div>
            `
})
export class OpcionComponent implements OnInit {

  opcions: Opcion[] = [];

  constructor(private opcionService: OpcionService) {

  }

  ngOnInit() {
    this.opcionService.getAll().subscribe(opcions => this.opcions = opcions);
  }
}
