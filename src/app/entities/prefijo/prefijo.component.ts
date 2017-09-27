import { Component, OnInit, Inject } from '@angular/core';

import { PrefijoService } from './prefijo.service';
import { Prefijo } from './prefijo.model';

@Component({
  selector: 'app-prefijo',
  template: `
              <div class="container-fluid">
                <app-prefijo-list [prefijos]="prefijos"></app-prefijo-list>
              </div>
            `
})
export class PrefijoComponent implements OnInit {

  prefijos: Prefijo[] = [];

  constructor(private prefijoService: PrefijoService) {

  }

  ngOnInit() {
    this.prefijoService.getAll().subscribe(prefijos => this.prefijos = prefijos);
  }
}
