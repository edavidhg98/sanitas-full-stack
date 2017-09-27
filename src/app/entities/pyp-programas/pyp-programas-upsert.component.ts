import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PypProgramasService } from './pyp-programas.service';
import { PypProgramas } from './pyp-programas.model';


@Component({
  selector: 'app-pyp-programas-upsert',
  templateUrl: './pyp-programas-upsert.component.html'
})
export class PypProgramasUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  pypProgramas: PypProgramas;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private pypProgramasService: PypProgramasService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.pypProgramasService.getById(id).subscribe(pypProgramas => this.pypProgramas = pypProgramas);
      }
    });
  }

  save(formValues) {
    this.pypProgramas = formValues;
    this.pypProgramasService.insert(this.pypProgramas).subscribe(
      (response) => {
        this.router.navigate(['/entities/pyp-programas']);
      }
    );
  }

  update() {
    this.pypProgramasService.update(this.pypProgramas._id, this.pypProgramas).subscribe(
      (response) => {
        this.router.navigate(['/entities/pyp-programas']);
      }
    );
  }
}
