import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TiposValoresService } from './tipos-valores.service';
import { TiposValores } from './tipos-valores.model';


@Component({
  selector: 'app-tipos-valores-upsert',
  templateUrl: './tipos-valores-upsert.component.html'
})
export class TiposValoresUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  tiposValores: TiposValores;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private tiposValoresService: TiposValoresService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.tiposValoresService.getById(id).subscribe(tiposValores => this.tiposValores = tiposValores);
      }
    });
  }

  save(formValues) {
    this.tiposValores = formValues;
    this.tiposValoresService.insert(this.tiposValores).subscribe(
      (response) => {
        this.router.navigate(['/entities/tipos-valores']);
      }
    );
  }

  update() {
    this.tiposValoresService.update(this.tiposValores._id, this.tiposValores).subscribe(
      (response) => {
        this.router.navigate(['/entities/tipos-valores']);
      }
    );
  }
}
