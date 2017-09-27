import { Component, OnInit, Inject } from '@angular/core';

import { CamaService } from './cama.service';
import { Cama } from './cama.model';

@Component({
  selector: 'app-cama',
  template: `
              <div class="container-fluid">
                <app-cama-list [camas]="camas"></app-cama-list>
              </div>
            `
})
export class CamaComponent implements OnInit {

  camas: Cama[] = [];

  constructor(private camaService: CamaService) {

  }

  ngOnInit() {
    this.camaService.getAll().subscribe(camas => this.camas = camas);
  }
}
