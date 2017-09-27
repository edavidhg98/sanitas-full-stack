import { Component, OnInit, Inject } from '@angular/core';

import { SalasService } from './salas.service';
import { Salas } from './salas.model';

@Component({
  selector: 'app-salas',
  template: `
              <div class="container-fluid">
                <app-salas-list [salass]="salass"></app-salas-list>
              </div>
            `
})
export class SalasComponent implements OnInit {

  salass: Salas[] = [];

  constructor(private salasService: SalasService) {

  }

  ngOnInit() {
    this.salasService.getAll().subscribe(salass => this.salass = salass);
  }
}
