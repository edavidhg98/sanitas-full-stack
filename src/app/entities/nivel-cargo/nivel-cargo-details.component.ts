import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NivelCargo } from './nivel-cargo.model';
import { NivelCargoService } from './nivel-cargo.service';

@Component({
  selector: 'app-nivel-cargo-details',
  templateUrl: './nivel-cargo-details.component.html'
})
export class NivelCargoDetailsComponent implements OnInit {

  nivelCargo: NivelCargo;

    constructor(
      private nivelCargoService: NivelCargoService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.nivelCargoService.getById(id).subscribe(nivelCargo => this.nivelCargo = nivelCargo);
      });
    }
  }
