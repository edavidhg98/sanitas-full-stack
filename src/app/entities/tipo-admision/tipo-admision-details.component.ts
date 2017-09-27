import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TipoAdmision } from './tipo-admision.model';
import { TipoAdmisionService } from './tipo-admision.service';

@Component({
  selector: 'app-tipo-admision-details',
  templateUrl: './tipo-admision-details.component.html'
})
export class TipoAdmisionDetailsComponent implements OnInit {

  tipoAdmision: TipoAdmision;

    constructor(
      private tipoAdmisionService: TipoAdmisionService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.tipoAdmisionService.getById(id).subscribe(tipoAdmision => this.tipoAdmision = tipoAdmision);
      });
    }
  }
