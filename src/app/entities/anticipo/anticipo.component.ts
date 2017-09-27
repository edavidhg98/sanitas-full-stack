import { Component, OnInit, Inject } from '@angular/core';

import { AnticipoService } from './anticipo.service';
import { Anticipo } from './anticipo.model';

@Component({
  selector: 'app-anticipo',
  template: `
              <div class="container-fluid">
                <app-anticipo-list [anticipos]="anticipos"></app-anticipo-list>
              </div>
            `
})
export class AnticipoComponent implements OnInit {

  anticipos: Anticipo[] = [];

  constructor(private anticipoService: AnticipoService) {

  }

  ngOnInit() {
    this.anticipoService.getAll().subscribe(anticipos => this.anticipos = anticipos);
  }
}
