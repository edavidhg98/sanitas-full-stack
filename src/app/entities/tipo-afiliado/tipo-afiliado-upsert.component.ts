import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TipoAfiliadoService } from './tipo-afiliado.service';
import { TipoAfiliado } from './tipo-afiliado.model';


@Component({
  selector: 'app-tipo-afiliado-upsert',
  templateUrl: './tipo-afiliado-upsert.component.html'
})
export class TipoAfiliadoUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  tipoAfiliado: TipoAfiliado;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private tipoAfiliadoService: TipoAfiliadoService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.tipoAfiliadoService.getById(id).subscribe(tipoAfiliado => this.tipoAfiliado = tipoAfiliado);
      }
    });
  }

  save(formValues) {
    this.tipoAfiliado = formValues;
    this.tipoAfiliadoService.insert(this.tipoAfiliado).subscribe(
      (response) => {
        this.router.navigate(['/entities/tipo-afiliado']);
      }
    );
  }

  update() {
    this.tipoAfiliadoService.update(this.tipoAfiliado._id, this.tipoAfiliado).subscribe(
      (response) => {
        this.router.navigate(['/entities/tipo-afiliado']);
      }
    );
  }
}
