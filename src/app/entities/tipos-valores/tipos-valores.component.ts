import { Component, OnInit, Inject } from '@angular/core';

import { TiposValoresService } from './tipos-valores.service';
import { TiposValores } from './tipos-valores.model';

@Component({
  selector: 'app-tipos-valores',
  template: `
              <div class="container-fluid">
                <app-tipos-valores-list [tiposValoress]="tiposValoress"></app-tipos-valores-list>
              </div>
            `
})
export class TiposValoresComponent implements OnInit {

  tiposValoress: TiposValores[] = [];

  constructor(private tiposValoresService: TiposValoresService) {

  }

  ngOnInit() {
    this.tiposValoresService.getAll().subscribe(tiposValoress => this.tiposValoress = tiposValoress);
  }
}
