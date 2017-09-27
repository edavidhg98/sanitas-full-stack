import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CarnetService } from './carnet.service';
import { Carnet } from './carnet.model';


@Component({
  selector: 'app-carnet-upsert',
  templateUrl: './carnet-upsert.component.html'
})
export class CarnetUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  carnet: Carnet;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private carnetService: CarnetService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.carnetService.getById(id).subscribe(carnet => this.carnet = carnet);
      }
    });
  }

  save(formValues) {
    this.carnet = formValues;
    this.carnetService.insert(this.carnet).subscribe(
      (response) => {
        this.router.navigate(['/entities/carnet']);
      }
    );
  }

  update() {
    this.carnetService.update(this.carnet._id, this.carnet).subscribe(
      (response) => {
        this.router.navigate(['/entities/carnet']);
      }
    );
  }
}
