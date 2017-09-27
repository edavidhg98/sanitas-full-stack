import { Component, OnInit, Inject } from '@angular/core';

import { ReligionService } from './religion.service';
import { Religion } from './religion.model';

@Component({
  selector: 'app-religion',
  template: `
              <div class="container-fluid">
                <app-religion-list [religions]="religions"></app-religion-list>
              </div>
            `
})
export class ReligionComponent implements OnInit {

  religions: Religion[] = [];

  constructor(private religionService: ReligionService) {

  }

  ngOnInit() {
    this.religionService.getAll().subscribe(religions => this.religions = religions);
  }
}
