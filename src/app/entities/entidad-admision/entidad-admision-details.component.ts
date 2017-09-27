import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EntidadAdmision } from './entidad-admision.model';
import { EntidadAdmisionService } from './entidad-admision.service';

@Component({
  selector: 'app-entidad-admision-details',
  templateUrl: './entidad-admision-details.component.html'
})
export class EntidadAdmisionDetailsComponent implements OnInit {

  entidadAdmision: EntidadAdmision;

    constructor(
      private entidadAdmisionService: EntidadAdmisionService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.entidadAdmisionService.getById(id).subscribe(entidadAdmision => this.entidadAdmision = entidadAdmision);
      });
    }
  }
