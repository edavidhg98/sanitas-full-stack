import { Component, OnInit, Inject } from '@angular/core';

import { RecargoService } from './recargo.service';
import { Recargo } from './recargo.model';

@Component({
  selector: 'app-recargo',
  template: `
              <div class="container-fluid">
                <app-recargo-list [recargos]="recargos"></app-recargo-list>
              </div>
            `
})
export class RecargoComponent implements OnInit {

  recargos: Recargo[] = [];

  constructor(private recargoService: RecargoService) {

  }

  ngOnInit() {
    this.recargoService.getAll().subscribe(recargos => this.recargos = recargos);
  }
}
