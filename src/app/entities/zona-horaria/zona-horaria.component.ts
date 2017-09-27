import { Component, OnInit, Inject } from '@angular/core';

import { ZonaHorariaService } from './zona-horaria.service';
import { ZonaHoraria } from './zona-horaria.model';

@Component({
  selector: 'app-zona-horaria',
  template: `
              <div class="container-fluid">
                <app-zona-horaria-list [zonaHorarias]="zonaHorarias"></app-zona-horaria-list>
              </div>
            `
})
export class ZonaHorariaComponent implements OnInit {

  zonaHorarias: ZonaHoraria[] = [];

  constructor(private zonaHorariaService: ZonaHorariaService) {

  }

  ngOnInit() {
    this.zonaHorariaService.getAll().subscribe(zonaHorarias => this.zonaHorarias = zonaHorarias);
  }
}
