import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RecargoAutomatico } from './recargo-automatico.model';
import { RecargoAutomaticoService } from './recargo-automatico.service';

@Component({
  selector: 'app-recargo-automatico-details',
  templateUrl: './recargo-automatico-details.component.html'
})
export class RecargoAutomaticoDetailsComponent implements OnInit {

  recargoAutomatico: RecargoAutomatico;

    constructor(
      private recargoAutomaticoService: RecargoAutomaticoService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.recargoAutomaticoService.getById(id).subscribe(recargoAutomatico => this.recargoAutomatico = recargoAutomatico);
      });
    }
  }
