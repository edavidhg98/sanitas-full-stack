import { Component, OnInit, Inject } from '@angular/core';

import { PypProgramasService } from './pyp-programas.service';
import { PypProgramas } from './pyp-programas.model';

@Component({
  selector: 'app-pyp-programas',
  template: `
              <div class="container-fluid">
                <app-pyp-programas-list [pypProgramass]="pypProgramass"></app-pyp-programas-list>
              </div>
            `
})
export class PypProgramasComponent implements OnInit {

  pypProgramass: PypProgramas[] = [];

  constructor(private pypProgramasService: PypProgramasService) {

  }

  ngOnInit() {
    this.pypProgramasService.getAll().subscribe(pypProgramass => this.pypProgramass = pypProgramass);
  }
}
