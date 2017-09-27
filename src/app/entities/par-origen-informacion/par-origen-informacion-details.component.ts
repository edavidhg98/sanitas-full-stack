import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ParOrigenInformacion } from './par-origen-informacion.model';
import { ParOrigenInformacionService } from './par-origen-informacion.service';

@Component({
  selector: 'app-par-origen-informacion-details',
  templateUrl: './par-origen-informacion-details.component.html'
})
export class ParOrigenInformacionDetailsComponent implements OnInit {

  parOrigenInformacion: ParOrigenInformacion;

    constructor(
      private parOrigenInformacionService: ParOrigenInformacionService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.parOrigenInformacionService.getById(id).subscribe(parOrigenInformacion => this.parOrigenInformacion = parOrigenInformacion);
      });
    }
  }
