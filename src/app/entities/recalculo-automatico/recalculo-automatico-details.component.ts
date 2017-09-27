import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RecalculoAutomatico } from './recalculo-automatico.model';
import { RecalculoAutomaticoService } from './recalculo-automatico.service';

@Component({
  selector: 'app-recalculo-automatico-details',
  templateUrl: './recalculo-automatico-details.component.html'
})
export class RecalculoAutomaticoDetailsComponent implements OnInit {

  recalculoAutomatico: RecalculoAutomatico;

    constructor(
      private recalculoAutomaticoService: RecalculoAutomaticoService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.recalculoAutomaticoService.getById(id).subscribe(recalculoAutomatico => this.recalculoAutomatico = recalculoAutomatico);
      });
    }
  }
