import { Component, OnInit, Inject } from '@angular/core';

import { VacunasService } from './vacunas.service';
import { Vacunas } from './vacunas.model';

@Component({
  selector: 'app-vacunas',
  template: `
              <div class="container-fluid">
                <app-vacunas-list [vacunass]="vacunass"></app-vacunas-list>
              </div>
            `
})
export class VacunasComponent implements OnInit {

  vacunass: Vacunas[] = [];

  constructor(private vacunasService: VacunasService) {

  }

  ngOnInit() {
    this.vacunasService.getAll().subscribe(vacunass => this.vacunass = vacunass);
  }
}
