import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ParTipoCampo } from './par-tipo-campo.model';
import { ParTipoCampoService } from './par-tipo-campo.service';

@Component({
  selector: 'app-par-tipo-campo-details',
  templateUrl: './par-tipo-campo-details.component.html'
})
export class ParTipoCampoDetailsComponent implements OnInit {

  parTipoCampo: ParTipoCampo;

    constructor(
      private parTipoCampoService: ParTipoCampoService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.parTipoCampoService.getById(id).subscribe(parTipoCampo => this.parTipoCampo = parTipoCampo);
      });
    }
  }
