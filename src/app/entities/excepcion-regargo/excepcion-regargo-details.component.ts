import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ExcepcionRegargo } from './excepcion-regargo.model';
import { ExcepcionRegargoService } from './excepcion-regargo.service';

@Component({
  selector: 'app-excepcion-regargo-details',
  templateUrl: './excepcion-regargo-details.component.html'
})
export class ExcepcionRegargoDetailsComponent implements OnInit {

  excepcionRegargo: ExcepcionRegargo;

    constructor(
      private excepcionRegargoService: ExcepcionRegargoService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.excepcionRegargoService.getById(id).subscribe(excepcionRegargo => this.excepcionRegargo = excepcionRegargo);
      });
    }
  }
