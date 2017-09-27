import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ValeElectronico } from './vale-electronico.model';
import { ValeElectronicoService } from './vale-electronico.service';

@Component({
  selector: 'app-vale-electronico-details',
  templateUrl: './vale-electronico-details.component.html'
})
export class ValeElectronicoDetailsComponent implements OnInit {

  valeElectronico: ValeElectronico;

    constructor(
      private valeElectronicoService: ValeElectronicoService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.valeElectronicoService.getById(id).subscribe(valeElectronico => this.valeElectronico = valeElectronico);
      });
    }
  }
