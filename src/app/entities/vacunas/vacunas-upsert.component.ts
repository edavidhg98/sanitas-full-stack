import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { VacunasService } from './vacunas.service';
import { Vacunas } from './vacunas.model';


@Component({
  selector: 'app-vacunas-upsert',
  templateUrl: './vacunas-upsert.component.html'
})
export class VacunasUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  vacunas: Vacunas;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private vacunasService: VacunasService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.vacunasService.getById(id).subscribe(vacunas => this.vacunas = vacunas);
      }
    });
  }

  save(formValues) {
    this.vacunas = formValues;
    this.vacunasService.insert(this.vacunas).subscribe(
      (response) => {
        this.router.navigate(['/entities/vacunas']);
      }
    );
  }

  update() {
    this.vacunasService.update(this.vacunas._id, this.vacunas).subscribe(
      (response) => {
        this.router.navigate(['/entities/vacunas']);
      }
    );
  }
}
