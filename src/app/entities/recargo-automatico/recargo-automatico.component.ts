import { Component, OnInit, Inject } from '@angular/core';

import { RecargoAutomaticoService } from './recargo-automatico.service';
import { RecargoAutomatico } from './recargo-automatico.model';

@Component({
  selector: 'app-recargo-automatico',
  template: `
              <div class="container-fluid">
                <app-recargo-automatico-list [recargoAutomaticos]="recargoAutomaticos"></app-recargo-automatico-list>
              </div>
            `
})
export class RecargoAutomaticoComponent implements OnInit {

  recargoAutomaticos: RecargoAutomatico[] = [];

  constructor(private recargoAutomaticoService: RecargoAutomaticoService) {

  }

  ngOnInit() {
    this.recargoAutomaticoService.getAll().subscribe(recargoAutomaticos => this.recargoAutomaticos = recargoAutomaticos);
  }
}
