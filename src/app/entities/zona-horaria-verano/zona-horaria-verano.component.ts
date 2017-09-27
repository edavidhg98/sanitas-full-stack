import { Component, OnInit, Inject } from '@angular/core';

import { ZonaHorariaVeranoService } from './zona-horaria-verano.service';
import { ZonaHorariaVerano } from './zona-horaria-verano.model';

@Component({
  selector: 'app-zona-horaria-verano',
  template: `
              <div class="container-fluid">
                <app-zona-horaria-verano-list [zonaHorariaVeranos]="zonaHorariaVeranos"></app-zona-horaria-verano-list>
              </div>
            `
})
export class ZonaHorariaVeranoComponent implements OnInit {

  zonaHorariaVeranos: ZonaHorariaVerano[] = [];

  constructor(private zonaHorariaVeranoService: ZonaHorariaVeranoService) {

  }

  ngOnInit() {
    this.zonaHorariaVeranoService.getAll().subscribe(zonaHorariaVeranos => this.zonaHorariaVeranos = zonaHorariaVeranos);
  }
}
