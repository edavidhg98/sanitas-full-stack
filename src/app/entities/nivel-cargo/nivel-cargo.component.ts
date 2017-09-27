import { Component, OnInit, Inject } from '@angular/core';

import { NivelCargoService } from './nivel-cargo.service';
import { NivelCargo } from './nivel-cargo.model';

@Component({
  selector: 'app-nivel-cargo',
  template: `
              <div class="container-fluid">
                <app-nivel-cargo-list [nivelCargos]="nivelCargos"></app-nivel-cargo-list>
              </div>
            `
})
export class NivelCargoComponent implements OnInit {

  nivelCargos: NivelCargo[] = [];

  constructor(private nivelCargoService: NivelCargoService) {

  }

  ngOnInit() {
    this.nivelCargoService.getAll().subscribe(nivelCargos => this.nivelCargos = nivelCargos);
  }
}
