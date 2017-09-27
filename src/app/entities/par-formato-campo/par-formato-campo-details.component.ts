import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ParFormatoCampo } from './par-formato-campo.model';
import { ParFormatoCampoService } from './par-formato-campo.service';

@Component({
  selector: 'app-par-formato-campo-details',
  templateUrl: './par-formato-campo-details.component.html'
})
export class ParFormatoCampoDetailsComponent implements OnInit {

  parFormatoCampo: ParFormatoCampo;

    constructor(
      private parFormatoCampoService: ParFormatoCampoService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.parFormatoCampoService.getById(id).subscribe(parFormatoCampo => this.parFormatoCampo = parFormatoCampo);
      });
    }
  }
