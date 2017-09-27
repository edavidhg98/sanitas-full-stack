import { Component, OnInit, Inject } from '@angular/core';

import { SubconceptoService } from './subconcepto.service';
import { Subconcepto } from './subconcepto.model';

@Component({
  selector: 'app-subconcepto',
  template: `
              <div class="container-fluid">
                <app-subconcepto-list [subconceptos]="subconceptos"></app-subconcepto-list>
              </div>
            `
})
export class SubconceptoComponent implements OnInit {

  subconceptos: Subconcepto[] = [];

  constructor(private subconceptoService: SubconceptoService) {

  }

  ngOnInit() {
    this.subconceptoService.getAll().subscribe(subconceptos => this.subconceptos = subconceptos);
  }
}
