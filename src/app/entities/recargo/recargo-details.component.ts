import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Recargo } from './recargo.model';
import { RecargoService } from './recargo.service';

@Component({
  selector: 'app-recargo-details',
  templateUrl: './recargo-details.component.html'
})
export class RecargoDetailsComponent implements OnInit {

  recargo: Recargo;

    constructor(
      private recargoService: RecargoService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.recargoService.getById(id).subscribe(recargo => this.recargo = recargo);
      });
    }
  }
