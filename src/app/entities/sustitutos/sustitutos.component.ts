import { Component, OnInit, Inject } from '@angular/core';

import { SustitutosService } from './sustitutos.service';
import { Sustitutos } from './sustitutos.model';

@Component({
  selector: 'app-sustitutos',
  template: `
              <div class="container-fluid">
                <app-sustitutos-list [sustitutoss]="sustitutoss"></app-sustitutos-list>
              </div>
            `
})
export class SustitutosComponent implements OnInit {

  sustitutoss: Sustitutos[] = [];

  constructor(private sustitutosService: SustitutosService) {

  }

  ngOnInit() {
    this.sustitutosService.getAll().subscribe(sustitutoss => this.sustitutoss = sustitutoss);
  }
}
