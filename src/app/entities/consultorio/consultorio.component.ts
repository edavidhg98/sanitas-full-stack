import { Component, OnInit, Inject } from '@angular/core';

import { ConsultorioService } from './consultorio.service';
import { Consultorio } from './consultorio.model';

@Component({
  selector: 'app-consultorio',
  template: `
              <div class="container-fluid">
                <app-consultorio-list [consultorios]="consultorios"></app-consultorio-list>
              </div>
            `
})
export class ConsultorioComponent implements OnInit {

  consultorios: Consultorio[] = [];

  constructor(private consultorioService: ConsultorioService) {

  }

  ngOnInit() {
    this.consultorioService.getAll().subscribe(consultorios => this.consultorios = consultorios);
  }
}
