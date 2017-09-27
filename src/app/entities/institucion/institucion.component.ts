import { Component, OnInit, Inject } from '@angular/core';

import { InstitucionService } from './institucion.service';
import { Institucion } from './institucion.model';

@Component({
  selector: 'app-institucion',
  template: `
              <div class="container-fluid">
                <app-institucion-list [institucions]="institucions"></app-institucion-list>
              </div>
            `
})
export class InstitucionComponent implements OnInit {

  institucions: Institucion[] = [];

  constructor(private institucionService: InstitucionService) {

  }

  ngOnInit() {
    this.institucionService.getAll().subscribe(institucions => this.institucions = institucions);
  }
}
