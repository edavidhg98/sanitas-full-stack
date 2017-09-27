import { Component, OnInit, Inject } from '@angular/core';

import { CarnetService } from './carnet.service';
import { Carnet } from './carnet.model';

@Component({
  selector: 'app-carnet',
  template: `
              <div class="container-fluid">
                <app-carnet-list [carnets]="carnets"></app-carnet-list>
              </div>
            `
})
export class CarnetComponent implements OnInit {

  carnets: Carnet[] = [];

  constructor(private carnetService: CarnetService) {

  }

  ngOnInit() {
    this.carnetService.getAll().subscribe(carnets => this.carnets = carnets);
  }
}
