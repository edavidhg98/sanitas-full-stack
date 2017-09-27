import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PaisService } from './pais.service';
import { Pais } from './pais.model';


@Component({
  selector: 'app-pais-upsert',
  templateUrl: './pais-upsert.component.html'
})
export class PaisUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  pais: Pais;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private paisService: PaisService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.paisService.getById(id).subscribe(pais => this.pais = pais);
      }
    });
  }

  save(formValues) {
    this.pais = formValues;
    this.paisService.insert(this.pais).subscribe(
      (response) => {
        this.router.navigate(['/entities/pais']);
      }
    );
  }

  update() {
    this.paisService.update(this.pais._id, this.pais).subscribe(
      (response) => {
        this.router.navigate(['/entities/pais']);
      }
    );
  }
}
