import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TipoCirugia } from './tipo-cirugia.model';
import { TipoCirugiaService } from './tipo-cirugia.service';

@Component({
  selector: 'app-tipo-cirugia-details',
  templateUrl: './tipo-cirugia-details.component.html'
})
export class TipoCirugiaDetailsComponent implements OnInit {

  tipoCirugia: TipoCirugia;

    constructor(
      private tipoCirugiaService: TipoCirugiaService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.tipoCirugiaService.getById(id).subscribe(tipoCirugia => this.tipoCirugia = tipoCirugia);
      });
    }
  }
