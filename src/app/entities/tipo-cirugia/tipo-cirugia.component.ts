import { Component, OnInit, Inject } from '@angular/core';

import { TipoCirugiaService } from './tipo-cirugia.service';
import { TipoCirugia } from './tipo-cirugia.model';

@Component({
  selector: 'app-tipo-cirugia',
  template: `
              <div class="container-fluid">
                <app-tipo-cirugia-list [tipoCirugias]="tipoCirugias"></app-tipo-cirugia-list>
              </div>
            `
})
export class TipoCirugiaComponent implements OnInit {

  tipoCirugias: TipoCirugia[] = [];

  constructor(private tipoCirugiaService: TipoCirugiaService) {

  }

  ngOnInit() {
    this.tipoCirugiaService.getAll().subscribe(tipoCirugias => this.tipoCirugias = tipoCirugias);
  }
}
