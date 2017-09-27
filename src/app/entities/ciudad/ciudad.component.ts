import { Component, OnInit, Inject } from '@angular/core';

import { CiudadService } from './ciudad.service';
import { Ciudad } from './ciudad.model';

@Component({
  selector: 'app-ciudad',
  template: `
              <div class="container-fluid">
                <app-ciudad-list [ciudads]="ciudads"></app-ciudad-list>
              </div>
            `
})
export class CiudadComponent implements OnInit {

  ciudads: Ciudad[] = [];

  constructor(private ciudadService: CiudadService) {

  }

  ngOnInit() {
    this.ciudadService.getAll().subscribe(ciudads => this.ciudads = ciudads);
  }
}
