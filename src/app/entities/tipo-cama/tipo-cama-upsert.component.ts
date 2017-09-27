import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TipoCamaService } from './tipo-cama.service';
import { TipoCama } from './tipo-cama.model';


@Component({
  selector: 'app-tipo-cama-upsert',
  templateUrl: './tipo-cama-upsert.component.html'
})
export class TipoCamaUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  tipoCama: TipoCama;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private tipoCamaService: TipoCamaService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.tipoCamaService.getById(id).subscribe(tipoCama => this.tipoCama = tipoCama);
      }
    });
  }

  save(formValues) {
    this.tipoCama = formValues;
    this.tipoCamaService.insert(this.tipoCama).subscribe(
      (response) => {
        this.router.navigate(['/entities/tipo-cama']);
      }
    );
  }

  update() {
    this.tipoCamaService.update(this.tipoCama._id, this.tipoCama).subscribe(
      (response) => {
        this.router.navigate(['/entities/tipo-cama']);
      }
    );
  }
}
