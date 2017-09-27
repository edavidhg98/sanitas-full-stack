import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Calendario } from './calendario.model';
import { CalendarioService } from './calendario.service';

@Component({
  selector: 'app-calendario-details',
  templateUrl: './calendario-details.component.html'
})
export class CalendarioDetailsComponent implements OnInit {

  calendario: Calendario;

    constructor(
      private calendarioService: CalendarioService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.calendarioService.getById(id).subscribe(calendario => this.calendario = calendario);
      });
    }
  }
