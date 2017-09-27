import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FotoEstadoCamaService } from './foto-estado-cama.service';
import { FotoEstadoCama } from './foto-estado-cama.model';


@Component({
  selector: 'app-foto-estado-cama-upsert',
  templateUrl: './foto-estado-cama-upsert.component.html'
})
export class FotoEstadoCamaUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  fotoEstadoCama: FotoEstadoCama;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fotoEstadoCamaService: FotoEstadoCamaService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.fotoEstadoCamaService.getById(id).subscribe(fotoEstadoCama => this.fotoEstadoCama = fotoEstadoCama);
      }
    });
  }

  save(formValues) {
    this.fotoEstadoCama = formValues;
    this.fotoEstadoCamaService.insert(this.fotoEstadoCama).subscribe(
      (response) => {
        this.router.navigate(['/entities/foto-estado-cama']);
      }
    );
  }

  update() {
    this.fotoEstadoCamaService.update(this.fotoEstadoCama._id, this.fotoEstadoCama).subscribe(
      (response) => {
        this.router.navigate(['/entities/foto-estado-cama']);
      }
    );
  }
}
