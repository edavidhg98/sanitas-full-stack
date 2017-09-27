import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TipoCama } from './tipo-cama.model';
import { TipoCamaService } from './tipo-cama.service';

@Component({
  selector: 'app-tipo-cama-details',
  templateUrl: './tipo-cama-details.component.html'
})
export class TipoCamaDetailsComponent implements OnInit {

  tipoCama: TipoCama;

    constructor(
      private tipoCamaService: TipoCamaService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.tipoCamaService.getById(id).subscribe(tipoCama => this.tipoCama = tipoCama);
      });
    }
  }
