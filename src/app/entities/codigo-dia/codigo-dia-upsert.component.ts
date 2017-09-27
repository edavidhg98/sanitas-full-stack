import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CodigoDiaService } from './codigo-dia.service';
import { CodigoDia } from './codigo-dia.model';


@Component({
  selector: 'app-codigo-dia-upsert',
  templateUrl: './codigo-dia-upsert.component.html'
})
export class CodigoDiaUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  codigoDia: CodigoDia;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private codigoDiaService: CodigoDiaService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.codigoDiaService.getById(id).subscribe(codigoDia => this.codigoDia = codigoDia);
      }
    });
  }

  save(formValues) {
    this.codigoDia = formValues;
    this.codigoDiaService.insert(this.codigoDia).subscribe(
      (response) => {
        this.router.navigate(['/entities/codigo-dia']);
      }
    );
  }

  update() {
    this.codigoDiaService.update(this.codigoDia._id, this.codigoDia).subscribe(
      (response) => {
        this.router.navigate(['/entities/codigo-dia']);
      }
    );
  }
}
