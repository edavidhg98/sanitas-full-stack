import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ParFormularioService } from './par-formulario.service';
import { ParFormulario } from './par-formulario.model';


@Component({
  selector: 'app-par-formulario-upsert',
  templateUrl: './par-formulario-upsert.component.html'
})
export class ParFormularioUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  parFormulario: ParFormulario;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private parFormularioService: ParFormularioService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.parFormularioService.getById(id).subscribe(parFormulario => this.parFormulario = parFormulario);
      }
    });
  }

  save(formValues) {
    this.parFormulario = formValues;
    this.parFormularioService.insert(this.parFormulario).subscribe(
      (response) => {
        this.router.navigate(['/entities/par-formulario']);
      }
    );
  }

  update() {
    this.parFormularioService.update(this.parFormulario._id, this.parFormulario).subscribe(
      (response) => {
        this.router.navigate(['/entities/par-formulario']);
      }
    );
  }
}
