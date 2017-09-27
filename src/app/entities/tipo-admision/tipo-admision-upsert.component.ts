import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TipoAdmisionService } from './tipo-admision.service';
import { TipoAdmision } from './tipo-admision.model';


@Component({
  selector: 'app-tipo-admision-upsert',
  templateUrl: './tipo-admision-upsert.component.html'
})
export class TipoAdmisionUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  tipoAdmision: TipoAdmision;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private tipoAdmisionService: TipoAdmisionService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.tipoAdmisionService.getById(id).subscribe(tipoAdmision => this.tipoAdmision = tipoAdmision);
      }
    });
  }

  save(formValues) {
    this.tipoAdmision = formValues;
    this.tipoAdmisionService.insert(this.tipoAdmision).subscribe(
      (response) => {
        this.router.navigate(['/entities/tipo-admision']);
      }
    );
  }

  update() {
    this.tipoAdmisionService.update(this.tipoAdmision._id, this.tipoAdmision).subscribe(
      (response) => {
        this.router.navigate(['/entities/tipo-admision']);
      }
    );
  }
}
