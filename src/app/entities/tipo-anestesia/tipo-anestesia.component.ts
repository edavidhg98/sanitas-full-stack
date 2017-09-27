import { Component, OnInit, Inject } from '@angular/core';

import { TipoAnestesiaService } from './tipo-anestesia.service';
import { TipoAnestesia } from './tipo-anestesia.model';

@Component({
  selector: 'app-tipo-anestesia',
  template: `
              <div class="container-fluid">
                <app-tipo-anestesia-list [tipoAnestesias]="tipoAnestesias"></app-tipo-anestesia-list>
              </div>
            `
})
export class TipoAnestesiaComponent implements OnInit {

  tipoAnestesias: TipoAnestesia[] = [];

  constructor(private tipoAnestesiaService: TipoAnestesiaService) {

  }

  ngOnInit() {
    this.tipoAnestesiaService.getAll().subscribe(tipoAnestesias => this.tipoAnestesias = tipoAnestesias);
  }
}
