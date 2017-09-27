import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CodigoPostalService } from './codigo-postal.service';
import { CodigoPostal } from './codigo-postal.model';


@Component({
  selector: 'app-codigo-postal-upsert',
  templateUrl: './codigo-postal-upsert.component.html'
})
export class CodigoPostalUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  codigoPostal: CodigoPostal;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private codigoPostalService: CodigoPostalService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.codigoPostalService.getById(id).subscribe(codigoPostal => this.codigoPostal = codigoPostal);
      }
    });
  }

  save(formValues) {
    this.codigoPostal = formValues;
    this.codigoPostalService.insert(this.codigoPostal).subscribe(
      (response) => {
        this.router.navigate(['/entities/codigo-postal']);
      }
    );
  }

  update() {
    this.codigoPostalService.update(this.codigoPostal._id, this.codigoPostal).subscribe(
      (response) => {
        this.router.navigate(['/entities/codigo-postal']);
      }
    );
  }
}
