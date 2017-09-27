import { Component, OnInit, Inject } from '@angular/core';

import { RecalculoAutomaticoService } from './recalculo-automatico.service';
import { RecalculoAutomatico } from './recalculo-automatico.model';

@Component({
  selector: 'app-recalculo-automatico',
  template: `
              <div class="container-fluid">
                <app-recalculo-automatico-list [recalculoAutomaticos]="recalculoAutomaticos"></app-recalculo-automatico-list>
              </div>
            `
})
export class RecalculoAutomaticoComponent implements OnInit {

  recalculoAutomaticos: RecalculoAutomatico[] = [];

  constructor(private recalculoAutomaticoService: RecalculoAutomaticoService) {

  }

  ngOnInit() {
    this.recalculoAutomaticoService.getAll().subscribe(recalculoAutomaticos => this.recalculoAutomaticos = recalculoAutomaticos);
  }
}
