import { Component, OnInit, Inject } from '@angular/core';

import { FotoEstadoCamaService } from './foto-estado-cama.service';
import { FotoEstadoCama } from './foto-estado-cama.model';

@Component({
  selector: 'app-foto-estado-cama',
  template: `
              <div class="container-fluid">
                <app-foto-estado-cama-list [fotoEstadoCamas]="fotoEstadoCamas"></app-foto-estado-cama-list>
              </div>
            `
})
export class FotoEstadoCamaComponent implements OnInit {

  fotoEstadoCamas: FotoEstadoCama[] = [];

  constructor(private fotoEstadoCamaService: FotoEstadoCamaService) {

  }

  ngOnInit() {
    this.fotoEstadoCamaService.getAll().subscribe(fotoEstadoCamas => this.fotoEstadoCamas = fotoEstadoCamas);
  }
}
