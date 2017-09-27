import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ParDependenciaCampo } from './par-dependencia-campo.model';
import { ParDependenciaCampoService } from './par-dependencia-campo.service';

@Component({
  selector: 'app-par-dependencia-campo-details',
  templateUrl: './par-dependencia-campo-details.component.html'
})
export class ParDependenciaCampoDetailsComponent implements OnInit {

  parDependenciaCampo: ParDependenciaCampo;

    constructor(
      private parDependenciaCampoService: ParDependenciaCampoService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.parDependenciaCampoService.getById(id).subscribe(parDependenciaCampo => this.parDependenciaCampo = parDependenciaCampo);
      });
    }
  }
