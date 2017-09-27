import { Component, OnInit, Inject } from '@angular/core';

import { AutorizacionBhService } from './autorizacion-bh.service';
import { AutorizacionBh } from './autorizacion-bh.model';

@Component({
  selector: 'app-autorizacion-bh',
  template: `
              <div class="container-fluid">
                <app-autorizacion-bh-list [autorizacionBhs]="autorizacionBhs"></app-autorizacion-bh-list>
              </div>
            `
})
export class AutorizacionBhComponent implements OnInit {

  autorizacionBhs: AutorizacionBh[] = [];

  constructor(private autorizacionBhService: AutorizacionBhService) {

  }

  ngOnInit() {
    this.autorizacionBhService.getAll().subscribe(autorizacionBhs => this.autorizacionBhs = autorizacionBhs);
  }
}
