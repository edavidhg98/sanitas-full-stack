import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Sustitutos } from './sustitutos.model';
import { SustitutosService } from './sustitutos.service';

@Component({
  selector: 'app-sustitutos-details',
  templateUrl: './sustitutos-details.component.html'
})
export class SustitutosDetailsComponent implements OnInit {

  sustitutos: Sustitutos;

    constructor(
      private sustitutosService: SustitutosService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.sustitutosService.getById(id).subscribe(sustitutos => this.sustitutos = sustitutos);
      });
    }
  }
