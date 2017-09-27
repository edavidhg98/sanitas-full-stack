import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CatalogoMedicamentosService } from './catalogo-medicamentos.service';
import { CatalogoMedicamentos } from './catalogo-medicamentos.model';


@Component({
  selector: 'app-catalogo-medicamentos-upsert',
  templateUrl: './catalogo-medicamentos-upsert.component.html'
})
export class CatalogoMedicamentosUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  catalogoMedicamentos: CatalogoMedicamentos;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private catalogoMedicamentosService: CatalogoMedicamentosService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.catalogoMedicamentosService.getById(id).subscribe(catalogoMedicamentos => this.catalogoMedicamentos = catalogoMedicamentos);
      }
    });
  }

  save(formValues) {
    this.catalogoMedicamentos = formValues;
    this.catalogoMedicamentosService.insert(this.catalogoMedicamentos).subscribe(
      (response) => {
        this.router.navigate(['/entities/catalogo-medicamentos']);
      }
    );
  }

  update() {
    this.catalogoMedicamentosService.update(this.catalogoMedicamentos._id, this.catalogoMedicamentos).subscribe(
      (response) => {
        this.router.navigate(['/entities/catalogo-medicamentos']);
      }
    );
  }
}
