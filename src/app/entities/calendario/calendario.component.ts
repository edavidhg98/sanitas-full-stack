import { Component, OnInit, Inject } from '@angular/core';

import { CalendarioService } from './calendario.service';
import { Calendario } from './calendario.model';

@Component({
  selector: 'app-calendario',
  template: `
              <div class="container-fluid">
                <app-calendario-list [calendarios]="calendarios"></app-calendario-list>
              </div>
            `
})
export class CalendarioComponent implements OnInit {

  calendarios: Calendario[] = [];

  constructor(private calendarioService: CalendarioService) {

  }

  ngOnInit() {
    this.calendarioService.getAll().subscribe(calendarios => this.calendarios = calendarios);
  }
}
