import { Component, OnInit, Inject } from '@angular/core';

import { SeccionService } from './seccion.service';
import { Seccion } from './seccion.model';

@Component({
  selector: 'app-seccion',
  template: `
              <div class="container-fluid">
                <app-seccion-list [seccions]="seccions"></app-seccion-list>
              </div>
            `
})
export class SeccionComponent implements OnInit {

  seccions: Seccion[] = [];

  constructor(private seccionService: SeccionService) {

  }

  ngOnInit() {
    this.seccionService.getAll().subscribe(seccions => this.seccions = seccions);
  }
}
