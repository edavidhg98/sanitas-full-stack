import { Component, OnInit, Inject } from '@angular/core';

import { PlanesService } from './planes.service';
import { Planes } from './planes.model';

@Component({
  selector: 'app-planes',
  template: `
              <div class="container-fluid">
                <app-planes-list [planess]="planess"></app-planes-list>
              </div>
            `
})
export class PlanesComponent implements OnInit {

  planess: Planes[] = [];

  constructor(private planesService: PlanesService) {

  }

  ngOnInit() {
    this.planesService.getAll().subscribe(planess => this.planess = planess);
  }
}
