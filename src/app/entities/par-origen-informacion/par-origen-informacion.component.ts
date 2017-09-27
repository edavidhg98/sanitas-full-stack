import { Component, OnInit, Inject } from '@angular/core';

import { ParOrigenInformacionService } from './par-origen-informacion.service';
import { ParOrigenInformacion } from './par-origen-informacion.model';

@Component({
  selector: 'app-par-origen-informacion',
  template: `
              <div class="container-fluid">
                <app-par-origen-informacion-list [parOrigenInformacions]="parOrigenInformacions"></app-par-origen-informacion-list>
              </div>
            `
})
export class ParOrigenInformacionComponent implements OnInit {

  parOrigenInformacions: ParOrigenInformacion[] = [];

  constructor(private parOrigenInformacionService: ParOrigenInformacionService) {

  }

  ngOnInit() {
    this.parOrigenInformacionService.getAll().subscribe(parOrigenInformacions => this.parOrigenInformacions = parOrigenInformacions);
  }
}
