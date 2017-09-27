import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CiudadService } from './ciudad.service';
import { Ciudad } from './ciudad.model';


@Component({
  selector: 'app-ciudad-upsert',
  templateUrl: './ciudad-upsert.component.html'
})
export class CiudadUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  ciudad: Ciudad;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ciudadService: CiudadService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.ciudadService.getById(id).subscribe(ciudad => this.ciudad = ciudad);
      }
    });
  }

  save(formValues) {
    this.ciudad = formValues;
    this.ciudadService.insert(this.ciudad).subscribe(
      (response) => {
        this.router.navigate(['/entities/ciudad']);
      }
    );
  }

  update() {
    this.ciudadService.update(this.ciudad._id, this.ciudad).subscribe(
      (response) => {
        this.router.navigate(['/entities/ciudad']);
      }
    );
  }
}
