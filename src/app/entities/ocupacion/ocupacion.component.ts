import { Component, OnInit, Inject } from '@angular/core';

import { OcupacionService } from './ocupacion.service';
import { Ocupacion } from './ocupacion.model';

@Component({
  selector: 'app-ocupacion',
  template: `
              <div class="container-fluid">
                <app-ocupacion-list [ocupacions]="ocupacions"></app-ocupacion-list>
              </div>
            `
})
export class OcupacionComponent implements OnInit {

  ocupacions: Ocupacion[] = [];

  constructor(private ocupacionService: OcupacionService) {

  }

  ngOnInit() {
    this.ocupacionService.getAll().subscribe(ocupacions => this.ocupacions = ocupacions);
  }
}
