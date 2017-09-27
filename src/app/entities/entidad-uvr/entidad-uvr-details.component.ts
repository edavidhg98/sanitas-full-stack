import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EntidadUvr } from './entidad-uvr.model';
import { EntidadUvrService } from './entidad-uvr.service';

@Component({
  selector: 'app-entidad-uvr-details',
  templateUrl: './entidad-uvr-details.component.html'
})
export class EntidadUvrDetailsComponent implements OnInit {

  entidadUvr: EntidadUvr;

    constructor(
      private entidadUvrService: EntidadUvrService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.entidadUvrService.getById(id).subscribe(entidadUvr => this.entidadUvr = entidadUvr);
      });
    }
  }
