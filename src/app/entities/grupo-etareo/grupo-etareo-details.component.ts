import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GrupoEtareo } from './grupo-etareo.model';
import { GrupoEtareoService } from './grupo-etareo.service';

@Component({
  selector: 'app-grupo-etareo-details',
  templateUrl: './grupo-etareo-details.component.html'
})
export class GrupoEtareoDetailsComponent implements OnInit {

  grupoEtareo: GrupoEtareo;

    constructor(
      private grupoEtareoService: GrupoEtareoService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.grupoEtareoService.getById(id).subscribe(grupoEtareo => this.grupoEtareo = grupoEtareo);
      });
    }
  }
