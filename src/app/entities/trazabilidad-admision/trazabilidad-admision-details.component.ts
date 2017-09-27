import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TrazabilidadAdmision } from './trazabilidad-admision.model';
import { TrazabilidadAdmisionService } from './trazabilidad-admision.service';

@Component({
  selector: 'app-trazabilidad-admision-details',
  templateUrl: './trazabilidad-admision-details.component.html'
})
export class TrazabilidadAdmisionDetailsComponent implements OnInit {

  trazabilidadAdmision: TrazabilidadAdmision;

    constructor(
      private trazabilidadAdmisionService: TrazabilidadAdmisionService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.trazabilidadAdmisionService.getById(id).subscribe(trazabilidadAdmision => this.trazabilidadAdmision = trazabilidadAdmision);
      });
    }
  }
