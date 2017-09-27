import { Component, OnInit, Inject } from '@angular/core';

import { TipoCamaService } from './tipo-cama.service';
import { TipoCama } from './tipo-cama.model';

@Component({
  selector: 'app-tipo-cama',
  template: `
              <div class="container-fluid">
                <app-tipo-cama-list [tipoCamas]="tipoCamas"></app-tipo-cama-list>
              </div>
            `
})
export class TipoCamaComponent implements OnInit {

  tipoCamas: TipoCama[] = [];

  constructor(private tipoCamaService: TipoCamaService) {

  }

  ngOnInit() {
    this.tipoCamaService.getAll().subscribe(tipoCamas => this.tipoCamas = tipoCamas);
  }
}
