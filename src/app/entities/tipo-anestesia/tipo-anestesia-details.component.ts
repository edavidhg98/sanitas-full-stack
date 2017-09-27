import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TipoAnestesia } from './tipo-anestesia.model';
import { TipoAnestesiaService } from './tipo-anestesia.service';

@Component({
  selector: 'app-tipo-anestesia-details',
  templateUrl: './tipo-anestesia-details.component.html'
})
export class TipoAnestesiaDetailsComponent implements OnInit {

  tipoAnestesia: TipoAnestesia;

    constructor(
      private tipoAnestesiaService: TipoAnestesiaService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.tipoAnestesiaService.getById(id).subscribe(tipoAnestesia => this.tipoAnestesia = tipoAnestesia);
      });
    }
  }
